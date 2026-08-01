-- ============================================
-- ENHANCED CHART OF ACCOUNTS
-- Complete Financial Accounting Structure
-- ============================================

-- DROP existing accounts table data if needed, then create comprehensive accounts

-- ACCOUNT TYPES (for proper financial statements)
-- Assets: 1000-1999
-- Liabilities: 2000-2999
-- Equity: 3000-3999
-- Revenue: 4000-4999
-- Cost of Goods Sold: 5000-5999
-- Expenses: 6000-7999
-- Other Income: 8000-8999
-- Other Expenses: 9000-9999

-- Assets (1000-1999)
-- 1100-1199: Current Assets
-- 1200-1299: Cash and Bank
-- 1300-1399: Receivables
-- 1400-1499: Inventory
-- 1500-1599: Prepayments
-- 1600-1799: Fixed Assets
-- 1800-1899: Accumulated Depreciation (contra)
-- 1900-1999: Other Assets

-- Liabilities (2000-2999)
-- 2100-2199: Current Liabilities
-- 2200-2299: Payables
-- 2300-2399: Accruals
-- 2400-2499: Short-term Borrowings
-- 2500-2599: Long-term Liabilities
-- 2600-2699: Long-term Borrowings

-- Equity (3000-3999)
-- 3100-3199: Owner/Shareholder Equity
-- 3200-3299: Retained Earnings
-- 3300-3399: Current Year Earnings
-- 3400-3499: Capital Reserves
-- 3500-3599: Revaluation Reserve

-- Revenue (4000-4999)
-- 4100-4199: Sales Revenue
-- 4200-4299: Service Revenue
-- 4300-4399: Other Operating Income

-- Cost of Goods Sold (5000-5999)
-- 5100-5199: Direct Materials
-- 5200-5299: Direct Labor
-- 5300-5399: Manufacturing Overhead

-- Expenses (6000-7999)
-- 6100-6199: Selling Expenses
-- 6200-6299: Administrative Expenses
-- 6300-6399: Financial Expenses
-- 6400-6499: Depreciation Expenses
-- 6500-6599: Rent Expenses
-- 6600-6699: Utility Expenses
-- 6700-6799: Salaries & Wages
-- 6800-6899: Marketing Expenses
-- 6900-6999: Repairs & Maintenance
-- 7000-7999: Other Operating Expenses

-- Other Income (8000-8999)
-- 8100-8199: Interest Income
-- 8200-8299: Dividend Income
-- 8300-8399: Rental Income
-- 8400-8499: Gain on Asset Disposal
-- 8500-8599: Foreign Exchange Gains

-- Other Expenses (9000-9999)
-- 9100-9199: Interest Expense
-- 9200-9299: Loss on Asset Disposal
-- 9300-9399: Foreign Exchange Losses
-- 9400-9499: Tax Expenses
-- 9500-9599: Impairment Losses
-- 9600-9699: Extraordinary Items
-- 9700-9799: Prior Year Adjustments

-- Sample Default Accounts for an Organization
-- This function creates comprehensive default chart of accounts

CREATE OR REPLACE FUNCTION create_comprehensive_chart_of_accounts(org_uuid UUID)
RETURNS VOID AS $$
BEGIN
    -- ========== ASSETS (1000-1999) ==========
    -- Cash & Bank (1100-1199)
    INSERT INTO accounts (org_id, code, name, type, parent_id) VALUES
    (org_uuid, '1100', 'Cash', 'asset', NULL),
    (org_uuid, '1110', 'Cash on Hand', 'asset', (SELECT id FROM accounts WHERE code='1100' AND org_id = org_uuid)),
    (org_uuid, '1120', 'Petty Cash', 'asset', (SELECT id FROM accounts WHERE code='1100' AND org_id = org_uuid)),
    (org_uuid, '1130', 'Main Checking Account', 'asset', (SELECT id FROM accounts WHERE code='1100' AND org_id = org_uuid)),
    (org_uuid, '1140', 'Savings Account', 'asset', (SELECT id FROM accounts WHERE code='1100' AND org_id = org_uuid)),
    (org_uuid, '1150', 'Money Market Account', 'asset', (SELECT id FROM accounts WHERE code='1100' AND org_id = org_uuid)),
    (org_uuid, '1190', 'Restricted Cash', 'asset', (SELECT id FROM accounts WHERE code='1100' AND org_id = org_uuid));

    -- Accounts Receivable (1200-1299)
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '1200', 'Accounts Receivable', 'asset'),
    (org_uuid, '1210', 'Trade Receivables', 'asset'),
    (org_uuid, '1220', 'Notes Receivable', 'asset'),
    (org_uuid, '1230', 'Other Receivables', 'asset'),
    (org_uuid, '1240', 'Allowance for Doubtful Debts', 'asset'),
    (org_uuid, '1290', 'Accrued Income', 'asset');

    -- Inventory (1300-1399)
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '1300', 'Inventory', 'asset'),
    (org_uuid, '1310', 'Raw Materials', 'asset'),
    (org_uuid, '1320', 'Work in Progress', 'asset'),
    (org_uuid, '1330', 'Finished Goods', 'asset'),
    (org_uuid, '1340', 'Goods for Resale', 'asset'),
    (org_uuid, '1350', 'Inventory Obsolescence Reserve', 'asset'),
    (org_uuid, '1390', 'Biological Assets', 'asset');

    -- Prepayments (1400-1499)
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '1400', 'Prepayments', 'asset'),
    (org_uuid, '1410', 'Prepaid Insurance', 'asset'),
    (org_uuid, '1420', 'Prepaid Rent', 'asset'),
    (org_uuid, '1430', 'Prepaid Expenses', 'asset'),
    (org_uuid, '1490', 'Advances to Employees', 'asset');

    -- Fixed Assets (1500-1699)
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '1500', 'Property, Plant & Equipment', 'asset'),
    (org_uuid, '1510', 'Land', 'asset'),
    (org_uuid, '1520', 'Buildings', 'asset'),
    (org_uuid, '1530', 'Building Improvements', 'asset'),
    (org_uuid, '1540', 'Office Equipment', 'asset'),
    (org_uuid, '1550', 'Computer Equipment', 'asset'),
    (org_uuid, '1560', 'Motor Vehicles', 'asset'),
    (org_uuid, '1570', 'Furniture & Fixtures', 'asset'),
    (org_uuid, '1580', 'Machinery & Equipment', 'asset'),
    (org_uuid, '1590', 'Leasehold Improvements', 'asset'),
    (org_uuid, '1599', 'Construction in Progress', 'asset');

    -- Accumulated Depreciation (1600-1699) - Contra Asset
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '1600', 'Accumulated Depreciation', 'asset'),
    (org_uuid, '1610', 'Accumulated Depreciation - Buildings', 'asset'),
    (org_uuid, '1620', 'Accumulated Depreciation - Equipment', 'asset'),
    (org_uuid, '1630', 'Accumulated Depreciation - Vehicles', 'asset'),
    (org_uuid, '1640', 'Accumulated Depreciation - Furniture', 'asset'),
    (org_uuid, '1650', 'Accumulated Depreciation - Machinery', 'asset');

    -- Intangible Assets (1700-1799)
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '1700', 'Intangible Assets', 'asset'),
    (org_uuid, '1710', 'Goodwill', 'asset'),
    (org_uuid, '1720', 'Patents', 'asset'),
    (org_uuid, '1730', 'Trademarks', 'asset'),
    (org_uuid, '1740', 'Copyrights', 'asset'),
    (org_uuid, '1750', 'Software', 'asset'),
    (org_uuid, '1760', 'Customer Lists', 'asset'),
    (org_uuid, '1790', 'Accumulated Amortization - Intangibles', 'asset');

    -- Other Assets (1800-1999)
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '1800', 'Other Non-Current Assets', 'asset'),
    (org_uuid, '1810', 'Long-term Investments', 'asset'),
    (org_uuid, '1820', 'Investment in Subsidiaries', 'asset'),
    (org_uuid, '1830', 'Investment in Associates', 'asset'),
    (org_uuid, '1840', 'Deferred Tax Assets', 'asset'),
    (org_uuid, '1850', 'Security Deposits', 'asset'),
    (org_uuid, '1860', 'Long-term Prepaid Expenses', 'asset');

    -- ========== LIABILITIES (2000-2999) ==========
    -- Accounts Payable (2100-2199)
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '2100', 'Accounts Payable', 'liability'),
    (org_uuid, '2110', 'Trade Payables', 'liability'),
    (org_uuid, '2120', 'Notes Payable', 'liability'),
    (org_uuid, '2130', 'Accrued Expenses', 'liability'),
    (org_uuid, '2140', 'Advances from Customers', 'liability'),
    (org_uuid, '2190', 'Other Payables', 'liability');

    -- Taxes Payable (2200-2299)
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '2200', 'Taxes Payable', 'liability'),
    (org_uuid, '2210', 'VAT Payable', 'liability'),
    (org_uuid, '2220', 'Income Tax Payable', 'liability'),
    (org_uuid, '2230', 'Payroll Taxes Payable', 'liability'),
    (org_uuid, '2240', 'Property Tax Payable', 'liability'),
    (org_uuid, '2250', 'Withholding Taxes Payable', 'liability'),
    (org_uuid, '2290', 'Other Taxes Payable', 'liability');

    -- Accruals (2300-2399)
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '2300', 'Accruals', 'liability'),
    (org_uuid, '2310', 'Accrued Salaries', 'liability'),
    (org_uuid, '2320', 'Accrued Bonus', 'liability'),
    (org_uuid, '2330', 'Accrued Vacation', 'liability'),
    (org_uuid, '2340', 'Accrued Interest', 'liability'),
    (org_uuid, '2350', 'Accrued Utilities', 'liability'),
    (org_uuid, '2390', 'Other Accruals', 'liability');

    -- Short-term Borrowings (2400-2499)
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '2400', 'Short-term Borrowings', 'liability'),
    (org_uuid, '2410', 'Bank Overdraft', 'liability'),
    (org_uuid, '2420', 'Current Portion of Long-term Debt', 'liability'),
    (org_uuid, '2430', 'Commercial Paper', 'liability'),
    (org_uuid, '2440', 'Lines of Credit', 'liability'),
    (org_uuid, '2490', 'Other Short-term Borrowings', 'liability');

    -- Long-term Liabilities (2500-2999)
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '2500', 'Long-term Liabilities', 'liability'),
    (org_uuid, '2510', 'Long-term Notes Payable', 'liability'),
    (org_uuid, '2520', 'Bonds Payable', 'liability'),
    (org_uuid, '2530', 'Debentures', 'liability'),
    (org_uuid, '2540', 'Mortgage Payable', 'liability'),
    (org_uuid, '2550', 'Capital Lease Obligations', 'liability'),
    (org_uuid, '2590', 'Other Long-term Liabilities', 'liability');

    -- Deferred Revenue (2600-2699)
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '2600', 'Deferred Revenue', 'liability'),
    (org_uuid, '2610', 'Deferred Rental Income', 'liability'),
    (org_uuid, '2620', 'Deferred Subscription Income', 'liability'),
    (org_uuid, '2690', 'Other Deferred Income', 'liability');

    -- ========== EQUITY (3000-3999) ==========
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '3000', 'Equity', 'equity'),
    (org_uuid, '3100', 'Owner/Share Capital', 'equity'),
    (org_uuid, '3110', 'Ordinary Share Capital', 'equity'),
    (org_uuid, '3120', 'Preference Share Capital', 'equity'),
    (org_uuid, '3200', 'Additional Paid-in Capital', 'equity'),
    (org_uuid, '3300', 'Retained Earnings', 'equity'),
    (org_uuid, '3310', 'Appropriated Retained Earnings', 'equity'),
    (org_uuid, '3320', 'Unappropriated Retained Earnings', 'equity'),
    (org_uuid, '3400', 'Treasury Stock', 'equity'),
    (org_uuid, '3500', 'Capital Reserves', 'equity'),
    (org_uuid, '3510', 'Share Premium', 'equity'),
    (org_uuid, '3520', 'Revaluation Surplus', 'equity'),
    (org_uuid, '3530', 'Statutory Reserve', 'equity'),
    (org_uuid, '3600', 'Current Year Net Income', 'equity'),
    (org_uuid, '3700', 'Prior Year Adjustments', 'equity'),
    (org_uuid, '3800', 'Foreign Currency Translation Reserve', 'equity'),
    (org_uuid, '3900', 'Owner Drawings', 'equity');

    -- ========== REVENUE (4000-4999) ==========
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '4000', 'Revenue', 'revenue'),
    (org_uuid, '4100', 'Sales Revenue', 'revenue'),
    (org_uuid, '4110', 'Product Sales', 'revenue'),
    (org_uuid, '4120', 'Merchandise Sales', 'revenue'),
    (org_uuid, '4130', 'Wholesale Sales', 'revenue'),
    (org_uuid, '4140', 'Retail Sales', 'revenue'),
    (org_uuid, '4200', 'Service Revenue', 'revenue'),
    (org_uuid, '4210', 'Consulting Fees', 'revenue'),
    (org_uuid, '4220', 'Service Fees', 'revenue'),
    (org_uuid, '4230', 'Commission Income', 'revenue'),
    (org_uuid, '4240', 'Professional Fees', 'revenue'),
    (org_uuid, '4300', 'Other Operating Income', 'revenue'),
    (org_uuid, '4310', 'Freight Charges', 'revenue'),
    (org_uuid, '4320', 'Handling Fees', 'revenue'),
    (org_uuid, '4330', 'Late Payment Fees', 'revenue'),
    (org_uuid, '4340', 'Scrap Sales', 'revenue'),
    (org_uuid, '4400', 'Rental Income', 'revenue'),
    (org_uuid, '4500', 'Gain on Disposal of Assets', 'revenue'),
    (org_uuid, '4600', 'Discounts Received', 'revenue'),
    (org_uuid, '4700', 'Interest Income', 'revenue'),
    (org_uuid, '4800', 'Dividend Income', 'revenue'),
    (org_uuid, '4900', 'Other Income', 'revenue');

    -- ========== COST OF GOODS SOLD (5000-5999) ==========
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '5000', 'Cost of Goods Sold', 'expense'),
    (org_uuid, '5100', 'Direct Materials', 'expense'),
    (org_uuid, '5110', 'Raw Material Purchases', 'expense'),
    (org_uuid, '5120', 'Direct Materials Used', 'expense'),
    (org_uuid, '5130', 'Freight Inwards', 'expense'),
    (org_uuid, '5140', 'Customs & Duties', 'expense'),
    (org_uuid, '5200', 'Direct Labor', 'expense'),
    (org_uuid, '5210', 'Direct Wages', 'expense'),
    (org_uuid, '5220', 'Direct Salaries', 'expense'),
    (org_uuid, '5230', 'Employee Benefits - Direct', 'expense'),
    (org_uuid, '5300', 'Manufacturing Overhead', 'expense'),
    (org_uuid, '5310', 'Factory Rent', 'expense'),
    (org_uuid, '5320', 'Factory Utilities', 'expense'),
    (org_uuid, '5330', 'Factory Insurance', 'expense'),
    (org_uuid, '5340', 'Factory Supplies', 'expense'),
    (org_uuid, '5350', 'Depreciation - Factory', 'expense'),
    (org_uuid, '5360', 'Factory Maintenance', 'expense'),
    (org_uuid, '5400', 'Finished Goods Purchases', 'expense'),
    (org_uuid, '5500', 'Inventory Adjustments', 'expense'),
    (org_uuid, '5600', 'Shipping & Delivery', 'expense'),
    (org_uuid, '5700', 'Commission Expense', 'expense'),
    (org_uuid, '5800', 'Direct Marketing', 'expense');

    -- ========== OPERATING EXPENSES (6000-6999) ==========
    -- Selling Expenses
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '6000', 'Operating Expenses', 'expense'),
    (org_uuid, '6100', 'Selling Expenses', 'expense'),
    (org_uuid, '6110', 'Advertising', 'expense'),
    (org_uuid, '6120', 'Marketing', 'expense'),
    (org_uuid, '6130', 'Sales Commissions', 'expense'),
    (org_uuid, '6140', 'Sales Salaries', 'expense'),
    (org_uuid, '6150', 'Travel & Entertainment - Sales', 'expense'),
    (org_uuid, '6160', 'Promotional Expenses', 'expense'),
    (org_uuid, '6170', 'Samples & Giveaways', 'expense'),
    (org_uuid, '6180', 'Trade Show Expenses', 'expense'),
    (org_uuid, '6190', 'Other Selling Expenses', 'expense');

    -- Administrative Expenses
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '6200', 'Administrative Expenses', 'expense'),
    (org_uuid, '6210', 'Salaries & Wages - Admin', 'expense'),
    (org_uuid, '6220', 'Employee Benefits - Admin', 'expense'),
    (org_uuid, '6230', 'Directors Fees', 'expense'),
    (org_uuid, '6240', 'Office Rent', 'expense'),
    (org_uuid, '6250', 'Office Utilities', 'expense'),
    (org_uuid, '6260', 'Office Supplies', 'expense'),
    (org_uuid, '6270', 'Postage & Courier', 'expense'),
    (org_uuid, '6280', 'Telephone & Internet', 'expense'),
    (org_uuid, '6290', 'Printing & Stationery', 'expense'),
    (org_uuid, '6300', 'Bank Charges', 'expense'),
    (org_uuid, '6310', 'Insurance', 'expense'),
    (org_uuid, '6320', 'Legal Fees', 'expense'),
    (org_uuid, '6330', 'Professional Fees', 'expense'),
    (org_uuid, '6340', 'Accounting Fees', 'expense'),
    (org_uuid, '6350', 'Consulting Fees', 'expense'),
    (org_uuid, '6360', 'Auditing Fees', 'expense');

    -- Rent & Utilities
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '6400', 'Rent & Utilities', 'expense'),
    (org_uuid, '6410', 'Office Rent', 'expense'),
    (org_uuid, '6420', 'Warehouse Rent', 'expense'),
    (org_uuid, '6430', 'Electricity', 'expense'),
    (org_uuid, '6440', 'Water', 'expense'),
    (org_uuid, '6450', 'Gas', 'expense'),
    (org_uuid, '6460', 'Internet', 'expense');

    -- Salaries & Employee Costs
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '6500', 'Salaries & Employee Costs', 'expense'),
    (org_uuid, '6510', 'Gross Salaries', 'expense'),
    (org_uuid, '6520', 'Overtime Pay', 'expense'),
    (org_uuid, '6530', 'Bonuses', 'expense'),
    (org_uuid, '6540', 'Allowances', 'expense'),
    (org_uuid, '6550', 'Health Insurance', 'expense'),
    (org_uuid, '6560', 'Pension Contributions', 'expense'),
    (org_uuid, '6570', 'Social Security Contributions', 'expense'),
    (org_uuid, '6580', 'Training & Development', 'expense'),
    (org_uuid, '6590', 'Recruitment Expenses', 'expense');

    -- Depreciation & Amortization
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '6600', 'Depreciation & Amortization', 'expense'),
    (org_uuid, '6610', 'Depreciation - Buildings', 'expense'),
    (org_uuid, '6620', 'Depreciation - Equipment', 'expense'),
    (org_uuid, '6630', 'Depreciation - Vehicles', 'expense'),
    (org_uuid, '6640', 'Depreciation - Furniture', 'expense'),
    (org_uuid, '6650', 'Amortization - Intangibles', 'expense'),
    (org_uuid, '6660', 'Impairment Losses', 'expense');

    -- Repairs & Maintenance
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '6700', 'Repairs & Maintenance', 'expense'),
    (org_uuid, '6710', 'Building Repairs', 'expense'),
    (org_uuid, '6720', 'Equipment Repairs', 'expense'),
    (org_uuid, '6730', 'Vehicle Maintenance', 'expense'),
    (org_uuid, '6740', 'IT Maintenance', 'expense'),
    (org_uuid, '6750', 'Landscaping', 'expense'),
    (org_uuid, '6790', 'Other Maintenance', 'expense');

    -- ========== OTHER EXPENSES (7000-7999) ==========
    -- Financial Expenses
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '7000', 'Financial Expenses', 'expense'),
    (org_uuid, '7100', 'Interest Expense', 'expense'),
    (org_uuid, '7110', 'Interest on Loans', 'expense'),
    (org_uuid, '7120', 'Interest on Overdraft', 'expense'),
    (org_uuid, '7130', 'Interest on Bonds', 'expense'),
    (org_uuid, '7140', 'Loan Arrangement Fees', 'expense'),
    (org_uuid, '7150', 'Foreign Exchange Losses', 'expense'),
    (org_uuid, '7200', 'Loss on Disposal of Assets', 'expense'),
    (org_uuid, '7300', 'Tax Expenses', 'expense'),
    (org_uuid, '7310', 'Income Tax Expense', 'expense'),
    (org_uuid, '7320', 'Deferred Tax Expense', 'expense'),
    (org_uuid, '7330', 'Minimum Tax', 'expense'),
    (org_uuid, '7400', 'Penalties & Fines', 'expense'),
    (org_uuid, '7500', 'Donations', 'expense'),
    (org_uuid, '7600', 'Charitable Contributions', 'expense'),
    (org_uuid, '7700', 'Research & Development', 'expense'),
    (org_uuid, '7800', 'Subscriptions & Memberships', 'expense'),
    (org_uuid, '7900', 'Miscellaneous Expenses', 'expense');

    -- ========== OTHER INCOME (8000-8999) ==========
    INSERT INTO accounts (org_id, code, name, type) VALUES
    (org_uuid, '8000', 'Other Income', 'revenue'),
    (org_uuid, '8100', 'Interest Income', 'revenue'),
    (org_uuid, '8110', 'Bank Interest', 'revenue'),
    (org_uuid, '8120', 'Loan Interest Received', 'revenue'),
    (org_uuid, '8200', 'Dividend Income', 'revenue'),
    (org_uuid, '8300', 'Rental Income', 'revenue'),
    (org_uuid, '8400', 'Gain on Foreign Exchange', 'revenue'),
    (org_uuid, '8500', 'Bad Debt Recovered', 'revenue'),
    (org_uuid, '8600', 'Insurance Claims', 'revenue'),
    (org_uuid, '8700', 'Prior Year Income', 'revenue'),
    (org_uuid, '8800', 'Reversal of Provisions', 'revenue'),
    (org_uuid, '8900', 'Sundry Income', 'revenue');

END;
$$ LANGUAGE plpgsql;

-- View for Income Statement
CREATE OR REPLACE VIEW income_statement AS
SELECT 
    'Revenue' as category,
    code,
    name,
    type,
    SUM(credit - debit) as balance
FROM journal_lines jl
JOIN accounts a ON jl.account_id = a.id
WHERE a.type = 'revenue'
GROUP BY code, name, type

UNION ALL

SELECT 
    'Cost of Goods Sold' as category,
    code,
    name,
    type,
    SUM(debit - credit) as balance
FROM journal_lines jl
JOIN accounts a ON jl.account_id = a.id
WHERE a.type = 'expense' AND code LIKE '5%'
GROUP BY code, name, type

UNION ALL

SELECT 
    'Operating Expenses' as category,
    code,
    name,
    type,
    SUM(debit - credit) as balance
FROM journal_lines jl
JOIN accounts a ON jl.account_id = a.id
WHERE a.type = 'expense' AND code LIKE '6%'
GROUP BY code, name, type

UNION ALL

SELECT 
    'Other Income' as category,
    code,
    name,
    type,
    SUM(credit - debit) as balance
FROM journal_lines jl
JOIN accounts a ON jl.account_id = a.id
WHERE a.type = 'revenue' AND code LIKE '8%'
GROUP BY code, name, type

UNION ALL

SELECT 
    'Other Expenses' as category,
    code,
    name,
    type,
    SUM(debit - credit) as balance
FROM journal_lines jl
JOIN accounts a ON jl.account_id = a.id
WHERE a.type = 'expense' AND code LIKE '7%'
GROUP BY code, name, type;

-- View for Balance Sheet
CREATE OR REPLACE VIEW balance_sheet AS
SELECT 
    'Assets' as section,
    'Current Assets' as subsection,
    code,
    name,
    type,
    SUM(debit - credit) as balance
FROM journal_lines jl
JOIN accounts a ON jl.account_id = a.id
WHERE a.type = 'asset' AND code BETWEEN '1100' AND '1499'
GROUP BY code, name, type

UNION ALL

SELECT 
    'Assets' as section,
    'Non-Current Assets' as subsection,
    code,
    name,
    type,
    SUM(debit - credit) as balance
FROM journal_lines jl
JOIN accounts a ON jl.account_id = a.id
WHERE a.type = 'asset' AND code >= '1500'
GROUP BY code, name, type

UNION ALL

SELECT 
    'Liabilities' as section,
    'Current Liabilities' as subsection,
    code,
    name,
    type,
    SUM(credit - debit) as balance
FROM journal_lines jl
JOIN accounts a ON jl.account_id = a.id
WHERE a.type = 'liability' AND code BETWEEN '2000' AND '2499'
GROUP BY code, name, type

UNION ALL

SELECT 
    'Liabilities' as section,
    'Long-term Liabilities' as subsection,
    code,
    name,
    type,
    SUM(credit - debit) as balance
FROM journal_lines jl
JOIN accounts a ON jl.account_id = a.id
WHERE a.type = 'liability' AND code >= '2500'
GROUP BY code, name, type

UNION ALL

SELECT 
    'Equity' as section,
    'Capital & Reserves' as subsection,
    code,
    name,
    type,
    SUM(credit - debit) as balance
FROM journal_lines jl
JOIN accounts a ON jl.account_id = a.id
WHERE a.type = 'equity'
GROUP BY code, name, type;
