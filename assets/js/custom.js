var documents;

$.getJSON('/search.json', function(data) {
    documents = data;

    var idx = lunr(function() {
        this.ref('id');
        this.field('title', { boost: 10 });
        this.field('category');
        this.field('tags');

        documents.forEach((doc, index) => {
            doc.id = index;
            this.add(doc);
        }, this);
    });

    $('#search-btn').on('click', function() {
        var query = $('#search-input').val();
        var results = idx.search(query);
        displaySearchResults(results, documents);
    });
});

function displaySearchResults(results, documents) {
    var contentDiv = $('#content');

    if (results.length) {
        // start with an empty string every time there's a new search
        let appendString = '';

        results.forEach((result) => {
            var item = documents[result.ref];
            appendString += '<h3>' + item.title + '</h3><a href="' + item.url + '">Read More</a>' + '<p>';
        });

        // replace the existing content with the search results
        contentDiv.html(appendString);
    } else {
        contentDiv.html('<p>No results found</p>');
    }
}
