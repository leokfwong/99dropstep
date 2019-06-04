var db;
var request = window.indexedDB.open("database", 1);

request.onerror = function(event) {
  console.log("error: ");
};

request.onsuccess = function(event) {
  db = request.result;
  console.log("success: " + db);
};

request.onupgradeneeded = function(event) {

  let db = event.target.result;
  let collection = db.createObjectStore("collection", {
    keyPath: "id"
  });
  let shop = db.createObjectStore("shop", {
    keyPath: "id"
  });
  let userdata = db.createObjectStore("userdata", {
    keyPath: "id"
  });
  let teams = db.createObjectStore("teams", {
    keyPath: "id"
  });
  let play = db.createObjectStore("play", {
    keyPath: "id"
  })

  for (let i in shop_json) {
    shop.add(shop_json[i]);
  }

  for (let i in userdata_json) {
    userdata.add(userdata_json[i]);
  }

  for (let i in teams_json) {
    teams.add(teams_json[i]);
  }

  console.log("upgrade: " + db);
}

function fetchTable(tbl, callback) {
  let request = db.transaction(tbl).objectStore(tbl);
  let array = [];

  request.openCursor().onsuccess = function(event) {
    let cursor = event.target.result;

    if (cursor) {
      array.push(cursor.value);
      cursor.continue();
    } else {
      console.log("No more entries!");
      callback(array);
    }
  };
}

function fetchRecord(tbl, id, callback) {

  let request = db.transaction(tbl).objectStore(tbl).get(id);

  request.onerror = function(event) {
    alert("Unable to retrieve daa from database!");
  };

  request.onsuccess = function(event) {

    if (request.result) {
      callback(request.result);
    } else {
      callback(undefined);
    }
  };
}

function addRecord(tbl, obj) {

  let request = db.transaction([tbl], "readwrite").objectStore(tbl).add(obj);

  request.onsuccess = function(event) {
    if (obj.type == "player") {
      console.log(obj.first + " " + obj.last + " (" + obj.id + ") has been succesfully added.");
    }
  };

  request.onerror = function(event) {
    if (obj.type == "player") {
      console.log("Unable to add " + obj.first + " " + obj.last + " (" + obj.id + ") because already exists.");
    }
  }

}

function removeRecord(tbl, id) {

  let request = db.transaction([tbl], "readwrite").objectStore(tbl).delete(id);

  request.onsuccess = function(event) {
    console.log("Object (" + id + " has been deleted from " + tbl + ".");
  };
}

function clearTable(tbl) {

  let request = db.transaction([tbl], "readwrite").objectStore(tbl).clear();

  request.oncomplete = function(event) {
    console.log("Table " + tbl + " cleared.");
  };

  request.onerror = function(event) {
    console.log("Table " + tbl + "not cleared due to error");
  };

  request.onsuccess = function(event) {
    console.log("Clearing succesful!");
  };

};
