const ButtonFactory = {

    homeButton: $("<button class='homeButton'></button>")
        .on('click', function () {
            if (document.getElementById("intro") === null) window.location.href = "";

        }),

    menuButton: $(`<img src='${getResourceURL("public/images/SettingsButton.png")}' class='settingsButton noselect'  alt=""/>`)
        .on('click', function () {

        }),

    ipBlockButton: (unhashedAddress) => {
        return $(`<button value="${unhashedAddress}" class="ipBlockButton">(Block IP Address)</button>`)
            .on("click", () => IPBlockingManager.blockAddress(unhashedAddress))
            .get(0);
    },

    ipUnblockButton: (unhashedAddress) => {
        return $(`<button value="${unhashedAddress}" class="ipUnblockButton">(Unblock IP)</button>`)
            .on("click", () => IPBlockingManager.unblockAddress(unhashedAddress))
            .get(0);
    },

    screenshotButton: (elementId) => {
        return $(
            `<img src="data:image/png;base64,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"
                       id="${elementId}"
                       style="visibility: hidden"
                       class="noselect"
                       alt="Screenshot Button">`
        )
    },

    fullscreenButton: (elementId) => {
        return $(
            `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFu2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuOWNjYzRkZSwgMjAyMi8wMy8xNC0xMToyNjoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjMgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNi0yNFQxNjo0ODoxNC0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDYtMjRUMTY6NTA6MDItMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDYtMjRUMTY6NTA6MDItMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMzMjVlYmZmLTg3MjctMDk0Zi05NWYwLWIzMGIwMzliYzEyNyIgeG1wTU06RG9jdW1lbnRJRD0i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"
                id="${elementId}" 
                       style="display: none; opacity: 0.7;" 
                       class="videoScreenshotButton noselect"
                       alt="Fullscreen">`
        )
    },

    endChatSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAvFQTFRFAAAAgICAlJSUmZmZmJibl5mcmZmamZmcmJqbmJqbmJmcmJmcmZmbmJmbmZmbmZqcmZqcmZqbmZqbmJmcmJqbmJqbmZmbmJqbmZmbl5eamZmZlZWVAAAAmJiYmJibmZmbmJmcmZmbmJmbmZqcmZqcmZmcmJqcmZmbgICAgICAlpabl5qamJqbmZqcmZmcl5qalZWVlpaWl5qamJmbmZqcmZqbmJqbmZmcl5eXmJqcmZmcmZqcl5mcl5eXl5eXmJmbmZqbmJialJSaiYmJmJiakpKSl5ecmJmbmJmbmZmamZmZkpKSmJqamZmbmZmZjo6OmJqamZqcmZmbmZmZmJqalZWVmZmbVVVVl5mcmJmcmJmcl5eamZmZlpqajo6cmJqcmZqcmJqblJSUmJibmJqbk5Obl5mbmZmbmZmblpaWmZmbmJqbmZmZl5qal5ebmJmbmZqbmJqbmZqbmZqclZqamZmamJiamZmcmZmamJmcmZmcmZmbmJqbmZmZmZmbmJmcmZmZmZmbmZmcmZmcgICAmZmbmJqcmJiamJiYmJmblpabmZmZmJmbk5OTmZqbmJqbmJqbmZmcmJiYmZqcmZmZmJiamJiYmZqbmZmbmZmbmJmbmZmblpqamJibmJqcmJmbmZmcmZmbmJmbmJicj4+PmJibmZqbmJmcmZmbmJicmJmblpqamJmbmZmblpabmZmbl5mbmZmbmJmbl5ecmJibmZmZl5eamJicmJqbmJqbmJqbl5eXmZmbmJmcmZmblZWamJicl5mbmJmckJCbl5mcmJmbmZmcl5eamJmcmJicmZmbmZmcmJiYlJSamJmcmZmZmJibmZmbmJmcmZmZmJiblZqalpabmJibmZmbmJmcmZmZmJibmJmbl5eamJiYmJqbmZmcmJqbl5eakpKbkpKSmZmbmZmZl5eamJmbmZmcmZmbmJiamZmclpaWl5eXlpqamJiamJiYmJmcmZmblZWcmJqcmZmbmZqbi4uLmJqcmZmchpxAhQAAAPt0Uk5TAAQfPFl2k6+/x87V3OTr8vTo2cu9rqCSgmVBHQEvY5bG5v3/97GNaQgCLmLJ+chTGBFYo+repGQWecP8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",
    startChatSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAhZQTFRFAAAAjo6OkpKbmJiYl5ebmZmcmJial5mbmZmamJqbmZmcmJqbmZmcmZmbmJqbmZmbmZqbmZqbmZmbmZqbmZqcmZmbmZqcgICAmZmZlpqamZmcl5mbmZmbmJqbmJmcmZqbmJmbmZqcgICAl5eXl5ebmJibmJiamZmcmJqbmJmbmZmZmJqamZmcmJmcl5qamJicmJqbmZmbmJibmJqcmJmcmJmbgICAlZqamZmbmJmckpKSl5eamZmbmZmclpabmJqblZWVmZmcmZmcmZqbmJiYmJiamJmcmZqcmZmZmJmbmJmciYmJl5eamJmbmZqci4uLmJibmJqbmZqcl5qamZmcmJicmJqbmJmbmJqcVVVVlpqak5ObmZmbmZqcmZmZmJibmJqbmJmbmJiYmJqbmZmZmZmcmZmcmJiamJmcmZqbmJmbmJiagICAl5mcmJqamZmblZWVmJmbAAAAl5eal5ecmZmZmJqalZWamZqbmJqcmJmcj4+PmZmbmJibmZmbmZmZmZmamZmZmJmcl5mcmZmbmJqclpaWmZqbmZmZlJSUmZqcmZmbkJCbmJmclZWbmJmcmZmZl5mbmJqblpabmJibmJibmJibmJiamZmamJicl5eXmZmblJSUl5eXmJmbmZmbmJmbmJqcmZmclZWcmJmbmZmZmJqcmZmblpqalJSamZmbmZmbmJmbmJqcmJqblpaWmJiYl5eayZLVgwAAALJ0Uk5TAAkcL0JVaHuOoayzucDHzdTb4ejv9fwGI0RkhaW90OP2/wIgQGGBosL9FG+dy12LuOZemtP7BDVw5w5Hgr44yRhfp+0+hs7+D63xDVuy+QtXrvdTqkim834DTiGE5QVUuukllzyvyG3d3u53CHFq3Az4AWA7HnQwzIjaEJtS6wqYMth2+p8n1lAT4JYXxinfQYC/M0VPWXyJTSx9HxuK8I95tCSUN4N1SSbXjLeNtRE0Vh5fxwMAABjPSURBVHic7d0HQxTLlgfwJhkAEzKMogKOCIKCioKAogQRwYBgIog4ivpEzFlMiDlf07139+3ue/t23+b0DVegwRkmdHeF/ld1n98nOKdOKWeqKxiGb6SkpqVnzJk7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"
}
