document.getElementById('save').addEventListener('click', function() {
    var oldUrl = document.getElementById('oldUrl').value;
    var newUrl = document.getElementById('newUrl').value;
  
    console.log('Save URLs:', oldUrl, newUrl); 

    chrome.storage.sync.set({oldUrl: oldUrl, newUrl: newUrl}, function() {
      console.log('URLs saved');
    });
  });
  
