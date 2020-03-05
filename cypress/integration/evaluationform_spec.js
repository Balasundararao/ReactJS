
describe('Whistler Perf Web - Evaluation page.', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3000/whistler-web/evaluation');
    })

    it('H1 + P tag and text validations...', function() {
        cy.get('h1').should('have.length', 1)
        cy.get('h1').should('contain', 'Evaluation');
        cy.get('h1 + p').should('contain', 'Please Click on the link ( link ) to add a new evaluation..')
    })

    it('Click on link to open the Evaluation Form', function() {
        cy.get("#show_form").click();
        cy.get(".csv-input").should('have.length', 1);
        cy.get("#evFld1").should('have.length', 1);
        cy.get("#evFld2").should('have.length', 1);
        cy.get("#evFld3").should('have.length', 1);
        cy.get("button").should('have.length', 1);
    })

    // case1 : Minimum  2columns required, Invalid Data, 1 column
    it('Case1: Minimum  2columns required, Invalid Data, 1 column: invalid_1column.csv', function() {
        cy.get("#show_form").click();
        cy.get(".csv-input").should('have.length', 1);

        const fileName = 'EvaluationData/invalid_1column.csv';
        cy.fixture(fileName).then(fileContent => {
            cy.get('.csv-input').upload({ fileContent, fileName, mimeType: 'text/csv' });
        });  
        cy.get('.error').should('contain', 'Timestamp keys are missing or Wrong format')
        cy.get('#evFld1').select('Select timestamp key').should('have.value', '')
        cy.get('#evFld2').select('Select data key').should('have.value', '')
        cy.get('#evFld3').select('Select frequency').should('have.value', '') // 'Daily', 'Weekly', 'Monthly', 'Hourly'
        cy.get('button').should('be.disabled')
    })

    // case2 :  Invalid Data, 2 column with same data key set..: invalid_2col_samedata.csv
    it('Case2: Invalid Data, 2 column with same data key set..: invalid_2col_samedata.csv', function() {
        cy.get("#show_form").click();
        cy.get(".csv-input").should('have.length', 1);

        const fileName = 'EvaluationData/invalid_2col_samedata.csv';
        cy.fixture(fileName).then(fileContent => {
            cy.get('.csv-input').upload({ fileContent, fileName, mimeType: 'text/csv' });
        });  
        cy.get('.error').should('contain', 'Timestamp keys are missing or Wrong format')
        cy.get('#evFld1').select('Select timestamp key').should('have.value', '')
        cy.get('#evFld2').select('Select data key').should('have.value', '')
        cy.get('#evFld3').select('Select frequency').should('have.value', '') // 'Daily', 'Weekly', 'Monthly', 'Hourly'
        cy.get('button').should('be.disabled')
    })

    // case3 : Invalid Data, 2 column with same data key set..: invalid_2col_samedate.csv
    it('Case3: Invalid Data, 2 column with same data key set..: invalid_2col_samedate.csv', function() {
        cy.get("#show_form").click();
        cy.get(".csv-input").should('have.length', 1);

        const fileName = 'EvaluationData/invalid_2col_samedate.csv';
        cy.fixture(fileName).then(fileContent => {
            cy.get('.csv-input').upload({ fileContent, fileName, mimeType: 'text/csv' });
        });  
        cy.get('.error').should('contain', 'Data keys are missing or Non-numeric')
        cy.get('#evFld1').select('Select timestamp key').should('have.value', '')
        cy.get('#evFld2').select('Select data key').should('have.value', '')
        cy.get('#evFld3').select('Select frequency').should('have.value', '') // 'Daily', 'Weekly', 'Monthly', 'Hourly'
        cy.get('button').should('be.disabled')
    })

    // case4 : Maximum number of observations reached, more than 100 records..: maximum_data_more_100.csv
    it('Case4: Maximum number of observations reached, more than 100 records..: maximum_data_more_100.csv', function() {
        cy.get("#show_form").click();
        cy.get(".csv-input").should('have.length', 1);

        const fileName = 'EvaluationData/maximum_data_more_100.csv';
        cy.fixture(fileName).then(fileContent => {
            cy.get('.csv-input').upload({ fileContent, fileName, mimeType: 'text/csv' });
        });  
        cy.get('.error').should('contain', 'Maximum number of observations reached')
        cy.get('#evFld1').select('Select timestamp key').should('have.value', '')
        cy.get('#evFld2').select('Select data key').should('have.value', '')
        cy.get('#evFld3').select('Select frequency').should('have.value', '') // 'Daily', 'Weekly', 'Monthly', 'Hourly'
        cy.get('button').should('be.disabled')
    })

    // case5 : Minimum number of observations required, : minimum_data_less_6.csv
    it('Case5: Minimum number of observations required,.: minimum_data_less_6.csv', function() {
        cy.get("#show_form").click();
        cy.get(".csv-input").should('have.length', 1);

        const fileName = 'EvaluationData/minimum_data_less_6.csv';
        cy.fixture(fileName).then(fileContent => {
            cy.get('.csv-input').upload({ fileContent, fileName, mimeType: 'text/csv' });
        });  
        cy.get('.error').should('contain', 'Minimum number of observations are missing')
        cy.get('#evFld1').select('Select timestamp key').should('have.value', '')
        cy.get('#evFld2').select('Select data key').should('have.value', '')
        cy.get('#evFld3').select('Select frequency').should('have.value', '') // 'Daily', 'Weekly', 'Monthly', 'Hourly'
        cy.get('button').should('be.disabled')
    })

    // case6 : Weekly Data Manipulations...Minimum required is 8 observations,
    it('Case6: Weekly Data Evaluation.....valid_data_week_19.csv', function() {
        cy.get("#show_form").click();
        cy.get(".csv-input").should('have.length', 1);

        const fileName = 'EvaluationData/valid_data_week_19.csv';
        cy.fixture(fileName).then(fileContent => {
            cy.get('.csv-input').upload({ fileContent, fileName, mimeType: 'text/csv' });
        });  
        cy.get('#evFld1').select('WEEK_TIMESTAMP').should('have.value', 'WEEK_TIMESTAMP')
        cy.get('#evFld2').select('WEEK_DATA').should('have.value', 'WEEK_DATA')
        cy.get('#evFld3').select('Weekly').should('have.value', 'W') // 'Daily', 'Weekly', 'Monthly', 'Hourly'
        cy.get('button').should('not.be.disabled')
        cy.get('.error').should('contain', '')
        //cy.get('.success').should('contain', 'Evaluating your data now...')
    })

    // case7 : Daily Data Manipulations...Minimum required is 14 observations..,
    it('Case7: Daily Data Evalutaion.....valid_data_day_18.csv', function() {
        cy.get("#show_form").click();
        cy.get(".csv-input").should('have.length', 1);

        const fileName = 'EvaluationData/valid_data_day_18.csv';
        cy.fixture(fileName).then(fileContent => {
            cy.get('.csv-input').upload({ fileContent, fileName, mimeType: 'text/csv' });
        });  
        cy.get('#evFld1').select('DAY_TIMESTAMP').should('have.value', 'DAY_TIMESTAMP')
        cy.get('#evFld2').select('DAY_DATA').should('have.value', 'DAY_DATA')
        cy.get('#evFld3').select('Daily').should('have.value', 'D') // 'Daily', 'Weekly', 'Monthly', 'Hourly'
        cy.get('button').should('not.be.disabled')
        cy.get('.error').should('contain', '')
        //cy.get('.success').should('contain', 'Evaluating your data now...')
    })

    // case8 : Monthly Data Manipulations..., Minimum required is 24 observations.., 
    it('Case8: Monthly Data Evalutaion.....valid_data_month_hour_100.csv', function() {
        cy.get("#show_form").click();
        cy.get(".csv-input").should('have.length', 1);

        const fileName = 'EvaluationData/valid_data_month_hour_100.csv';
        cy.fixture(fileName).then(fileContent => {
            cy.get('.csv-input').upload({ fileContent, fileName, mimeType: 'text/csv' });
        });  
        cy.get('#evFld1').select('TIMESTAMP').should('have.value', 'TIMESTAMP')
        cy.get('#evFld2').select('DATA').should('have.value', 'DATA')
        cy.get('#evFld3').select('Monthly').should('have.value', 'M') // 'Daily', 'Weekly', 'Monthly', 'Hourly'
        cy.get('button').should('not.be.disabled')
        cy.get('.error').should('contain', '')
        //cy.get('.success').should('contain', 'Evaluating your data now...')
    })

    // case9 : Hourly Data Manipulations..., Minimum required is 24 observations.., 
    it('Case9: Hourly Data Evalutaion.....valid_data_month_hour_100.csv', function() {
        cy.get("#show_form").click();
        cy.get(".csv-input").should('have.length', 1);

        const fileName = 'EvaluationData/valid_data_month_hour_100.csv';
        cy.fixture(fileName).then(fileContent => {
            cy.get('.csv-input').upload({ fileContent, fileName, mimeType: 'text/csv' });
        });  
        cy.get('#evFld1').select('TIMESTAMP').should('have.value', 'TIMESTAMP')
        cy.get('#evFld2').select('DATA').should('have.value', 'DATA')
        cy.get('#evFld3').select('Hourly').should('have.value', 'H') // 'Daily', 'Weekly', 'Monthly', 'Hourly'
        cy.get('button').should('not.be.disabled')
        cy.get('.error').should('contain', '')
        //cy.get('.success').should('contain', 'Evaluating your data now...')
    })

    // case10 :  validating day data with Hourly frequency (h)
    it('Case10: validating day data with Hourly frequency, hour minimum requirement is 48, .....valid_data_day_18.csv', function() {
        cy.get("#show_form").click();
        cy.get(".csv-input").should('have.length', 1);
        const fileName = 'EvaluationData/valid_data_day_18.csv';
        cy.fixture(fileName).then(fileContent => {
            cy.get('.csv-input').upload({ fileContent, fileName, mimeType: 'text/csv' });
        });  
        cy.get('#evFld1').select('DAY_TIMESTAMP').should('have.value', 'DAY_TIMESTAMP')
        cy.get('#evFld2').select('DAY_DATA').should('have.value', 'DAY_DATA')
        cy.get('#evFld3').select('Hourly').should('have.value', 'H') 
        cy.get('.error').should('contain', 'Minimum observations are missing for frequency H')
        cy.get('button').should('be.disabled')
        cy.get('#evFld3').select('Monthly').should('have.value', 'M') 
        cy.get('.error').should('contain', 'Minimum observations are missing for frequency M')
        cy.get('button').should('be.disabled')
        cy.get('#evFld3').select('Daily').should('have.value', 'D') 
        cy.get('.error').should('contain', '')
        cy.get('button').should('not.be.disabled')
    })

    // case11 : Empty rows with Commas
    it('Case11: Empty Rows with Comma seperated....,valid_data_few_empty', function() {
        cy.get("#show_form").click();
        cy.get(".csv-input").should('have.length', 1);
        const fileName = 'EvaluationData/valid_data_few_empty.csv';
        cy.fixture(fileName).then(fileContent => {
            cy.get('.csv-input').upload({ fileContent, fileName, mimeType: 'text/csv' });
        });  
        cy.get('#evFld1').select('TIMESTAMP').should('have.value', 'TIMESTAMP')
        cy.get('.error').should('contain', 'Timestamp keys are missing or wrong format')
        cy.get('#evFld2').select('DATA').should('have.value', 'DATA')
        cy.get('.error').should('contain', 'Data Keys are missing or Non-numeric')
        cy.get('#evFld3').select('Monthly').should('have.value', 'M') 
        cy.get('button').should('be.disabled')
    })

    // case12 : 3 columns of Invalid/valid datakey, data_3cols_data.csv
    it('Case12: 3 columns of valid/invalid data, data_3cols_data.csv', function() {
        cy.get("#show_form").click();
        cy.get(".csv-input").should('have.length', 1);
        const fileName = 'EvaluationData/data_3cols_data.csv';
        cy.fixture(fileName).then(fileContent => {
            cy.get('.csv-input').upload({ fileContent, fileName, mimeType: 'text/csv' });
        });  
        cy.get('#evFld1').select('3COL_TIMESTAMP').should('have.value', '3COL_TIMESTAMP')
        cy.get('#evFld2').select('3COL_DATA1').should('have.value', '3COL_DATA1')
        cy.get('.error').should('contain', 'Data Keys are missing or Non-numeric')
        cy.get('#evFld2').select('3COL_DATA2').should('have.value', '3COL_DATA2')
        cy.get('#evFld3').select('Daily').should('have.value', 'D') 
        cy.get('button').should('not.be.disabled')
    })

    // case13 : 3 columns of Invalid/valid timestamp, data_3cols_date.csv
    it('Case13: 3 columns of valid/invalid data, data_3cols_date.csv', function() {
        cy.get("#show_form").click();
        cy.get(".csv-input").should('have.length', 1);
        const fileName = 'EvaluationData/data_3cols_date.csv';
        cy.fixture(fileName).then(fileContent => {
            cy.get('.csv-input').upload({ fileContent, fileName, mimeType: 'text/csv' });
        });  
        cy.get('#evFld1').select('3COL_TIMESTAMP').should('have.value', '3COL_TIMESTAMP')
        cy.get('.error').should('contain', 'Timestamp keys are missing or wrong format')
        cy.get('#evFld1').select('3COL_TIMESTAMP2').should('have.value', '3COL_TIMESTAMP2')
        cy.get('#evFld2').select('3COL_DATA').should('have.value', '3COL_DATA')
        cy.get('#evFld3').select('Daily').should('have.value', 'D') 
        cy.get('button').should('not.be.disabled')
    })
});