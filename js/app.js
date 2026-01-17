// WCAG-EM Report Tool - Main Application

class WCAGEMApp {
    constructor() {
        this.currentStep = 1;
        this.evaluation = this.getEmptyEvaluation();
        this.init();
    }

    getEmptyEvaluation() {
        return {
            meta: {
                version: "1.0",
                created: new Date().toISOString(),
                modified: new Date().toISOString()
            },
            scope: {
                siteName: "",
                siteScope: "",
                scopeDescription: "",
                wcagVersion: "WCAG22",
                conformanceLevel: "AA",
                commissioner: "",
                evaluatorName: "",
                evaluatorOrg: "",
                evaluationDate: "",
                additionalRequirements: ""
            },
            explore: {
                functionalities: [],
                technologies: [],
                otherTechnologies: "",
                browsersTested: "",
                assistiveTech: ""
            },
            sample: {
                structuredSample: [],
                randomSample: []
            },
            audit: {
                // pageId -> { criterionId -> { result, observations } }
            },
            report: {
                execSummary: "",
                evalSpecifics: ""
            }
        };
    }

    init() {
        // Set default date to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('eval-date').value = today;

        // Bind step navigation
        document.querySelectorAll('.step-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const step = parseInt(e.currentTarget.dataset.step);
                this.goToStep(step);
            });
        });

        // Auto-save on input changes
        document.querySelectorAll('input, textarea, select').forEach(el => {
            el.addEventListener('change', () => this.saveFormData());
        });

        // Load saved data if exists
        this.loadFromLocalStorage();
        this.updateProgressIndicators();
    }

    // Navigation
    goToStep(step) {
        // Save current form data
        this.saveFormData();

        // Update UI
        document.querySelectorAll('.step-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        document.getElementById(`step-${step}`).classList.add('active');

        document.querySelectorAll('.step-btn').forEach(btn => {
            btn.classList.remove('active');
            if (parseInt(btn.dataset.step) === step) {
                btn.classList.add('active');
            }
        });

        this.currentStep = step;

        // Update navigation buttons
        document.getElementById('prev-step-btn').disabled = step === 1;
        document.getElementById('next-step-btn').disabled = step === 5;

        // Special handling for steps
        if (step === 4) {
            this.populateAuditPageSelect();
        }
        if (step === 5) {
            this.updateReportSummary();
        }

        this.updateProgressIndicators();
    }

    nextStep() {
        if (this.currentStep < 5) {
            this.goToStep(this.currentStep + 1);
        }
    }

    previousStep() {
        if (this.currentStep > 1) {
            this.goToStep(this.currentStep - 1);
        }
    }

    // Form data management
    saveFormData() {
        // Step 1: Scope
        this.evaluation.scope.siteName = document.getElementById('site-name').value;
        this.evaluation.scope.siteScope = document.getElementById('site-scope').value;
        this.evaluation.scope.scopeDescription = document.getElementById('site-scope-description').value;
        this.evaluation.scope.wcagVersion = document.getElementById('wcag-version').value;
        this.evaluation.scope.conformanceLevel = document.getElementById('conformance-level').value;
        this.evaluation.scope.commissioner = document.getElementById('eval-commissioner').value;
        this.evaluation.scope.evaluatorName = document.getElementById('evaluator-name').value;
        this.evaluation.scope.evaluatorOrg = document.getElementById('evaluator-org').value;
        this.evaluation.scope.evaluationDate = document.getElementById('eval-date').value;
        this.evaluation.scope.additionalRequirements = document.getElementById('additional-requirements').value;

        // Step 2: Explore
        const techs = [];
        document.querySelectorAll('input[name="technology"]:checked').forEach(cb => {
            techs.push(cb.value);
        });
        this.evaluation.explore.technologies = techs;
        this.evaluation.explore.otherTechnologies = document.getElementById('other-technologies').value;
        this.evaluation.explore.browsersTested = document.getElementById('browsers-tested').value;
        this.evaluation.explore.assistiveTech = document.getElementById('assistive-tech').value;

        // Step 5: Report
        this.evaluation.report.execSummary = document.getElementById('exec-summary').value;
        this.evaluation.report.evalSpecifics = document.getElementById('eval-specifics').value;

        // Update modified date
        this.evaluation.meta.modified = new Date().toISOString();

        // Save to localStorage
        this.saveToLocalStorage();
    }

    loadFormData() {
        // Step 1: Scope
        document.getElementById('site-name').value = this.evaluation.scope.siteName || '';
        document.getElementById('site-scope').value = this.evaluation.scope.siteScope || '';
        document.getElementById('site-scope-description').value = this.evaluation.scope.scopeDescription || '';
        document.getElementById('wcag-version').value = this.evaluation.scope.wcagVersion || 'WCAG22';
        document.getElementById('conformance-level').value = this.evaluation.scope.conformanceLevel || 'AA';
        document.getElementById('eval-commissioner').value = this.evaluation.scope.commissioner || '';
        document.getElementById('evaluator-name').value = this.evaluation.scope.evaluatorName || '';
        document.getElementById('evaluator-org').value = this.evaluation.scope.evaluatorOrg || '';
        document.getElementById('eval-date').value = this.evaluation.scope.evaluationDate || '';
        document.getElementById('additional-requirements').value = this.evaluation.scope.additionalRequirements || '';

        // Step 2: Explore
        document.querySelectorAll('input[name="technology"]').forEach(cb => {
            cb.checked = this.evaluation.explore.technologies.includes(cb.value);
        });
        document.getElementById('other-technologies').value = this.evaluation.explore.otherTechnologies || '';
        document.getElementById('browsers-tested').value = this.evaluation.explore.browsersTested || '';
        document.getElementById('assistive-tech').value = this.evaluation.explore.assistiveTech || '';

        // Render functionalities
        this.renderFunctionalities();

        // Render sample pages
        this.renderSamplePages();

        // Step 5: Report
        document.getElementById('exec-summary').value = this.evaluation.report.execSummary || '';
        document.getElementById('eval-specifics').value = this.evaluation.report.evalSpecifics || '';
    }

    // LocalStorage
    saveToLocalStorage() {
        try {
            localStorage.setItem('wcag-em-evaluation', JSON.stringify(this.evaluation));
        } catch (e) {
            console.warn('Could not save to localStorage:', e);
        }
    }

    loadFromLocalStorage() {
        try {
            const saved = localStorage.getItem('wcag-em-evaluation');
            if (saved) {
                this.evaluation = JSON.parse(saved);
                this.loadFormData();
            }
        } catch (e) {
            console.warn('Could not load from localStorage:', e);
        }
    }

    // Functionalities (Step 2)
    addFunctionality() {
        const input = document.getElementById('new-functionality');
        const value = input.value.trim();
        if (value) {
            this.evaluation.explore.functionalities.push(value);
            input.value = '';
            this.renderFunctionalities();
            this.saveToLocalStorage();
        }
    }

    removeFunctionality(index) {
        this.evaluation.explore.functionalities.splice(index, 1);
        this.renderFunctionalities();
        this.saveToLocalStorage();
    }

    renderFunctionalities() {
        const container = document.getElementById('functionalities-list');
        container.innerHTML = '';

        this.evaluation.explore.functionalities.forEach((func, index) => {
            const item = document.createElement('div');
            item.className = 'dynamic-item';
            item.innerHTML = `
                <span>${func}</span>
                <button type="button" class="btn btn-danger btn-sm" onclick="app.removeFunctionality(${index})">Verwijderen</button>
            `;
            container.appendChild(item);
        });
    }

    // Sample pages (Step 3)
    addSamplePage(type) {
        let title, url, desc;

        if (type === 'structured') {
            title = document.getElementById('new-page-title').value.trim();
            url = document.getElementById('new-page-url').value.trim();
            desc = document.getElementById('new-page-type').value.trim();

            if (title && url) {
                const pageId = 'page-' + Date.now();
                this.evaluation.sample.structuredSample.push({ id: pageId, title, url, description: desc });
                document.getElementById('new-page-title').value = '';
                document.getElementById('new-page-url').value = '';
                document.getElementById('new-page-type').value = '';
            }
        } else {
            title = document.getElementById('random-page-title').value.trim();
            url = document.getElementById('random-page-url').value.trim();
            desc = document.getElementById('random-page-desc').value.trim();

            if (title && url) {
                const pageId = 'page-' + Date.now();
                this.evaluation.sample.randomSample.push({ id: pageId, title, url, description: desc });
                document.getElementById('random-page-title').value = '';
                document.getElementById('random-page-url').value = '';
                document.getElementById('random-page-desc').value = '';
            }
        }

        this.renderSamplePages();
        this.saveToLocalStorage();
    }

    removeSamplePage(type, index) {
        if (type === 'structured') {
            const page = this.evaluation.sample.structuredSample[index];
            if (page && this.evaluation.audit[page.id]) {
                delete this.evaluation.audit[page.id];
            }
            this.evaluation.sample.structuredSample.splice(index, 1);
        } else {
            const page = this.evaluation.sample.randomSample[index];
            if (page && this.evaluation.audit[page.id]) {
                delete this.evaluation.audit[page.id];
            }
            this.evaluation.sample.randomSample.splice(index, 1);
        }
        this.renderSamplePages();
        this.saveToLocalStorage();
    }

    renderSamplePages() {
        // Structured sample
        const structuredList = document.getElementById('structured-sample-list');
        structuredList.innerHTML = '';

        this.evaluation.sample.structuredSample.forEach((page, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${this.escapeHtml(page.title)}</td>
                <td><a href="${this.escapeHtml(page.url)}" target="_blank">${this.escapeHtml(page.url)}</a></td>
                <td>${this.escapeHtml(page.description || '')}</td>
                <td><button type="button" class="btn btn-danger btn-sm" onclick="app.removeSamplePage('structured', ${index})">Verwijderen</button></td>
            `;
            structuredList.appendChild(row);
        });

        // Random sample
        const randomList = document.getElementById('random-sample-list');
        randomList.innerHTML = '';

        this.evaluation.sample.randomSample.forEach((page, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${this.escapeHtml(page.title)}</td>
                <td><a href="${this.escapeHtml(page.url)}" target="_blank">${this.escapeHtml(page.url)}</a></td>
                <td>${this.escapeHtml(page.description || '')}</td>
                <td><button type="button" class="btn btn-danger btn-sm" onclick="app.removeSamplePage('random', ${index})">Verwijderen</button></td>
            `;
            randomList.appendChild(row);
        });
    }

    // Audit (Step 4)
    getAllPages() {
        return [
            ...this.evaluation.sample.structuredSample,
            ...this.evaluation.sample.randomSample
        ];
    }

    populateAuditPageSelect() {
        const select = document.getElementById('audit-page-select');
        const currentValue = select.value;
        select.innerHTML = '<option value="">-- Kies een pagina --</option>';

        const pages = this.getAllPages();
        pages.forEach(page => {
            const option = document.createElement('option');
            option.value = page.id;
            option.textContent = page.title;
            select.appendChild(option);
        });

        if (currentValue && pages.find(p => p.id === currentValue)) {
            select.value = currentValue;
        }
    }

    selectAuditPage() {
        const pageId = document.getElementById('audit-page-select').value;
        const container = document.getElementById('audit-content');

        if (!pageId) {
            container.innerHTML = '<p class="no-page-selected">Selecteer eerst een pagina om te auditen.</p>';
            return;
        }

        const page = this.getAllPages().find(p => p.id === pageId);
        if (!page) return;

        // Initialize audit data for this page if not exists
        if (!this.evaluation.audit[pageId]) {
            this.evaluation.audit[pageId] = {};
        }

        this.renderAuditCriteria(pageId);
    }

    renderAuditCriteria(pageId) {
        const container = document.getElementById('audit-content');
        const version = this.evaluation.scope.wcagVersion;
        const level = this.evaluation.scope.conformanceLevel;

        const criteria = getCriteriaForConformanceLevel(level, version);

        // Group by principle and guideline
        const grouped = {};
        WCAG_CRITERIA.principles.forEach(p => {
            grouped[p.id] = {
                principle: p,
                guidelines: {}
            };
        });

        criteria.forEach(sc => {
            const guideline = WCAG_CRITERIA.guidelines.find(g => g.num === sc.guideline);
            if (!grouped[sc.principle].guidelines[sc.guideline]) {
                grouped[sc.principle].guidelines[sc.guideline] = {
                    guideline: guideline,
                    criteria: []
                };
            }
            grouped[sc.principle].guidelines[sc.guideline].criteria.push(sc);
        });

        let html = '<div class="audit-criteria">';

        Object.values(grouped).forEach(principleGroup => {
            const principle = principleGroup.principle;
            html += `
                <div class="principle-section" data-principle="${principle.id}">
                    <h3 class="principle-title">${principle.num}. ${principle.name}</h3>
            `;

            Object.values(principleGroup.guidelines).forEach(guidelineGroup => {
                const guideline = guidelineGroup.guideline;
                html += `
                    <div class="guideline-section">
                        <h4 class="guideline-title">${guideline.num} ${guideline.name}</h4>
                `;

                guidelineGroup.criteria.forEach(sc => {
                    const auditData = this.evaluation.audit[pageId][sc.id] || { result: 'untested', observations: '' };
                    html += this.renderCriterionCard(sc, pageId, auditData);
                });

                html += '</div>';
            });

            html += '</div>';
        });

        html += '</div>';
        container.innerHTML = html;

        // Apply current filters
        this.filterCriteria();
    }

    renderCriterionCard(sc, pageId, auditData) {
        const resultOptions = [
            { value: 'untested', label: 'Niet getest', class: 'untested' },
            { value: 'passed', label: 'Geslaagd', class: 'passed' },
            { value: 'failed', label: 'Niet geslaagd', class: 'failed' },
            { value: 'cantTell', label: 'Kan niet bepalen', class: 'cant-tell' },
            { value: 'notApplicable', label: 'Niet van toepassing', class: 'not-applicable' }
        ];

        let optionsHtml = resultOptions.map(opt =>
            `<option value="${opt.value}" ${auditData.result === opt.value ? 'selected' : ''}>${opt.label}</option>`
        ).join('');

        return `
            <div class="criterion-card" data-criterion="${sc.id}" data-level="${sc.level}" data-result="${auditData.result}">
                <div class="criterion-header">
                    <span class="criterion-num">${sc.num}</span>
                    <span class="criterion-name">${sc.name}</span>
                    <span class="criterion-level level-${sc.level}">${sc.level}</span>
                </div>
                <p class="criterion-description">${sc.description}</p>
                <div class="criterion-audit">
                    <div class="form-group">
                        <label for="result-${pageId}-${sc.id}">Resultaat:</label>
                        <select id="result-${pageId}-${sc.id}" class="result-select result-${auditData.result}"
                                onchange="app.updateAuditResult('${pageId}', '${sc.id}', this.value)">
                            ${optionsHtml}
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="obs-${pageId}-${sc.id}">Observaties:</label>
                        <textarea id="obs-${pageId}-${sc.id}" rows="2"
                                  placeholder="Beschrijf bevindingen, locatie van problemen, etc."
                                  onchange="app.updateAuditObservations('${pageId}', '${sc.id}', this.value)">${this.escapeHtml(auditData.observations || '')}</textarea>
                    </div>
                </div>
            </div>
        `;
    }

    updateAuditResult(pageId, criterionId, result) {
        if (!this.evaluation.audit[pageId]) {
            this.evaluation.audit[pageId] = {};
        }
        if (!this.evaluation.audit[pageId][criterionId]) {
            this.evaluation.audit[pageId][criterionId] = { result: 'untested', observations: '' };
        }
        this.evaluation.audit[pageId][criterionId].result = result;

        // Update UI
        const card = document.querySelector(`[data-criterion="${criterionId}"]`);
        if (card) {
            card.dataset.result = result;
            const select = card.querySelector('.result-select');
            select.className = `result-select result-${result}`;
        }

        this.saveToLocalStorage();
        this.updateProgressIndicators();
    }

    updateAuditObservations(pageId, criterionId, observations) {
        if (!this.evaluation.audit[pageId]) {
            this.evaluation.audit[pageId] = {};
        }
        if (!this.evaluation.audit[pageId][criterionId]) {
            this.evaluation.audit[pageId][criterionId] = { result: 'untested', observations: '' };
        }
        this.evaluation.audit[pageId][criterionId].observations = observations;
        this.saveToLocalStorage();
    }

    filterCriteria() {
        const principleFilter = document.getElementById('filter-principle').value;
        const levelFilter = document.getElementById('filter-level').value;
        const resultFilter = document.getElementById('filter-result').value;

        document.querySelectorAll('.principle-section').forEach(section => {
            if (principleFilter === 'all' || section.dataset.principle === principleFilter) {
                section.style.display = '';
            } else {
                section.style.display = 'none';
            }
        });

        document.querySelectorAll('.criterion-card').forEach(card => {
            let show = true;

            if (levelFilter !== 'all' && card.dataset.level !== levelFilter) {
                show = false;
            }

            if (resultFilter !== 'all' && card.dataset.result !== resultFilter) {
                show = false;
            }

            card.style.display = show ? '' : 'none';
        });
    }

    // Report (Step 5)
    updateReportSummary() {
        // Update summary cards
        document.getElementById('summary-site-name').textContent = this.evaluation.scope.siteName || '-';
        document.getElementById('summary-conformance').textContent =
            `${this.evaluation.scope.wcagVersion} ${this.evaluation.scope.conformanceLevel}`;
        document.getElementById('summary-pages').textContent = this.getAllPages().length;
        document.getElementById('summary-date').textContent = this.evaluation.scope.evaluationDate || '-';

        // Calculate statistics
        const stats = this.calculateStats();
        document.getElementById('stat-passed').textContent = stats.passed;
        document.getElementById('stat-failed').textContent = stats.failed;
        document.getElementById('stat-cant-tell').textContent = stats.cantTell;
        document.getElementById('stat-not-applicable').textContent = stats.notApplicable;
        document.getElementById('stat-untested').textContent = stats.untested;

        // Conformance result
        this.updateConformanceResult(stats);
    }

    calculateStats() {
        const stats = {
            passed: 0,
            failed: 0,
            cantTell: 0,
            notApplicable: 0,
            untested: 0
        };

        const version = this.evaluation.scope.wcagVersion;
        const level = this.evaluation.scope.conformanceLevel;
        const criteria = getCriteriaForConformanceLevel(level, version);
        const pages = this.getAllPages();

        // Count results across all pages
        const aggregatedResults = {};

        criteria.forEach(sc => {
            // For each criterion, determine overall result
            // Failed on any page = failed
            // cantTell on any page (and no fail) = cantTell
            // All passed or notApplicable = passed
            // Otherwise untested

            let hasResult = false;
            let hasFail = false;
            let hasCantTell = false;
            let allPassedOrNA = true;

            pages.forEach(page => {
                const pageAudit = this.evaluation.audit[page.id];
                if (pageAudit && pageAudit[sc.id]) {
                    hasResult = true;
                    const result = pageAudit[sc.id].result;
                    if (result === 'failed') hasFail = true;
                    if (result === 'cantTell') hasCantTell = true;
                    if (result !== 'passed' && result !== 'notApplicable') {
                        allPassedOrNA = false;
                    }
                } else {
                    allPassedOrNA = false;
                }
            });

            if (!hasResult || (pages.length === 0)) {
                stats.untested++;
            } else if (hasFail) {
                stats.failed++;
            } else if (hasCantTell) {
                stats.cantTell++;
            } else if (allPassedOrNA) {
                stats.passed++;
            } else {
                stats.untested++;
            }
        });

        return stats;
    }

    updateConformanceResult(stats) {
        const resultDiv = document.getElementById('conformance-result');
        const level = this.evaluation.scope.conformanceLevel;

        if (stats.untested > 0 || stats.cantTell > 0) {
            resultDiv.innerHTML = `
                <div class="conformance-incomplete">
                    <strong>Evaluatie incompleet</strong>
                    <p>Er zijn nog ${stats.untested} criteria niet getest en ${stats.cantTell} criteria met onduidelijk resultaat.</p>
                </div>
            `;
        } else if (stats.failed > 0) {
            resultDiv.innerHTML = `
                <div class="conformance-fail">
                    <strong>Voldoet NIET aan WCAG ${this.evaluation.scope.wcagVersion} niveau ${level}</strong>
                    <p>${stats.failed} succescriteria zijn niet geslaagd.</p>
                </div>
            `;
        } else {
            resultDiv.innerHTML = `
                <div class="conformance-pass">
                    <strong>Voldoet aan WCAG ${this.evaluation.scope.wcagVersion} niveau ${level}</strong>
                    <p>Alle ${stats.passed + stats.notApplicable} succescriteria zijn geslaagd of niet van toepassing.</p>
                </div>
            `;
        }
    }

    // Progress indicators
    updateProgressIndicators() {
        // Scope
        const scopeComplete = this.evaluation.scope.siteName &&
                             this.evaluation.scope.siteScope &&
                             this.evaluation.scope.evaluatorName &&
                             this.evaluation.scope.evaluationDate;
        document.getElementById('progress-scope').textContent = scopeComplete ? 'Compleet' : 'Incompleet';
        document.getElementById('progress-scope').className = `progress-status ${scopeComplete ? 'complete' : 'incomplete'}`;

        // Explore
        const exploreComplete = this.evaluation.explore.functionalities.length > 0 ||
                               this.evaluation.explore.technologies.length > 0;
        document.getElementById('progress-explore').textContent = exploreComplete ? 'Compleet' : 'Incompleet';
        document.getElementById('progress-explore').className = `progress-status ${exploreComplete ? 'complete' : 'incomplete'}`;

        // Sample
        const sampleComplete = this.getAllPages().length > 0;
        document.getElementById('progress-sample').textContent = sampleComplete ? `${this.getAllPages().length} pagina's` : 'Incompleet';
        document.getElementById('progress-sample').className = `progress-status ${sampleComplete ? 'complete' : 'incomplete'}`;

        // Audit
        const stats = this.calculateStats();
        const totalTested = stats.passed + stats.failed + stats.cantTell + stats.notApplicable;
        const total = totalTested + stats.untested;
        const auditPercent = total > 0 ? Math.round((totalTested / total) * 100) : 0;
        document.getElementById('progress-audit').textContent = `${auditPercent}% getest`;
        document.getElementById('progress-audit').className = `progress-status ${auditPercent === 100 ? 'complete' : 'incomplete'}`;
    }

    // File operations
    saveEvaluation() {
        this.saveFormData();
        const dataStr = JSON.stringify(this.evaluation, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `wcag-em-evaluation-${this.evaluation.scope.siteName || 'unnamed'}-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    loadEvaluation(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                this.evaluation = data;
                this.loadFormData();
                this.updateProgressIndicators();
                alert('Evaluatie succesvol geladen!');
            } catch (err) {
                alert('Fout bij laden van bestand: ' + err.message);
            }
        };
        reader.readAsText(file);

        // Reset input
        event.target.value = '';
    }

    newEvaluation() {
        if (confirm('Weet u zeker dat u een nieuwe evaluatie wilt starten? Niet-opgeslagen wijzigingen gaan verloren.')) {
            this.evaluation = this.getEmptyEvaluation();
            localStorage.removeItem('wcag-em-evaluation');

            // Reset form
            document.querySelectorAll('input[type="text"], input[type="url"], textarea').forEach(el => {
                el.value = '';
            });
            document.querySelectorAll('input[type="checkbox"]').forEach(el => {
                el.checked = false;
            });
            document.getElementById('wcag-version').value = 'WCAG22';
            document.getElementById('conformance-level').value = 'AA';
            document.getElementById('eval-date').value = new Date().toISOString().split('T')[0];

            this.renderFunctionalities();
            this.renderSamplePages();
            this.goToStep(1);
            this.updateProgressIndicators();
        }
    }

    // Export functions
    exportJSON() {
        this.saveEvaluation();
    }

    exportHTML() {
        this.saveFormData();
        const html = this.generateHTMLReport();
        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `wcag-em-rapport-${this.evaluation.scope.siteName || 'unnamed'}-${new Date().toISOString().split('T')[0]}.html`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    generateHTMLReport() {
        const stats = this.calculateStats();
        const version = this.evaluation.scope.wcagVersion;
        const level = this.evaluation.scope.conformanceLevel;
        const criteria = getCriteriaForConformanceLevel(level, version);
        const pages = this.getAllPages();

        let conformanceText = '';
        if (stats.untested > 0 || stats.cantTell > 0) {
            conformanceText = 'Evaluatie incompleet';
        } else if (stats.failed > 0) {
            conformanceText = `Voldoet NIET aan ${version} niveau ${level}`;
        } else {
            conformanceText = `Voldoet aan ${version} niveau ${level}`;
        }

        let pagesHtml = pages.map(p => `<li><a href="${this.escapeHtml(p.url)}">${this.escapeHtml(p.title)}</a> - ${this.escapeHtml(p.description || '')}</li>`).join('');

        let criteriaHtml = '';
        criteria.forEach(sc => {
            // Aggregate result across pages
            let overallResult = 'untested';
            let observations = [];

            pages.forEach(page => {
                const pageAudit = this.evaluation.audit[page.id];
                if (pageAudit && pageAudit[sc.id]) {
                    const r = pageAudit[sc.id];
                    if (r.result === 'failed') overallResult = 'failed';
                    else if (r.result === 'cantTell' && overallResult !== 'failed') overallResult = 'cantTell';
                    else if ((r.result === 'passed' || r.result === 'notApplicable') && overallResult === 'untested') overallResult = r.result;

                    if (r.observations) {
                        observations.push(`<strong>${page.title}:</strong> ${this.escapeHtml(r.observations)}`);
                    }
                }
            });

            const resultLabels = {
                'untested': 'Niet getest',
                'passed': 'Geslaagd',
                'failed': 'Niet geslaagd',
                'cantTell': 'Kan niet bepalen',
                'notApplicable': 'Niet van toepassing'
            };

            criteriaHtml += `
                <tr class="result-${overallResult}">
                    <td>${sc.num}</td>
                    <td>${this.escapeHtml(sc.name)}</td>
                    <td>${sc.level}</td>
                    <td class="result">${resultLabels[overallResult]}</td>
                    <td>${observations.length > 0 ? observations.join('<br>') : '-'}</td>
                </tr>
            `;
        });

        return `<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WCAG-EM Evaluatierapport - ${this.escapeHtml(this.evaluation.scope.siteName)}</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; max-width: 1200px; margin: 0 auto; padding: 2rem; color: #333; }
        h1 { color: #1a5f7a; border-bottom: 3px solid #1a5f7a; padding-bottom: 0.5rem; }
        h2 { color: #2c3e50; margin-top: 2rem; }
        table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
        th, td { padding: 0.75rem; text-align: left; border: 1px solid #ddd; }
        th { background: #f5f5f5; }
        .result-passed .result { color: #27ae60; font-weight: bold; }
        .result-failed .result { color: #e74c3c; font-weight: bold; }
        .result-cantTell .result { color: #f39c12; font-weight: bold; }
        .result-notApplicable .result { color: #7f8c8d; }
        .result-untested .result { color: #95a5a6; }
        .summary-box { background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin: 1rem 0; }
        .conformance-result { font-size: 1.25rem; padding: 1rem; border-radius: 8px; margin: 1rem 0; }
        .conformance-pass { background: #d4edda; color: #155724; }
        .conformance-fail { background: #f8d7da; color: #721c24; }
        .conformance-incomplete { background: #fff3cd; color: #856404; }
        .stats { display: flex; gap: 1rem; flex-wrap: wrap; margin: 1rem 0; }
        .stat { padding: 1rem; border-radius: 8px; min-width: 120px; text-align: center; }
        .stat-passed { background: #d4edda; }
        .stat-failed { background: #f8d7da; }
        .stat-cant-tell { background: #fff3cd; }
        .stat-not-applicable { background: #e2e3e5; }
        .stat-untested { background: #cce5ff; }
        .stat-number { font-size: 2rem; font-weight: bold; display: block; }
        @media print { body { padding: 0; } }
    </style>
</head>
<body>
    <h1>WCAG-EM Evaluatierapport</h1>

    <div class="summary-box">
        <h2>Evaluatie informatie</h2>
        <p><strong>Website:</strong> ${this.escapeHtml(this.evaluation.scope.siteName)}</p>
        <p><strong>Scope:</strong> <a href="${this.escapeHtml(this.evaluation.scope.siteScope)}">${this.escapeHtml(this.evaluation.scope.siteScope)}</a></p>
        ${this.evaluation.scope.scopeDescription ? `<p><strong>Scope omschrijving:</strong> ${this.escapeHtml(this.evaluation.scope.scopeDescription)}</p>` : ''}
        <p><strong>Conformiteitsdoel:</strong> ${version} niveau ${level}</p>
        ${this.evaluation.scope.commissioner ? `<p><strong>Opdrachtgever:</strong> ${this.escapeHtml(this.evaluation.scope.commissioner)}</p>` : ''}
        <p><strong>Evaluator:</strong> ${this.escapeHtml(this.evaluation.scope.evaluatorName)} ${this.evaluation.scope.evaluatorOrg ? `(${this.escapeHtml(this.evaluation.scope.evaluatorOrg)})` : ''}</p>
        <p><strong>Evaluatiedatum:</strong> ${this.escapeHtml(this.evaluation.scope.evaluationDate)}</p>
    </div>

    <h2>Conformiteitsresultaat</h2>
    <div class="conformance-result ${stats.untested > 0 || stats.cantTell > 0 ? 'conformance-incomplete' : stats.failed > 0 ? 'conformance-fail' : 'conformance-pass'}">
        <strong>${conformanceText}</strong>
    </div>

    <div class="stats">
        <div class="stat stat-passed"><span class="stat-number">${stats.passed}</span>Geslaagd</div>
        <div class="stat stat-failed"><span class="stat-number">${stats.failed}</span>Niet geslaagd</div>
        <div class="stat stat-cant-tell"><span class="stat-number">${stats.cantTell}</span>Kan niet bepalen</div>
        <div class="stat stat-not-applicable"><span class="stat-number">${stats.notApplicable}</span>N.v.t.</div>
        <div class="stat stat-untested"><span class="stat-number">${stats.untested}</span>Niet getest</div>
    </div>

    ${this.evaluation.report.execSummary ? `
    <h2>Samenvatting</h2>
    <p>${this.escapeHtml(this.evaluation.report.execSummary).replace(/\n/g, '<br>')}</p>
    ` : ''}

    <h2>Geëvalueerde pagina's (${pages.length})</h2>
    <ul>${pagesHtml || '<li>Geen pagina\'s toegevoegd</li>'}</ul>

    <h2>Resultaten per succescriterium</h2>
    <table>
        <thead>
            <tr>
                <th>Nr.</th>
                <th>Succescriterium</th>
                <th>Niveau</th>
                <th>Resultaat</th>
                <th>Observaties</th>
            </tr>
        </thead>
        <tbody>
            ${criteriaHtml}
        </tbody>
    </table>

    ${this.evaluation.report.evalSpecifics ? `
    <h2>Evaluatie specificaties</h2>
    <p>${this.escapeHtml(this.evaluation.report.evalSpecifics).replace(/\n/g, '<br>')}</p>
    ` : ''}

    <footer style="margin-top: 3rem; padding-top: 1rem; border-top: 1px solid #ddd; color: #666; font-size: 0.9rem;">
        <p>Dit rapport is gegenereerd met de WCAG-EM Rapport Tool op ${new Date().toLocaleDateString('nl-NL')}.</p>
        <p>Gebaseerd op de <a href="https://www.w3.org/WAI/eval/report-tool/">W3C WAI WCAG-EM Report Tool</a> en de WCAG-EM methodologie.</p>
    </footer>
</body>
</html>`;
    }

    // Utility
    escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize application
const app = new WCAGEMApp();
