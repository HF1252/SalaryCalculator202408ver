function calculate() {
    // ユーザーの入力を取得
    const monthlyIncome = parseFloat(document.getElementById('monthly-income').value); // 月収金額を取得し、浮動小数点数に変換
    const prefecture = document.getElementById('prefecture').value; // 都道府県を取得（現在は使用していませんが、将来の拡張に備えて保持）

    // 税率と保険料率（令和6年度の仮定値）
    const incomeTaxRate = 0.05; // 所得税の税率 (5%)
    const residentTaxRate = 0.1; // 住民税の税率 (10%)
    const healthInsuranceRate = 0.03; // 健康保険の保険料率 (3%)
    const pensionRate = 0.06; // 厚生年金の保険料率 (6%)
    const employmentInsuranceRate = 0.01; // 雇用保険の保険料率 (1%)

    // 年収の計算
    const annualIncome = monthlyIncome * 12; // 年収を計算（月収 × 12）
    const annualGrossIncome = annualIncome.toFixed(2); // 年収を小数点以下2桁でフォーマット
    const annualIncomeTax = (annualIncome * incomeTaxRate).toFixed(2); // 年収に対する所得税額を計算
    const annualResidentTax = (annualIncome * residentTaxRate).toFixed(2); // 年収に対する住民税額を計算
    const annualHealthInsurance = (annualIncome * healthInsuranceRate).toFixed(2); // 年収に対する健康保険料を計算
    const annualPension = (annualIncome * pensionRate).toFixed(2); // 年収に対する厚生年金保険料を計算
    const annualEmploymentInsurance = (annualIncome * employmentInsuranceRate).toFixed(2); // 年収に対する雇用保険料を計算
    const annualNetIncome = (annualIncome - (annualIncome * (incomeTaxRate + residentTaxRate + healthInsuranceRate + pensionRate + employmentInsuranceRate))).toFixed(2); // 年収から各種控除を引いた手取り額を計算

    // 月収の計算
    const monthlyGrossIncome = monthlyIncome.toFixed(2); // 月収を小数点以下2桁でフォーマット
    const monthlyIncomeTax = (monthlyIncome * incomeTaxRate).toFixed(2); // 月収に対する所得税額を計算
    const monthlyResidentTax = (monthlyIncome * residentTaxRate).toFixed(2); // 月収に対する住民税額を計算
    const monthlyHealthInsurance = (monthlyIncome * healthInsuranceRate).toFixed(2); // 月収に対する健康保険料を計算
    const monthlyPension = (monthlyIncome * pensionRate).toFixed(2); // 月収に対する厚生年金保険料を計算
    const monthlyEmploymentInsurance = (monthlyIncome * employmentInsuranceRate).toFixed(2); // 月収に対する雇用保険料を計算
    const monthlyNetIncome = (monthlyIncome - (monthlyIncome * (incomeTaxRate + residentTaxRate + healthInsuranceRate + pensionRate + employmentInsuranceRate))).toFixed(2); // 月収から各種控除を引いた手取り額を計算

    // 結果を表示
    document.getElementById('annual-gross-income').textContent = `${annualGrossIncome}円`; // 年収額面収入を表示
    document.getElementById('annual-income-tax').textContent = `${annualIncomeTax}円`; // 年収に対する所得税額を表示
    document.getElementById('annual-resident-tax').textContent = `${annualResidentTax}円`; // 年収に対する住民税額を表示
    document.getElementById('annual-health-insurance').textContent = `${annualHealthInsurance}円`; // 年収に対する健康保険料を表示
    document.getElementById('annual-pension').textContent = `${annualPension}円`; // 年収に対する厚生年金保険料を表示
    document.getElementById('annual-employment-insurance').textContent = `${annualEmploymentInsurance}円`; // 年収に対する雇用保険料を表示
    document.getElementById('annual-net-income').textContent = `${annualNetIncome}円`; // 年収から各種控除を引いた手取り額を表示

    document.getElementById('monthly-gross-income').textContent = `${monthlyGrossIncome}円`; // 月収額面収入を表示
    document.getElementById('monthly-income-tax').textContent = `${monthlyIncomeTax}円`; // 月収に対する所得税額を表示
    document.getElementById('monthly-resident-tax').textContent = `${monthlyResidentTax}円`; // 月収に対する住民税額を表示
    document.getElementById('monthly-health-insurance').textContent = `${monthlyHealthInsurance}円`; // 月収に対する健康保険料を表示
    document.getElementById('monthly-pension').textContent = `${monthlyPension}円`; // 月収に対する厚生年金保険料を表示
    document.getElementById('monthly-employment-insurance').textContent = `${monthlyEmploymentInsurance}円`; // 月収に対する雇用保険料を表示
    document.getElementById('monthly-net-income').textContent = `${monthlyNetIncome}円`; // 月収から各種控除を引いた手取り額を表示
}
