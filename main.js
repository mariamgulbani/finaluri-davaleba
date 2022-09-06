import { Home } from "./home.js";
import { baseUrl } from "./config.js";
import { endUrl } from "./config.js";

// main page

fetch(`${baseUrl}skip=0&limit=9`)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    let homePage = new Home(res);
    homePage.render();
  });

// declare main values

let checkedValue;
let statusCheckedValue;
let checkedPrice;
let fromParam;
let toParam;
let value;
let searchValue = document.getElementById("search").value;

//search results with other selects

document.getElementById("search").addEventListener("input", (e) => {
  value = e.target.value;

  let arr = [];
  checkedValue = document.querySelectorAll(".check-city:checked");

  for (let i = 0; i < checkedValue.length; i++) {
    arr.push(checkedValue[i].value);
  }

  let statusarr = [];
  statusCheckedValue = document.querySelectorAll(".check-status:checked");

  for (let i = 0; i < statusCheckedValue.length; i++) {
    statusarr.push(statusCheckedValue[i].value);
  }

  if (
    document.querySelector('input[name="price"]:checked') !== null &&
    arr.length === 0 &&
    statusarr.length === 0
  ) {
    checkedPrice = document.querySelector('input[name="price"]:checked').value;
    fromParam = checkedPrice.slice(0, 4);
    toParam = checkedPrice.slice(5);

    fetch(
      `${baseUrl}fromParam=${fromParam}&toParam=${toParam}&searchStr=${value}${endUrl}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let homePage = new Home(res);
        homePage.render();
      });
  } else if (
    document.querySelector('input[name="price"]:checked') !== null &&
    arr.length !== 0 &&
    statusarr.length === 0
  ) {
    checkedPrice = document.querySelector('input[name="price"]:checked').value;
    fromParam = checkedPrice.slice(0, 4);
    toParam = checkedPrice.slice(5);

    fetch(
      `${baseUrl}fromParam=${fromParam}&toParam=${toParam}&cityParam=${arr}&searchStr=${value}${endUrl}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let homePage = new Home(res);
        homePage.render();
      });
  } else if (
    document.querySelector('input[name="price"]:checked') !== null &&
    arr.length !== 0 &&
    statusarr.length !== 0
  ) {
    checkedPrice = document.querySelector('input[name="price"]:checked').value;
    fromParam = checkedPrice.slice(0, 4);
    toParam = checkedPrice.slice(5);

    fetch(
      `${baseUrl}fromParam=${fromParam}&toParam=${toParam}&cityParam=${arr}&typeParam=${statusarr}&searchStr=${value}${endUrl}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let homePage = new Home(res);
        homePage.render();
      });
  } else if (
    document.querySelector('input[name="price"]:checked') === null &&
    arr.length === 0 &&
    statusarr.length !== 0
  ) {
    fetch(`${baseUrl}typeParam=${statusarr}&searchStr=${value}${endUrl}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let homePage = new Home(res);
        homePage.render();
      });
  } else if (
    document.querySelector('input[name="price"]:checked') === null &&
    arr.length !== 0 &&
    statusarr.length === 0
  ) {
    fetch(`${baseUrl}cityParam=${arr}&searchStr=${value}${endUrl}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let homePage = new Home(res);
        homePage.render();
      });
  } else if (
    document.querySelector('input[name="price"]:checked') !== null &&
    arr.length === 0 &&
    statusarr.length !== 0
  ) {
    checkedPrice = document.querySelector('input[name="price"]:checked').value;
    fromParam = checkedPrice.slice(0, 4);
    toParam = checkedPrice.slice(5);

    fetch(
      `${baseUrl}fromParam=${fromParam}&toParam=${toParam}&typeParam=${statusarr}&searchStr=${value}${endUrl}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let homePage = new Home(res);
        homePage.render();
      });
  } else if (
    document.querySelector('input[name="price"]:checked') === null &&
    arr.length !== 0 &&
    statusarr.length !== 0
  ) {
    fetch(
      `${baseUrl}cityParam=${arr}&typeParam=${statusarr}&searchStr=${value}${endUrl}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let homePage = new Home(res);
        homePage.render();
      });
  } else if (
    document.querySelector('input[name="price"]:checked') === null &&
    arr.length === 0 &&
    statusarr.length === 0
  ) {
    fetch(`${baseUrl}searchStr=${value}${endUrl}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let homePage = new Home(res);
        homePage.render();
      });
  }
});

// main function for result, search value null, in not null

function getResult() {
  let arr = [];
  checkedValue = document.querySelectorAll(".check-city:checked");

  for (let i = 0; i < checkedValue.length; i++) {
    arr.push(checkedValue[i].value);
  }

  let statusarr = [];
  statusCheckedValue = document.querySelectorAll(".check-status:checked");

  for (let i = 0; i < statusCheckedValue.length; i++) {
    statusarr.push(statusCheckedValue[i].value);
  }
  if (
    document.querySelector('input[name="price"]:checked') !== null &&
    arr.length === 0 &&
    statusarr.length === 0
  ) {
    checkedPrice = document.querySelector('input[name="price"]:checked').value;
    fromParam = checkedPrice.slice(0, 4);
    toParam = checkedPrice.slice(5);

    fetch(`${baseUrl}fromParam=${fromParam}&toParam=${toParam}${endUrl}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let homePage = new Home(res);
        homePage.render();
      });
  } else if (
    document.querySelector('input[name="price"]:checked') !== null &&
    arr.length !== 0 &&
    statusarr.length === 0
  ) {
    checkedPrice = document.querySelector('input[name="price"]:checked').value;
    fromParam = checkedPrice.slice(0, 4);
    toParam = checkedPrice.slice(5);

    fetch(
      `${baseUrl}fromParam=${fromParam}&toParam=${toParam}&cityParam=${arr}${endUrl}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let homePage = new Home(res);
        homePage.render();
      });
  } else if (
    document.querySelector('input[name="price"]:checked') !== null &&
    arr.length !== 0 &&
    statusarr.length !== 0
  ) {
    checkedPrice = document.querySelector('input[name="price"]:checked').value;
    fromParam = checkedPrice.slice(0, 4);
    toParam = checkedPrice.slice(5);

    fetch(
      `${baseUrl}fromParam=${fromParam}&toParam=${toParam}&cityParam=${arr}&typeParam=${statusarr}${endUrl}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let homePage = new Home(res);
        homePage.render();
      });
  } else if (
    document.querySelector('input[name="price"]:checked') === null &&
    arr.length === 0 &&
    statusarr.length !== 0
  ) {
    fetch(`${baseUrl}typeParam=${statusarr}${endUrl}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let homePage = new Home(res);
        homePage.render();
      });
  } else if (
    document.querySelector('input[name="price"]:checked') === null &&
    arr.length !== 0 &&
    statusarr.length === 0
  ) {
    fetch(`${baseUrl}cityParam=${arr}${endUrl}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let homePage = new Home(res);
        homePage.render();
      });
  } else if (
    document.querySelector('input[name="price"]:checked') !== null &&
    arr.length === 0 &&
    statusarr.length !== 0
  ) {
    checkedPrice = document.querySelector('input[name="price"]:checked').value;
    fromParam = checkedPrice.slice(0, 4);
    toParam = checkedPrice.slice(5);

    fetch(
      `${baseUrl}fromParam=${fromParam}&toParam=${toParam}&typeParam=${statusarr}${endUrl}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let homePage = new Home(res);
        homePage.render();
      });
  } else if (
    document.querySelector('input[name="price"]:checked') === null &&
    arr.length !== 0 &&
    statusarr.length !== 0
  ) {
    fetch(`${baseUrl}cityParam=${arr}&typeParam=${statusarr}${endUrl}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let homePage = new Home(res);
        homePage.render();
      });
  } else if (
    document.querySelector('input[name="price"]:checked') === null &&
    arr.length === 0 &&
    statusarr.length === 0
  ) {
    fetch(`${baseUrl}skip=0&limit=9`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let homePage = new Home(res);
        homePage.render();
      });
  }

  //search value is not null
  else if (searchValue !== null) {
    if (
      document.querySelector('input[name="price"]:checked') !== null &&
      arr.length === 0 &&
      statusarr.length === 0
    ) {
      checkedPrice = document.querySelector(
        'input[name="price"]:checked'
      ).value;
      fromParam = checkedPrice.slice(0, 4);
      toParam = checkedPrice.slice(5);

      fetch(
        `${baseUrl}fromParam=${fromParam}&toParam=${toParam}&searchStr=${value}${endUrl}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let homePage = new Home(res);
          homePage.render();
        });
    } else if (
      document.querySelector('input[name="price"]:checked') !== null &&
      arr.length !== 0 &&
      statusarr.length === 0
    ) {
      checkedPrice = document.querySelector(
        'input[name="price"]:checked'
      ).value;
      fromParam = checkedPrice.slice(0, 4);
      toParam = checkedPrice.slice(5);

      fetch(
        `${baseUrl}fromParam=${fromParam}&toParam=${toParam}&cityParam=${arr}&searchStr=${value}${endUrl}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let homePage = new Home(res);
          homePage.render();
        });
    } else if (
      document.querySelector('input[name="price"]:checked') !== null &&
      arr.length !== 0 &&
      statusarr.length !== 0
    ) {
      checkedPrice = document.querySelector(
        'input[name="price"]:checked'
      ).value;
      fromParam = checkedPrice.slice(0, 4);
      toParam = checkedPrice.slice(5);

      fetch(
        `${baseUrl}fromParam=${fromParam}&toParam=${toParam}&cityParam=${arr}&typeParam=${statusarr}&searchStr=${value}${endUrl}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let homePage = new Home(res);
          homePage.render();
        });
    } else if (
      document.querySelector('input[name="price"]:checked') === null &&
      arr.length === 0 &&
      statusarr.length !== 0
    ) {
      fetch(`${baseUrl}typeParam=${statusarr}&searchStr=${value}${endUrl}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let homePage = new Home(res);
          homePage.render();
        });
    } else if (
      document.querySelector('input[name="price"]:checked') === null &&
      arr.length !== 0 &&
      statusarr.length === 0
    ) {
      fetch(`${baseUrl}cityParam=${arr}&searchStr=${value}${endUrl}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let homePage = new Home(res);
          homePage.render();
        });
    } else if (
      document.querySelector('input[name="price"]:checked') !== null &&
      arr.length === 0 &&
      statusarr.length !== 0
    ) {
      checkedPrice = document.querySelector(
        'input[name="price"]:checked'
      ).value;
      fromParam = checkedPrice.slice(0, 4);
      toParam = checkedPrice.slice(5);

      fetch(
        `${baseUrl}fromParam=${fromParam}&toParam=${toParam}&typeParam=${statusarr}&searchStr=${value}${endUrl}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let homePage = new Home(res);
          homePage.render();
        });
    } else if (
      document.querySelector('input[name="price"]:checked') === null &&
      arr.length !== 0 &&
      statusarr.length !== 0
    ) {
      fetch(
        `${baseUrl}cityParam=${arr}&typeParam=${statusarr}&searchStr=${value}${endUrl}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let homePage = new Home(res);
          homePage.render();
        });
    } else if (
      document.querySelector('input[name="price"]:checked') === null &&
      arr.length === 0 &&
      statusarr.length === 0
    ) {
      fetch(`${baseUrl}searchStr=${value}${endUrl}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let homePage = new Home(res);
          homePage.render();
        });
    }
  }

  //if search value is null
  else if (searchValue === null) {
    if (
      document.querySelector('input[name="price"]:checked') !== null &&
      arr.length === 0 &&
      statusarr.length === 0
    ) {
      checkedPrice = document.querySelector(
        'input[name="price"]:checked'
      ).value;
      fromParam = checkedPrice.slice(0, 4);
      toParam = checkedPrice.slice(5);

      fetch(`${baseUrl}fromParam=${fromParam}&toParam=${toParam}${endUrl}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let homePage = new Home(res);
          homePage.render();
        });
    } else if (
      document.querySelector('input[name="price"]:checked') !== null &&
      arr.length !== 0 &&
      statusarr.length === 0
    ) {
      checkedPrice = document.querySelector(
        'input[name="price"]:checked'
      ).value;
      fromParam = checkedPrice.slice(0, 4);
      toParam = checkedPrice.slice(5);

      fetch(
        `${baseUrl}fromParam=${fromParam}&toParam=${toParam}&cityParam=${arr}${endUrl}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let homePage = new Home(res);
          homePage.render();
        });
    } else if (
      document.querySelector('input[name="price"]:checked') !== null &&
      arr.length !== 0 &&
      statusarr.length !== 0
    ) {
      checkedPrice = document.querySelector(
        'input[name="price"]:checked'
      ).value;
      fromParam = checkedPrice.slice(0, 4);
      toParam = checkedPrice.slice(5);

      fetch(
        `${baseUrl}fromParam=${fromParam}&toParam=${toParam}&cityParam=${arr}&typeParam=${statusarr}${endUrl}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let homePage = new Home(res);
          homePage.render();
        });
    } else if (
      document.querySelector('input[name="price"]:checked') === null &&
      arr.length === 0 &&
      statusarr.length !== 0
    ) {
      fetch(`${baseUrl}typeParam=${statusarr}${endUrl}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let homePage = new Home(res);
          homePage.render();
        });
    } else if (
      document.querySelector('input[name="price"]:checked') === null &&
      arr.length !== 0 &&
      statusarr.length === 0
    ) {
      fetch(`${baseUrl}cityParam=${arr}${endUrl}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let homePage = new Home(res);
          homePage.render();
        });
    } else if (
      document.querySelector('input[name="price"]:checked') !== null &&
      arr.length === 0 &&
      statusarr.length !== 0
    ) {
      checkedPrice = document.querySelector(
        'input[name="price"]:checked'
      ).value;
      fromParam = checkedPrice.slice(0, 4);
      toParam = checkedPrice.slice(5);

      fetch(
        `${baseUrl}fromParam=${fromParam}&toParam=${toParam}&typeParam=${statusarr}${endUrl}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let homePage = new Home(res);
          homePage.render();
        });
    } else if (
      document.querySelector('input[name="price"]:checked') === null &&
      arr.length !== 0 &&
      statusarr.length !== 0
    ) {
      fetch(`${baseUrl}cityParam=${arr}&typeParam=${statusarr}${endUrl}`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let homePage = new Home(res);
          homePage.render();
        });
    } else if (
      document.querySelector('input[name="price"]:checked') === null &&
      arr.length === 0 &&
      statusarr.length === 0
    ) {
      fetch(`${baseUrl}skip=0&limit=9`)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          let homePage = new Home(res);
          homePage.render();
        });
    }
  }
}

//get results with click render homepage

let item = document.getElementsByClassName("items");
for (var i = 0; i < item.length; i++) {
  item[i].addEventListener("click", getResult);
}

// price from and price to

let pricefrom = document.getElementById("price-from").value;
let priceto = document.getElementById("price-to").value;

function getPrice() {
  pricefrom = document.getElementById("price-from").value;
  priceto = document.getElementById("price-to").value;

  fetch(`${baseUrl}fromParam=${pricefrom}&toParam=${priceto}${endUrl}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      let homePage = new Home(res);
      homePage.render();
    });
}

//variable for submit button

let submitbutton = document.getElementById("submit");
submitbutton.addEventListener("click", getPrice);

//check for city

let checkList = document.getElementById("city-title");
checkList.getElementsByClassName("select-items")[0].onclick = function () {
  if (checkList.classList.contains("visible"))
    checkList.classList.remove("visible");
  else checkList.classList.add("visible");
};

//check for status

let checkStatus = document.getElementById("status-title");
checkStatus.getElementsByClassName("select-items")[0].onclick = function () {
  if (checkStatus.classList.contains("visible"))
    checkStatus.classList.remove("visible");
  else checkStatus.classList.add("visible");
};

//check for price

let checkPrice = document.getElementById("price-title");
checkPrice.getElementsByClassName("select-items")[0].onclick = function () {
  if (checkPrice.classList.contains("visible"))
    checkPrice.classList.remove("visible");
  else checkPrice.classList.add("visible");
};
