    
        // URL se data nikaalo
        const urlParams = new URLSearchParams(window.location.search);
        
        document.getElementById('customerName').textContent = decodeURIComponent(urlParams.get('name') || 'N/A');
        document.getElementById('currentMonth').textContent = decodeURIComponent(urlParams.get('month') || 'N/A');
        document.getElementById('units').textContent = urlParams.get('units') || '0';
        document.getElementById('rate').textContent = 'Rs. ' + parseFloat(urlParams.get('rate') || 0).toFixed(2);
        document.getElementById('netAmount').textContent = 'Rs. ' + (urlParams.get('net') || '0.00');
        document.getElementById('surcharge').textContent = 'Rs. ' + parseFloat(urlParams.get('surcharge') || 0).toFixed(2);
        document.getElementById('grossAmount').textContent = 'Rs. ' + (urlParams.get('gross') || '0.00');
    