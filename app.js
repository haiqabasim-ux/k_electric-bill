
    
        function generateBill() {
            // Input validation
            let name = document.getElementById('customerName').value;
            let units = parseFloat(document.getElementById('units').value);
            let rate = parseFloat(document.getElementById('chargesPerUnit').value);
            let surcharge = parseFloat(document.getElementById('lateSurcharge').value);
            
            if (!name || units <= 0 || rate <= 0) {
                alert("Please fill all fields correctly!");
                return;
            }
            
            // Current month get karo
            let currentMonth = new Date().toLocaleDateString('en-PK', {
                year: 'numeric', month: 'long'
            });
            
            // Calculations (2 decimal places)
            let netAmount = (units * rate).toFixed(2);
            let grossAmount = (parseFloat(netAmount) + surcharge).toFixed(2);
            
            // Data URL mein bhejo
            let url = `k_bill_result.html?name=${encodeURIComponent(name)}&month=${encodeURIComponent(currentMonth)}&units=${units}&rate=${rate}&net=${netAmount}&gross=${grossAmount}&surcharge=${surcharge}`;
            window.open(url, '_blank');
        }
   