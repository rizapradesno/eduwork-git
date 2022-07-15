describe('Automate Test Loker.id', function() {
    before(()=>{
        cy.visit('https://www.loker.id/')
        cy.url().should('include','loker.id/')
        cy.get('h2').should('be.visible').and('contain.text', 'Cari Lowongan Kerja')
    })

    it('should display Registrasi ', ()=>{
        cy.get('button[type="button"]').click()
        cy.contains('Registrasi').click()
        cy.url().should('include','/registrasi')
        cy.get('h2').should('be.visible').and('contain.text', 'Temukan Pekerjaan Impianmu')
    })

    it('should display Registrasi Pencari Kerja ', ()=>{
        cy.contains('Registrasi Pencari Kerja').click()
        cy.url().should('include','/registrasi/pencari-kerja')
        cy.get('h3').should('be.visible').and('contain.text', 'Daftar sebagai Pencari Kerja')        
    })

    it('should fill data registrasi pencari kerja', ()=>{
        cy.get('#acf-field_57b0d12eac615').type('testing4@eduwork.com')
        cy.get('#acf-field_57b0d12eac669').type('testing4@eduwork.com')
        cy.get('#acf-field_57b0d12eac6bd').type('testing4@eduwork.com')
        cy.get('#show_password').click()
        cy.get('input[type="submit"]').click()
        

        //ini script hanya berlaku untuk sekali run dengan data valid
        //ini script assertion untuk registrasi berhasil.
        //cara menggunakan scrip dibawah ini ubah angka yang berada di belakang "testing?@eduwork.com" ubah di atas angka 5. dst.
        
        //cy.url().should('include','/registrasi-sukses') 
        //cy.get('h3').should('be.visible').and('contain.text', 'Silahkan periksa email Anda')

        //ini script assertion untuk registrasi invalid.
        //ini berlaku jika data user pendaftar sudah berhasil terdaftar.
        
        cy.url().should('include','/registrasi/pencari-kerja') 
        cy.get('p').should('be.visible').and('contain.text', 'Validasi Gagal. 1 Bidang memerlukan perhatian')
    })

    it('should display Login ', ()=>{
        cy.get('button[type="button"]').click()
        cy.contains('Login').click()
        cy.url().should('include','/login')
        cy.get('h4').should('be.visible').and('contain.text', 'Masuk Ke Loker.ID')
    })    


    it('should fill data login', ()=>{
        cy.get('#acf-field_574b31195165b').type('testing1@eduwork.com')
        cy.get('#acf-field_574b311951bc8').type('testing1@eduwork.com')
        cy.get('#show_password').click()
        cy.get('input[type="submit"]').click()

        cy.url().should('include','/dashboard')
        cy.get('h1').should('be.visible').and('contain.text', 'Dashboard')
    })

    it('should display Cari Lowongan Kerja', ()=>{
        cy.get('button[type="button"]').click()
        cy.contains('Cari Lowongan Kerja').click()
        cy.url().should('include','/cari-lowongan-kerja')
        cy.get('h1').should('be.visible').and('contain.text', 'Cari Lowongan Kerja')
    })

    it('should fill query : Sales Personal Loan (KTA)', ()=>{
        cy.get('input[name="q"]').clear()
        cy.get('input[name="q"]').type('Sales Personal Loan (KTA)')
        cy.get('button[type="submit"]').click()
    })

    it('should display Cari Lowongan Kerja: Sales Personal Loan (KTA)', ()=>{
        cy.contains('Sales Personal Loan (KTA)').click()
        cy.url().should('include','/customer-care/account-officer/sales-personal-loan-kta-pt-indium-dinamika-solusindo-jakarta-selatan.html')
        cy.get('h1').should('be.visible').and('contain.text', 'Lowongan Kerja Sales Personal Loan (KTA)')
        cy.contains('Lamar Pekerjaan').click()
    })
})