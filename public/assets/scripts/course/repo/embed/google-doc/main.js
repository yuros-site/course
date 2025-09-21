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
  }), console.log(" Script : deffers based script loaded"), console.log("Format: google slide footer script loaded"), window.addEventListener("load", () => {
    let e = document.getElementById("format-google-slide"), t = () => {
      let t2 = e.querySelector("#covers"), n = e.querySelector("#player"), s = e.querySelector("#iframe");
      t2.addEventListener("click", () => {
        t2.classList.add("hide"), n.classList.remove("hide");
      });
    };
    t();
  }), console.log("Parted : main | shift : deffered | scope : navs | source : default | type : script | status : loaded");
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
  darkmode && darkproc();
  var forum_telegram = () => {
    const n = localStorage.getItem("darkmode"), t = document.querySelector("#forum-telegram"), s = t.getAttribute("data-title"), o = t.getAttribute("data-uniqe"), e = document.createElement("script");
    return e.src = "https://comments.app/js/widget.js?3", e.setAttribute("data-comments-app-website", o), e.setAttribute("data-limit", 5), e.setAttribute("title", s), e.setAttribute("data-dislikes", 1), n == 2 ? e.setAttribute("data-dark", 1) : n == 3 ? e.setAttribute("data-dark", 0) : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? e.setAttribute("data-dark", 1) : window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? e.setAttribute("data-dark", 0) : e.setAttribute("data-dark", 0), t.appendChild(e), new Promise((e2) => {
      setTimeout(function() {
        e2("opened");
      }, 2e3);
    });
  };
  var forum_loader = async () => {
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") return;
    const e = document.querySelector("#forum-telegram"), t = await forum_telegram();
    if (t == "opened") {
      let t2 = e.firstElementChild;
      t2.setAttribute("title", e.getAttribute("data-title"));
    }
  };
  window.addEventListener("load", () => {
    forum_loader();
  });
  var init_bugs = () => {
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") return;
    if (document.querySelector(".utterances-frame")) {
      let t = localStorage.getItem("darkmode"), e = "github-light";
      t == 3 ? e = "github-light" : t == 2 ? e = "dark-blue" : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? e = "dark-blue" : window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? e = "github-light" : e = "github-light";
      let n = { type: "set-theme", theme: e }, s = document.querySelector(".utterances-frame");
      s.contentWindow.postMessage(n, "https://utteranc.es");
    }
  };
  window.addEventListener("load", () => {
    init_bugs();
  }), console.log("Module : page : deffers page course javascript engine loaded");
  var init_plan = () => {
    let e = document.querySelector("#plan .leaf"), t = Array.prototype.slice.call(e.querySelectorAll(".opening")), n = Array.prototype.slice.call(e.querySelectorAll(".parted"));
    t.forEach((t2) => {
      t2.addEventListener("click", () => {
        let s = t2.getAttribute("data-open");
        s = e.querySelector("#" + s), s.classList.contains("close") ? (n.forEach((e2) => {
          !e2.classList.contains(".close") ? e2.classList.add("close") : "";
        }), s.classList.remove("close"), s.parentNode.scrollIntoView()) : s.classList.add("close");
      });
    });
  };
  var init_snip = () => {
    let e = document.getElementById("snip"), n = Array.prototype.slice.call(e.querySelectorAll(".toggle")), t = Array.prototype.slice.call(e.querySelectorAll(".tabbed"));
    n.forEach((e2) => {
      e2.addEventListener("click", () => {
        let t2 = e2.getAttribute("data-action");
        t2 == "open-plan" && snip_menu(e2);
      });
    }), t.forEach((n2) => {
      n2.addEventListener("click", () => {
        let s = n2.getAttribute("data-action");
        t.forEach((e2) => {
          e2.classList.remove("open");
        }), n2.classList.add("open"), snip_tabs(s), screen.width < 1024 ? snip_exit(e) : "";
      });
    });
  };
  var snip_menu = (e) => {
    let t = document.getElementById("course"), n = t.getAttribute("data-repo");
    n == "open" ? t.setAttribute("data-repo", "close") : t.setAttribute("data-repo", "open"), n == "open" ? e.setAttribute("data-repo", "close") : e.setAttribute("data-repo", "open");
  };
  var snip_exit = (e) => {
    let t = Array.prototype.slice.call(e.querySelectorAll(".toggle"));
    t.forEach((e2) => {
      e2.setAttribute("data-repo", "close"), document.getElementById("course").setAttribute("data-repo", "close");
    });
  };
  var snip_tabs = (e) => {
    let t = Array.prototype.slice.call(document.querySelectorAll(".page-tab")), n = document.getElementById(e);
    t.forEach((e2) => {
      e2.classList.remove("open"), n.classList.add("open");
    });
  };
  window.addEventListener("load", () => {
    init_snip(), init_plan();
  });
})();
