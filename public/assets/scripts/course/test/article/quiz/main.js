(() => {
  // <stdin>
  console.log("Script : core | shift : deffered | scope : all  | source : default | type : script | status : loaded");
  var proto_render = (e, t) => {
    let n = t.content.cloneNode(true);
    e.innerHTML = "", e.appendChild(n), e.removeAttribute("data-target"), t.remove(e, t);
  };
  var proto_remove = (e, t) => {
    e.remove(), t.remove();
  };
  var proto_loader = () => {
    if (document.querySelector(".proto")) {
      let e = Array.prototype.slice.call(document.querySelectorAll(".proto"));
      e.forEach((e2) => {
        let t = document.getElementById(e2.getAttribute("data-target"));
        window.innerWidth < 420 ? (e2.classList.contains("lazy-xs") ? proto_render(e2, t) : proto_remove(e2, t), console.log("show in xs scale")) : window.innerWidth < 768 ? (e2.classList.contains("lazy-sm") ? proto_render(e2, t) : proto_remove(e2, t), console.log("show in sm scale")) : window.innerWidth < 1024 ? (e2.classList.contains("lazy-md") ? proto_render(e2, t) : proto_remove(e2, t), console.log("show in md scale")) : window.innerWidth < 1280 ? (e2.classList.contains("lazy-lg") ? proto_render(e2, t) : proto_remove(e2, t), console.log("show in lg scale")) : window.innerWidth > 1280 && (e2.classList.contains("lazy-xl") ? proto_render(e2, t) : proto_remove(e2, t), console.log("show in xl scale"));
      });
    }
  };
  var proto_valids = () => {
    document.querySelector("noscript").remove();
  };
  window.addEventListener("load", () => {
    proto_loader(), proto_valids();
  }), console.log(" Script : deffers based script loaded"), console.log("Format library pack script loaded"), console.log("Parted : main | shift : deffered | scope : navs | source : default | type : script | status : loaded");
  var darkmode = document.getElementById("darkmodes");
  var darkproc = () => {
    let e = darkmode.querySelectorAll(".mode"), t = Array.prototype.slice.call(e);
    t.forEach((e2) => {
      let t2 = e2.getAttribute("data-mode"), n = localStorage.getItem("darkmode");
      n == 2 ? darkmode.querySelector(".darks .icon").classList.add("open") : n == 3 ? darkmode.querySelector(".light .icon").classList.add("open") : darkmode.querySelector(".systo .icon").classList.add("open"), e2.addEventListener("click", () => {
        t2 == 1 ? (darkmode.querySelector(".systo .icon").classList.remove("open"), darkmode.querySelector(".darks .icon").classList.add("open"), document.documentElement.setAttribute("dark-mode", "dark"), localStorage.setItem("darkmode", "2")) : t2 == 2 ? (darkmode.querySelector(".darks .icon").classList.remove("open"), darkmode.querySelector(".light .icon").classList.add("open"), document.documentElement.setAttribute("dark-mode", "light"), localStorage.setItem("darkmode", "3")) : t2 == 3 && (darkmode.querySelector(".light .icon").classList.remove("open"), darkmode.querySelector(".systo .icon").classList.add("open"), window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? document.documentElement.setAttribute("dark-mode", "dark") : document.documentElement.setAttribute("dark-mode", "light"), localStorage.removeItem("darkmode"));
      });
    });
  };
  darkmode && darkproc(), console.log("Module : page : deffers page course javascript engine loaded");
  var task_tabs = () => {
    let e = document.getElementById("test"), n = e.querySelectorAll(".tab-action"), t = Array.prototype.slice.call(n), s = e.querySelectorAll(".tabs-item"), o = Array.prototype.slice.call(s);
    t.forEach((e2) => {
      e2.addEventListener("click", () => {
        let n2 = e2.getAttribute("data-target");
        t.forEach((e3) => {
          e3.classList.remove("open");
        }), o.forEach((e3) => {
          e3.classList.remove("open");
        }), e2.classList.add("open"), document.getElementById(n2).classList.add("open");
      });
    });
  };
  var task_asig = () => {
    document.getElementById("start-task").addEventListener("click", () => {
      let e = document.getElementById("info"), t = document.getElementById("load");
      e.classList.add("hide"), t.classList.remove("hide");
    }, false);
  };
  window.addEventListener("load", () => {
    task_tabs(), task_asig();
  });
})();
