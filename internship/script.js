document.addEventListener('DOMContentLoaded', () => {
    const dataList = document.getElementById('data-list');
    const watchlist = document.getElementById('watchlist');
    
    // Simulate random stock data (in a real application, this would come from an API)
    const stockData = [
        { name: 'AAPL', price: '$145.30' },
        { name: 'GOOG', price: '$2725.40' },
        { name: 'AMZN', price: '$3450.20' },
        { name: 'MSFT', price: '$299.80' },
        { name: 'TSLA', price: '$730.00' }
    ];

    // Render stock data (buttons to add to watchlist)
    stockData.forEach(stock => {
        const stockElement = document.createElement('div');
        stockElement.classList.add('data-item');
        
        stockElement.innerHTML = `
            <h4>${stock.name}</h4>
            <p>Price: ${stock.price}</p>
            <button data-stock="${stock.name}">Add to Watchlist</button>
        `;
        
        dataList.appendChild(stockElement);
    });

    // Handle adding/removing items to/from the watchlist
    dataList.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const stockName = event.target.getAttribute('data-stock');
            const isAlreadyInWatchlist = Array.from(watchlist.children).some(
                item => item.textContent.includes(stockName)
            );
            
            if (isAlreadyInWatchlist) {
                alert(`${stockName} is already in your watchlist.`);
            } else {
                // Create new list item for watchlist
                const li = document.createElement('li');
                li.textContent = stockName;

                // Remove from watchlist if clicked
                li.addEventListener('click', () => {
                    watchlist.removeChild(li);
                });

                watchlist.appendChild(li);
            }
        }
    });
});
