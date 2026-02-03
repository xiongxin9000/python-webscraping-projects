
window = (function(){
  var v_saf;!function(){var n=Function.toString,t=[],i=[],o=[].indexOf.bind(t),e=[].push.bind(t),r=[].push.bind(i);function u(n,t){return-1==o(n)&&(e(n),r(`function ${t||n.name||""}() { [native code] }`)),n}Object.defineProperty(Function.prototype,"toString",{enumerable:!1,configurable:!0,writable:!0,value:function(){return"function"==typeof this&&i[o(this)]||n.call(this)}}),u(Function.prototype.toString,"toString"),v_saf=u}();


  function _inherits(t, e) {
    t.prototype = Object.create(e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 }
    }), e && Object.setPrototypeOf(t, e) }
  Object.defineProperty(Object.prototype, Symbol.toStringTag, {
    get() { return Object.getPrototypeOf(this).constructor.name }, configurable:true,
  });
  var v_new_toggle = true
  var v_console_logger = console.log
  var v_allow_types = ["string", "number", "boolean"]
  console.log=v_saf(function(a){if (v_allow_types.indexOf(typeof a)!=-1){v_console_logger.apply(this, arguments)}}, "log")
  console.debug=v_saf(function(a){if (v_allow_types.indexOf(typeof a)!=-1){v_console_logger.apply(this, arguments)}}, "debug")
  console.warn=v_saf(function(a){if (v_allow_types.indexOf(typeof a)!=-1){v_console_logger.apply(this, arguments)}}, "warn")
  console.info=v_saf(function(a){if (v_allow_types.indexOf(typeof a)!=-1){v_console_logger.apply(this, arguments)}}, "info")
  var v_console_log = function(){if (!v_new_toggle){ v_console_logger.apply(this, arguments) }}
  var v_random = (function() { var seed = 276951438; return function random() { return seed = (seed * 9301 + 49297) % 233280, (seed / 233280)} })()
  var v_new = function(v){var temp=v_new_toggle; v_new_toggle = true; var r = new v; v_new_toggle = temp; return r}


  Navigator = v_saf(function Navigator(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };this._plugins = typeof PluginArray=='undefined'?[]:v_new(PluginArray); this._mimeTypes = typeof MimeTypeArray=='undefined'?[]:v_new(MimeTypeArray)})
  EventTarget = v_saf(function EventTarget(){;})
  Storage = v_saf(function Storage(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  History = v_saf(function History(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  WebGLRenderingContext = v_saf(function WebGLRenderingContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
    function WebGLBuffer(){}
    function WebGLProgram(){}
    function WebGLShader(){}
    this._toggle = {}
    this.createBuffer = function(){ v_console_log('  [*] WebGLRenderingContext -> createBuffer[func]'); return v_new(WebGLBuffer) }
    this.createProgram = function(){ v_console_log('  [*] WebGLRenderingContext -> createProgram[func]'); return v_new(WebGLProgram) }
    this.createShader = function(){ v_console_log('  [*] WebGLRenderingContext -> createShader[func]'); return v_new(WebGLShader) }
    this.getSupportedExtensions = function(){
      v_console_log('  [*] WebGLRenderingContext -> getSupportedExtensions[func]')
      return [
        "ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth",
        "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB",
        "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear",
        "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc",
        "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders",
        "WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture","WEBGL_draw_buffers","WEBGL_lose_context","WEBKIT_WEBGL_lose_context","WEBGL_multi_draw",
      ]
    }
    var self = this
    this.getExtension = function(key){
      v_console_log('  [*] WebGLRenderingContext -> getExtension[func]:', key)
      class WebGLDebugRendererInfo{
        get UNMASKED_VENDOR_WEBGL(){self._toggle[37445]=1;return 37445}
        get UNMASKED_RENDERER_WEBGL(){self._toggle[37446]=1;return 37446}
      }
      class EXTTextureFilterAnisotropic{}
      class WebGLLoseContext{
        loseContext(){}
        restoreContext(){}
      }
      if (key == 'WEBGL_debug_renderer_info'){ var r = new WebGLDebugRendererInfo }
      if (key == 'EXT_texture_filter_anisotropic'){ var r = new EXTTextureFilterAnisotropic }
      if (key == 'WEBGL_lose_context'){ var r = new WebGLLoseContext }
      else{ var r = new WebGLDebugRendererInfo }
      return r
    }
    this.getParameter = function(key){
      v_console_log('  [*] WebGLRenderingContext -> getParameter[func]:', key)
      if (this._toggle[key]){
        if (key == 37445){ return "Google Inc. (NVIDIA)" }
        if (key == 37446){ return "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)" }
      }else{
        if (key == 33902){ return new Float32Array([1,1]) }
        if (key == 33901){ return new Float32Array([1,1024]) }
        if (key == 35661){ return 32 }
        if (key == 34047){ return 16 }
        if (key == 34076){ return 16384 }
        if (key == 36349){ return 1024 }
        if (key == 34024){ return 16384 }
        if (key == 34930){ return 16 }
        if (key == 3379){ return 16384 }
        if (key == 36348){ return 30 }
        if (key == 34921){ return 16 }
        if (key == 35660){ return 16 }
        if (key == 36347){ return 4095 }
        if (key == 3386){ return new Int32Array([32767, 32767]) }
        if (key == 3410){ return 8 }
        if (key == 7937){ return "WebKit WebGL" }
        if (key == 35724){ return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)" }
        if (key == 3415){ return 0 }
        if (key == 7936){ return "WebKit" }
        if (key == 7938){ return "WebGL 1.0 (OpenGL ES 2.0 Chromium)" }
        if (key == 3411){ return 8 }
        if (key == 3412){ return 8 }
        if (key == 3413){ return 8 }
        if (key == 3414){ return 24 }
        return null
      }
    }
    this.getContextAttributes = function(){
      v_console_log('  [*] WebGLRenderingContext -> getContextAttributes[func]')
      return {
        alpha: true,
        antialias: true,
        depth: true,
        desynchronized: false,
        failIfMajorPerformanceCaveat: false,
        powerPreference: "default",
        premultipliedAlpha: true,
        preserveDrawingBuffer: false,
        stencil: false,
        xrCompatible: false,
      }
    }
    this.getShaderPrecisionFormat = function(a,b){
      v_console_log('  [*] WebGLRenderingContext -> getShaderPrecisionFormat[func]')
      function WebGLShaderPrecisionFormat(){}
      var r1 = v_new(WebGLShaderPrecisionFormat)
      r1.rangeMin = 127
      r1.rangeMax = 127
      r1.precision = 23
      var r2 = v_new(WebGLShaderPrecisionFormat)
      r2.rangeMin = 31
      r2.rangeMax = 30
      r2.precision = 0
      if (a == 35633 && b == 36338){ return r1 } if (a == 35633 && b == 36337){ return r1 } if (a == 35633 && b == 36336){ return r1 }
      if (a == 35633 && b == 36341){ return r2 } if (a == 35633 && b == 36340){ return r2 } if (a == 35633 && b == 36339){ return r2 }
      if (a == 35632 && b == 36338){ return r1 } if (a == 35632 && b == 36337){ return r1 } if (a == 35632 && b == 36336){ return r1 }
      if (a == 35632 && b == 36341){ return r2 } if (a == 35632 && b == 36340){ return r2 } if (a == 35632 && b == 36339){ return r2 }
      throw Error('getShaderPrecisionFormat')
    }
    v_saf(this.createBuffer, 'createBuffer')
    v_saf(this.createProgram, 'createProgram')
    v_saf(this.createShader, 'createShader')
    v_saf(this.getSupportedExtensions, 'getSupportedExtensions')
    v_saf(this.getExtension, 'getExtension')
    v_saf(this.getParameter, 'getParameter')
    v_saf(this.getContextAttributes, 'getContextAttributes')
    v_saf(this.getShaderPrecisionFormat, 'getShaderPrecisionFormat')})
  PluginArray = v_saf(function PluginArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
    this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].filename="internal-pdf-viewer";this[0].length=2;this[0].name="PDF Viewer";
    this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].filename="internal-pdf-viewer";this[1].length=2;this[1].name="Chrome PDF Viewer";
    this[2]=v_new(Plugin);this[2].description="Portable Document Format";this[2].filename="internal-pdf-viewer";this[2].length=2;this[2].name="Chromium PDF Viewer";
    this[3]=v_new(Plugin);this[3].description="Portable Document Format";this[3].filename="internal-pdf-viewer";this[3].length=2;this[3].name="Microsoft Edge PDF Viewer";
    this[4]=v_new(Plugin);this[4].description="Portable Document Format";this[4].filename="internal-pdf-viewer";this[4].length=2;this[4].name="WebKit built-in PDF";})
  Plugin = v_saf(function Plugin(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  MimeType = v_saf(function MimeType(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  HTMLCollection = v_saf(function HTMLCollection(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  NodeList = v_saf(function NodeList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  MessageChannel = v_saf(function MessageChannel(){;})
  URLSearchParams = v_saf(function URLSearchParams(){;})
  Crypto = v_saf(function Crypto(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
    this.getRandomValues = function(){
      v_console_log('  [*] Crypto -> getRandomValues[func]')
      var e=arguments[0]; return e.map(function(x, i){return e[i]=v_random()*1073741824});}
    this.randomUUID = function(){
      v_console_log('  [*] Crypto -> randomUUID[func]')
      function get2(){return (v_random()*255^0).toString(16).padStart(2,'0')}
      function rpt(func,num){var r=[];for(var i=0;i<num;i++){r.push(func())};return r.join('')}
      return [rpt(get2,4),rpt(get2,2),rpt(get2,2),rpt(get2,2),rpt(get2,6)].join('-')}})
  Path2D = v_saf(function Path2D(){;})
  Event = v_saf(function Event(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  CSSStyleDeclaration = v_saf(function CSSStyleDeclaration(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  DOMRectReadOnly = v_saf(function DOMRectReadOnly(){;})
  webkitURL = v_saf(function webkitURL(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  ResizeObserver = v_saf(function ResizeObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  IntersectionObserver = v_saf(function IntersectionObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  DOMTokenList = v_saf(function DOMTokenList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  IntersectionObserverEntry = v_saf(function IntersectionObserverEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  Image = v_saf(function Image(){;return v_new(HTMLImageElement)})
  Option = v_saf(function Option(){;})
  Node = v_saf(function Node(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Node, EventTarget)
  Performance = v_saf(function Performance(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Performance, EventTarget)
  Screen = v_saf(function Screen(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Screen, EventTarget)
  MediaQueryList = v_saf(function MediaQueryList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MediaQueryList, EventTarget)
  XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(XMLHttpRequestEventTarget, EventTarget)
  MessagePort = v_saf(function MessagePort(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MessagePort, EventTarget)
  UIEvent = v_saf(function UIEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(UIEvent, Event)
  HTMLOptionsCollection = v_saf(function HTMLOptionsCollection(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLOptionsCollection, HTMLCollection)
  ScreenOrientation = v_saf(function ScreenOrientation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(ScreenOrientation, EventTarget)
  Document = v_saf(function Document(){;}); _inherits(Document, Node)
  Element = v_saf(function Element(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Element, Node)
  XMLHttpRequest = v_saf(function XMLHttpRequest(){;}); _inherits(XMLHttpRequest, XMLHttpRequestEventTarget)
  MouseEvent = v_saf(function MouseEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MouseEvent, UIEvent)
  HTMLElement = v_saf(function HTMLElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLElement, Element)
  SVGElement = v_saf(function SVGElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(SVGElement, Element)
  HTMLScriptElement = v_saf(function HTMLScriptElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLScriptElement, HTMLElement)
  HTMLCanvasElement = v_saf(function HTMLCanvasElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLCanvasElement, HTMLElement)
  HTMLAnchorElement = v_saf(function HTMLAnchorElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };v_hook_href(this, 'HTMLAnchorElement', location.href)}); _inherits(HTMLAnchorElement, HTMLElement)
  HTMLIFrameElement = v_saf(function HTMLIFrameElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLIFrameElement, HTMLElement)
  HTMLInputElement = v_saf(function HTMLInputElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLInputElement, HTMLElement)
  HTMLSelectElement = v_saf(function HTMLSelectElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLSelectElement, HTMLElement)
  HTMLOptionElement = v_saf(function HTMLOptionElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLOptionElement, HTMLElement)
  HTMLTrackElement = v_saf(function HTMLTrackElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTrackElement, HTMLElement)
  HTMLMediaElement = v_saf(function HTMLMediaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMediaElement, HTMLElement)
  HTMLImageElement = v_saf(function HTMLImageElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLImageElement, HTMLElement)
  Window = v_saf(function Window(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Window, EventTarget)
  HTMLDocument = v_saf(function HTMLDocument(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };Object.defineProperty(this, 'location', {get(){return location}})}); _inherits(HTMLDocument, Document)
  HTMLHtmlElement = v_saf(function HTMLHtmlElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHtmlElement, HTMLElement)
  HTMLHeadElement = v_saf(function HTMLHeadElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHeadElement, HTMLElement)
  HTMLBodyElement = v_saf(function HTMLBodyElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLBodyElement, HTMLElement)
  MimeTypeArray = v_saf(function MimeTypeArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
    this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].enabledPlugin={"0":{},"1":{}};this[0].suffixes="pdf";this[0].type="application/pdf";
    this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].enabledPlugin={"0":{},"1":{}};this[1].suffixes="pdf";this[1].type="text/pdf";})
  Location = v_saf(function Location(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  PerformanceEntry = v_saf(function PerformanceEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  PerformanceElementTiming = v_saf(function PerformanceElementTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceElementTiming, PerformanceEntry)
  PerformanceEventTiming = v_saf(function PerformanceEventTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceEventTiming, PerformanceEntry)
  PerformanceLongTaskTiming = v_saf(function PerformanceLongTaskTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceLongTaskTiming, PerformanceEntry)
  PerformanceMark = v_saf(function PerformanceMark(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMark, PerformanceEntry)
  PerformanceMeasure = v_saf(function PerformanceMeasure(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMeasure, PerformanceEntry)
  PerformanceNavigation = v_saf(function PerformanceNavigation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  PerformanceResourceTiming = v_saf(function PerformanceResourceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceResourceTiming, PerformanceEntry)
  PerformanceNavigationTiming = v_saf(function PerformanceNavigationTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceNavigationTiming, PerformanceResourceTiming)
  PerformanceObserver = v_saf(function PerformanceObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  PerformanceObserverEntryList = v_saf(function PerformanceObserverEntryList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  PerformancePaintTiming = v_saf(function PerformancePaintTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformancePaintTiming, PerformanceEntry)
  PerformanceServerTiming = v_saf(function PerformanceServerTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  PerformanceTiming = v_saf(function PerformanceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  HTMLUnknownElement = v_saf(function HTMLUnknownElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLUnknownElement, HTMLElement)
  Touch = v_saf(function Touch(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
  TouchEvent = v_saf(function TouchEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(TouchEvent, UIEvent)
  PointerEvent = v_saf(function PointerEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PointerEvent, MouseEvent)
  HTMLDivElement = v_saf(function HTMLDivElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLDivElement, HTMLElement)
  HTMLButtonElement = v_saf(function HTMLButtonElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLButtonElement, HTMLElement)
  Object.defineProperties(Navigator.prototype, {
    userAgent: {get(){ v_console_log("  [*] Navigator -> userAgent[get]", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36");return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36" }},
    maxTouchPoints: {get(){ v_console_log("  [*] Navigator -> maxTouchPoints[get]", 10);return 10 }},
    language: {get(){ v_console_log("  [*] Navigator -> language[get]", "zh-CN");return "zh-CN" }},
    platform: {get(){ v_console_log("  [*] Navigator -> platform[get]", "Win32");return "Win32" }},
    hardwareConcurrency: {get(){ v_console_log("  [*] Navigator -> hardwareConcurrency[get]", 32);return 32 }},
    plugins: {get(){ v_console_log("  [*] Navigator -> plugins[get]", this._plugins || []);return this._plugins || [] }},
    webdriver: {get(){ v_console_log("  [*] Navigator -> webdriver[get]", false);return false }},
    vendor: {get(){ v_console_log("  [*] Navigator -> vendor[get]", "Google Inc.");return "Google Inc." }},
    product: {get(){ v_console_log("  [*] Navigator -> product[get]", "Gecko");return "Gecko" }},
    appName: {get(){ v_console_log("  [*] Navigator -> appName[get]", "Netscape");return "Netscape" }},
    languages: {get(){ v_console_log("  [*] Navigator -> languages[get]", {});return {} }},
    cookieEnabled: {get(){ v_console_log("  [*] Navigator -> cookieEnabled[get]", true);return true }},
    javaEnabled: {value: v_saf(function javaEnabled(){v_console_log("  [*] Navigator -> javaEnabled[func]", [].slice.call(arguments));return true})},
    vendorSub: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    productSub: {"enumerable":true,"configurable":true,"get":function(){return "20030107"},"set":function(){return true}},
    vendor: {"enumerable":true,"configurable":true,"get":function(){return "Google Inc."},"set":function(){return true}},
    maxTouchPoints: {"enumerable":true,"configurable":true,"get":function(){return 10},"set":function(){return true}},
    pdfViewerEnabled: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    hardwareConcurrency: {"enumerable":true,"configurable":true,"get":function(){return 32},"set":function(){return true}},
    cookieEnabled: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    appCodeName: {"enumerable":true,"configurable":true,"get":function(){return "Mozilla"},"set":function(){return true}},
    appName: {"enumerable":true,"configurable":true,"get":function(){return "Netscape"},"set":function(){return true}},
    appVersion: {"enumerable":true,"configurable":true,"get":function(){return "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36"},"set":function(){return true}},
    platform: {"enumerable":true,"configurable":true,"get":function(){return "Win32"},"set":function(){return true}},
    product: {"enumerable":true,"configurable":true,"get":function(){return "Gecko"},"set":function(){return true}},
    userAgent: {"enumerable":true,"configurable":true,"get":function(){return "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36"},"set":function(){return true}},
    language: {"enumerable":true,"configurable":true,"get":function(){return "zh-CN"},"set":function(){return true}},
    languages: {"enumerable":true,"configurable":true,"get":function(){return ["zh-CN","zh"]},"set":function(){return true}},
    onLine: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    webdriver: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    deprecatedRunAdAuctionEnforcesKAnonymity: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    deviceMemory: {"enumerable":true,"configurable":true,"get":function(){return 8},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"Navigator",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(EventTarget.prototype, {
    removeEventListener: {value: v_saf(function removeEventListener(){v_console_log("  [*] EventTarget -> removeEventListener[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"EventTarget",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Storage.prototype, {
    [Symbol.toStringTag]: {value:"Storage",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(History.prototype, {
    length: {get(){ v_console_log("  [*] History -> length[get]", 2);return 2 }},
    replaceState: {value: v_saf(function replaceState(){v_console_log("  [*] History -> replaceState[func]", [].slice.call(arguments));})},
    state: {get(){ v_console_log("  [*] History -> state[get]", {});return {} }},
    length: {"enumerable":true,"configurable":true,"get":function(){return 2},"set":function(){return true}},
    scrollRestoration: {"enumerable":true,"configurable":true,"get":function(){return "auto"},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"History",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(WebGLRenderingContext.prototype, {
    DEPTH_BUFFER_BIT: {"value":256,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BUFFER_BIT: {"value":1024,"writable":false,"enumerable":true,"configurable":false},
    COLOR_BUFFER_BIT: {"value":16384,"writable":false,"enumerable":true,"configurable":false},
    LINES: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    LINE_LOOP: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    LINE_STRIP: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    TRIANGLES: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    TRIANGLE_STRIP: {"value":5,"writable":false,"enumerable":true,"configurable":false},
    TRIANGLE_FAN: {"value":6,"writable":false,"enumerable":true,"configurable":false},
    ONE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    SRC_COLOR: {"value":768,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_SRC_COLOR: {"value":769,"writable":false,"enumerable":true,"configurable":false},
    SRC_ALPHA: {"value":770,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_SRC_ALPHA: {"value":771,"writable":false,"enumerable":true,"configurable":false},
    DST_ALPHA: {"value":772,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_DST_ALPHA: {"value":773,"writable":false,"enumerable":true,"configurable":false},
    DST_COLOR: {"value":774,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_DST_COLOR: {"value":775,"writable":false,"enumerable":true,"configurable":false},
    SRC_ALPHA_SATURATE: {"value":776,"writable":false,"enumerable":true,"configurable":false},
    FUNC_ADD: {"value":32774,"writable":false,"enumerable":true,"configurable":false},
    BLEND_EQUATION: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
    BLEND_EQUATION_RGB: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
    BLEND_EQUATION_ALPHA: {"value":34877,"writable":false,"enumerable":true,"configurable":false},
    FUNC_SUBTRACT: {"value":32778,"writable":false,"enumerable":true,"configurable":false},
    FUNC_REVERSE_SUBTRACT: {"value":32779,"writable":false,"enumerable":true,"configurable":false},
    BLEND_DST_RGB: {"value":32968,"writable":false,"enumerable":true,"configurable":false},
    BLEND_SRC_RGB: {"value":32969,"writable":false,"enumerable":true,"configurable":false},
    BLEND_DST_ALPHA: {"value":32970,"writable":false,"enumerable":true,"configurable":false},
    BLEND_SRC_ALPHA: {"value":32971,"writable":false,"enumerable":true,"configurable":false},
    CONSTANT_COLOR: {"value":32769,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_CONSTANT_COLOR: {"value":32770,"writable":false,"enumerable":true,"configurable":false},
    CONSTANT_ALPHA: {"value":32771,"writable":false,"enumerable":true,"configurable":false},
    ONE_MINUS_CONSTANT_ALPHA: {"value":32772,"writable":false,"enumerable":true,"configurable":false},
    BLEND_COLOR: {"value":32773,"writable":false,"enumerable":true,"configurable":false},
    ARRAY_BUFFER: {"value":34962,"writable":false,"enumerable":true,"configurable":false},
    ELEMENT_ARRAY_BUFFER: {"value":34963,"writable":false,"enumerable":true,"configurable":false},
    ARRAY_BUFFER_BINDING: {"value":34964,"writable":false,"enumerable":true,"configurable":false},
    ELEMENT_ARRAY_BUFFER_BINDING: {"value":34965,"writable":false,"enumerable":true,"configurable":false},
    STREAM_DRAW: {"value":35040,"writable":false,"enumerable":true,"configurable":false},
    STATIC_DRAW: {"value":35044,"writable":false,"enumerable":true,"configurable":false},
    DYNAMIC_DRAW: {"value":35048,"writable":false,"enumerable":true,"configurable":false},
    BUFFER_SIZE: {"value":34660,"writable":false,"enumerable":true,"configurable":false},
    BUFFER_USAGE: {"value":34661,"writable":false,"enumerable":true,"configurable":false},
    CURRENT_VERTEX_ATTRIB: {"value":34342,"writable":false,"enumerable":true,"configurable":false},
    FRONT: {"value":1028,"writable":false,"enumerable":true,"configurable":false},
    BACK: {"value":1029,"writable":false,"enumerable":true,"configurable":false},
    FRONT_AND_BACK: {"value":1032,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_2D: {"value":3553,"writable":false,"enumerable":true,"configurable":false},
    CULL_FACE: {"value":2884,"writable":false,"enumerable":true,"configurable":false},
    BLEND: {"value":3042,"writable":false,"enumerable":true,"configurable":false},
    DITHER: {"value":3024,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_TEST: {"value":2960,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_TEST: {"value":2929,"writable":false,"enumerable":true,"configurable":false},
    SCISSOR_TEST: {"value":3089,"writable":false,"enumerable":true,"configurable":false},
    POLYGON_OFFSET_FILL: {"value":32823,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_ALPHA_TO_COVERAGE: {"value":32926,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_COVERAGE: {"value":32928,"writable":false,"enumerable":true,"configurable":false},
    INVALID_ENUM: {"value":1280,"writable":false,"enumerable":true,"configurable":false},
    INVALID_VALUE: {"value":1281,"writable":false,"enumerable":true,"configurable":false},
    INVALID_OPERATION: {"value":1282,"writable":false,"enumerable":true,"configurable":false},
    OUT_OF_MEMORY: {"value":1285,"writable":false,"enumerable":true,"configurable":false},
    CW: {"value":2304,"writable":false,"enumerable":true,"configurable":false},
    CCW: {"value":2305,"writable":false,"enumerable":true,"configurable":false},
    LINE_WIDTH: {"value":2849,"writable":false,"enumerable":true,"configurable":false},
    ALIASED_POINT_SIZE_RANGE: {"value":33901,"writable":false,"enumerable":true,"configurable":false},
    ALIASED_LINE_WIDTH_RANGE: {"value":33902,"writable":false,"enumerable":true,"configurable":false},
    CULL_FACE_MODE: {"value":2885,"writable":false,"enumerable":true,"configurable":false},
    FRONT_FACE: {"value":2886,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_RANGE: {"value":2928,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_WRITEMASK: {"value":2930,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_CLEAR_VALUE: {"value":2931,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_FUNC: {"value":2932,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_CLEAR_VALUE: {"value":2961,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_FUNC: {"value":2962,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_FAIL: {"value":2964,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_PASS_DEPTH_FAIL: {"value":2965,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_PASS_DEPTH_PASS: {"value":2966,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_REF: {"value":2967,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_VALUE_MASK: {"value":2963,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_WRITEMASK: {"value":2968,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_FUNC: {"value":34816,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_FAIL: {"value":34817,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_PASS_DEPTH_FAIL: {"value":34818,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_PASS_DEPTH_PASS: {"value":34819,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_REF: {"value":36003,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_VALUE_MASK: {"value":36004,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BACK_WRITEMASK: {"value":36005,"writable":false,"enumerable":true,"configurable":false},
    VIEWPORT: {"value":2978,"writable":false,"enumerable":true,"configurable":false},
    SCISSOR_BOX: {"value":3088,"writable":false,"enumerable":true,"configurable":false},
    COLOR_CLEAR_VALUE: {"value":3106,"writable":false,"enumerable":true,"configurable":false},
    COLOR_WRITEMASK: {"value":3107,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_ALIGNMENT: {"value":3317,"writable":false,"enumerable":true,"configurable":false},
    PACK_ALIGNMENT: {"value":3333,"writable":false,"enumerable":true,"configurable":false},
    MAX_TEXTURE_SIZE: {"value":3379,"writable":false,"enumerable":true,"configurable":false},
    MAX_VIEWPORT_DIMS: {"value":3386,"writable":false,"enumerable":true,"configurable":false},
    SUBPIXEL_BITS: {"value":3408,"writable":false,"enumerable":true,"configurable":false},
    RED_BITS: {"value":3410,"writable":false,"enumerable":true,"configurable":false},
    GREEN_BITS: {"value":3411,"writable":false,"enumerable":true,"configurable":false},
    BLUE_BITS: {"value":3412,"writable":false,"enumerable":true,"configurable":false},
    ALPHA_BITS: {"value":3413,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_BITS: {"value":3414,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_BITS: {"value":3415,"writable":false,"enumerable":true,"configurable":false},
    POLYGON_OFFSET_UNITS: {"value":10752,"writable":false,"enumerable":true,"configurable":false},
    POLYGON_OFFSET_FACTOR: {"value":32824,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_BINDING_2D: {"value":32873,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_BUFFERS: {"value":32936,"writable":false,"enumerable":true,"configurable":false},
    SAMPLES: {"value":32937,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_COVERAGE_VALUE: {"value":32938,"writable":false,"enumerable":true,"configurable":false},
    SAMPLE_COVERAGE_INVERT: {"value":32939,"writable":false,"enumerable":true,"configurable":false},
    COMPRESSED_TEXTURE_FORMATS: {"value":34467,"writable":false,"enumerable":true,"configurable":false},
    DONT_CARE: {"value":4352,"writable":false,"enumerable":true,"configurable":false},
    FASTEST: {"value":4353,"writable":false,"enumerable":true,"configurable":false},
    NICEST: {"value":4354,"writable":false,"enumerable":true,"configurable":false},
    GENERATE_MIPMAP_HINT: {"value":33170,"writable":false,"enumerable":true,"configurable":false},
    BYTE: {"value":5120,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_BYTE: {"value":5121,"writable":false,"enumerable":true,"configurable":false},
    SHORT: {"value":5122,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT: {"value":5123,"writable":false,"enumerable":true,"configurable":false},
    INT: {"value":5124,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_INT: {"value":5125,"writable":false,"enumerable":true,"configurable":false},
    FLOAT: {"value":5126,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_COMPONENT: {"value":6402,"writable":false,"enumerable":true,"configurable":false},
    ALPHA: {"value":6406,"writable":false,"enumerable":true,"configurable":false},
    RGB: {"value":6407,"writable":false,"enumerable":true,"configurable":false},
    RGBA: {"value":6408,"writable":false,"enumerable":true,"configurable":false},
    LUMINANCE: {"value":6409,"writable":false,"enumerable":true,"configurable":false},
    LUMINANCE_ALPHA: {"value":6410,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT_4_4_4_4: {"value":32819,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT_5_5_5_1: {"value":32820,"writable":false,"enumerable":true,"configurable":false},
    UNSIGNED_SHORT_5_6_5: {"value":33635,"writable":false,"enumerable":true,"configurable":false},
    FRAGMENT_SHADER: {"value":35632,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_SHADER: {"value":35633,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_ATTRIBS: {"value":34921,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_UNIFORM_VECTORS: {"value":36347,"writable":false,"enumerable":true,"configurable":false},
    MAX_VARYING_VECTORS: {"value":36348,"writable":false,"enumerable":true,"configurable":false},
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: {"value":35661,"writable":false,"enumerable":true,"configurable":false},
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: {"value":35660,"writable":false,"enumerable":true,"configurable":false},
    MAX_TEXTURE_IMAGE_UNITS: {"value":34930,"writable":false,"enumerable":true,"configurable":false},
    MAX_FRAGMENT_UNIFORM_VECTORS: {"value":36349,"writable":false,"enumerable":true,"configurable":false},
    SHADER_TYPE: {"value":35663,"writable":false,"enumerable":true,"configurable":false},
    DELETE_STATUS: {"value":35712,"writable":false,"enumerable":true,"configurable":false},
    LINK_STATUS: {"value":35714,"writable":false,"enumerable":true,"configurable":false},
    VALIDATE_STATUS: {"value":35715,"writable":false,"enumerable":true,"configurable":false},
    ATTACHED_SHADERS: {"value":35717,"writable":false,"enumerable":true,"configurable":false},
    ACTIVE_UNIFORMS: {"value":35718,"writable":false,"enumerable":true,"configurable":false},
    ACTIVE_ATTRIBUTES: {"value":35721,"writable":false,"enumerable":true,"configurable":false},
    SHADING_LANGUAGE_VERSION: {"value":35724,"writable":false,"enumerable":true,"configurable":false},
    CURRENT_PROGRAM: {"value":35725,"writable":false,"enumerable":true,"configurable":false},
    NEVER: {"value":512,"writable":false,"enumerable":true,"configurable":false},
    LESS: {"value":513,"writable":false,"enumerable":true,"configurable":false},
    EQUAL: {"value":514,"writable":false,"enumerable":true,"configurable":false},
    LEQUAL: {"value":515,"writable":false,"enumerable":true,"configurable":false},
    GREATER: {"value":516,"writable":false,"enumerable":true,"configurable":false},
    NOTEQUAL: {"value":517,"writable":false,"enumerable":true,"configurable":false},
    GEQUAL: {"value":518,"writable":false,"enumerable":true,"configurable":false},
    ALWAYS: {"value":519,"writable":false,"enumerable":true,"configurable":false},
    KEEP: {"value":7680,"writable":false,"enumerable":true,"configurable":false},
    REPLACE: {"value":7681,"writable":false,"enumerable":true,"configurable":false},
    INCR: {"value":7682,"writable":false,"enumerable":true,"configurable":false},
    DECR: {"value":7683,"writable":false,"enumerable":true,"configurable":false},
    INVERT: {"value":5386,"writable":false,"enumerable":true,"configurable":false},
    INCR_WRAP: {"value":34055,"writable":false,"enumerable":true,"configurable":false},
    DECR_WRAP: {"value":34056,"writable":false,"enumerable":true,"configurable":false},
    VENDOR: {"value":7936,"writable":false,"enumerable":true,"configurable":false},
    RENDERER: {"value":7937,"writable":false,"enumerable":true,"configurable":false},
    VERSION: {"value":7938,"writable":false,"enumerable":true,"configurable":false},
    NEAREST: {"value":9728,"writable":false,"enumerable":true,"configurable":false},
    LINEAR: {"value":9729,"writable":false,"enumerable":true,"configurable":false},
    NEAREST_MIPMAP_NEAREST: {"value":9984,"writable":false,"enumerable":true,"configurable":false},
    LINEAR_MIPMAP_NEAREST: {"value":9985,"writable":false,"enumerable":true,"configurable":false},
    NEAREST_MIPMAP_LINEAR: {"value":9986,"writable":false,"enumerable":true,"configurable":false},
    LINEAR_MIPMAP_LINEAR: {"value":9987,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_MAG_FILTER: {"value":10240,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_MIN_FILTER: {"value":10241,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_WRAP_S: {"value":10242,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_WRAP_T: {"value":10243,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE: {"value":5890,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP: {"value":34067,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_BINDING_CUBE_MAP: {"value":34068,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_POSITIVE_X: {"value":34069,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_NEGATIVE_X: {"value":34070,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_POSITIVE_Y: {"value":34071,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_NEGATIVE_Y: {"value":34072,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_POSITIVE_Z: {"value":34073,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE_CUBE_MAP_NEGATIVE_Z: {"value":34074,"writable":false,"enumerable":true,"configurable":false},
    MAX_CUBE_MAP_TEXTURE_SIZE: {"value":34076,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE0: {"value":33984,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE1: {"value":33985,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE2: {"value":33986,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE3: {"value":33987,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE4: {"value":33988,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE5: {"value":33989,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE6: {"value":33990,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE7: {"value":33991,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE8: {"value":33992,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE9: {"value":33993,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE10: {"value":33994,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE11: {"value":33995,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE12: {"value":33996,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE13: {"value":33997,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE14: {"value":33998,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE15: {"value":33999,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE16: {"value":34000,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE17: {"value":34001,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE18: {"value":34002,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE19: {"value":34003,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE20: {"value":34004,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE21: {"value":34005,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE22: {"value":34006,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE23: {"value":34007,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE24: {"value":34008,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE25: {"value":34009,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE26: {"value":34010,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE27: {"value":34011,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE28: {"value":34012,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE29: {"value":34013,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE30: {"value":34014,"writable":false,"enumerable":true,"configurable":false},
    TEXTURE31: {"value":34015,"writable":false,"enumerable":true,"configurable":false},
    ACTIVE_TEXTURE: {"value":34016,"writable":false,"enumerable":true,"configurable":false},
    REPEAT: {"value":10497,"writable":false,"enumerable":true,"configurable":false},
    CLAMP_TO_EDGE: {"value":33071,"writable":false,"enumerable":true,"configurable":false},
    MIRRORED_REPEAT: {"value":33648,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_VEC2: {"value":35664,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_VEC3: {"value":35665,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_VEC4: {"value":35666,"writable":false,"enumerable":true,"configurable":false},
    INT_VEC2: {"value":35667,"writable":false,"enumerable":true,"configurable":false},
    INT_VEC3: {"value":35668,"writable":false,"enumerable":true,"configurable":false},
    INT_VEC4: {"value":35669,"writable":false,"enumerable":true,"configurable":false},
    BOOL: {"value":35670,"writable":false,"enumerable":true,"configurable":false},
    BOOL_VEC2: {"value":35671,"writable":false,"enumerable":true,"configurable":false},
    BOOL_VEC3: {"value":35672,"writable":false,"enumerable":true,"configurable":false},
    BOOL_VEC4: {"value":35673,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT2: {"value":35674,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT3: {"value":35675,"writable":false,"enumerable":true,"configurable":false},
    FLOAT_MAT4: {"value":35676,"writable":false,"enumerable":true,"configurable":false},
    SAMPLER_2D: {"value":35678,"writable":false,"enumerable":true,"configurable":false},
    SAMPLER_CUBE: {"value":35680,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_ENABLED: {"value":34338,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_SIZE: {"value":34339,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_STRIDE: {"value":34340,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_TYPE: {"value":34341,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_NORMALIZED: {"value":34922,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_POINTER: {"value":34373,"writable":false,"enumerable":true,"configurable":false},
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: {"value":34975,"writable":false,"enumerable":true,"configurable":false},
    IMPLEMENTATION_COLOR_READ_TYPE: {"value":35738,"writable":false,"enumerable":true,"configurable":false},
    IMPLEMENTATION_COLOR_READ_FORMAT: {"value":35739,"writable":false,"enumerable":true,"configurable":false},
    COMPILE_STATUS: {"value":35713,"writable":false,"enumerable":true,"configurable":false},
    LOW_FLOAT: {"value":36336,"writable":false,"enumerable":true,"configurable":false},
    MEDIUM_FLOAT: {"value":36337,"writable":false,"enumerable":true,"configurable":false},
    HIGH_FLOAT: {"value":36338,"writable":false,"enumerable":true,"configurable":false},
    LOW_INT: {"value":36339,"writable":false,"enumerable":true,"configurable":false},
    MEDIUM_INT: {"value":36340,"writable":false,"enumerable":true,"configurable":false},
    HIGH_INT: {"value":36341,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER: {"value":36160,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER: {"value":36161,"writable":false,"enumerable":true,"configurable":false},
    RGBA4: {"value":32854,"writable":false,"enumerable":true,"configurable":false},
    RGB5_A1: {"value":32855,"writable":false,"enumerable":true,"configurable":false},
    RGB565: {"value":36194,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_COMPONENT16: {"value":33189,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_INDEX8: {"value":36168,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_STENCIL: {"value":34041,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_WIDTH: {"value":36162,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_HEIGHT: {"value":36163,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_INTERNAL_FORMAT: {"value":36164,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_RED_SIZE: {"value":36176,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_GREEN_SIZE: {"value":36177,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_BLUE_SIZE: {"value":36178,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_ALPHA_SIZE: {"value":36179,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_DEPTH_SIZE: {"value":36180,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_STENCIL_SIZE: {"value":36181,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: {"value":36048,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: {"value":36049,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: {"value":36050,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: {"value":36051,"writable":false,"enumerable":true,"configurable":false},
    COLOR_ATTACHMENT0: {"value":36064,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_ATTACHMENT: {"value":36096,"writable":false,"enumerable":true,"configurable":false},
    STENCIL_ATTACHMENT: {"value":36128,"writable":false,"enumerable":true,"configurable":false},
    DEPTH_STENCIL_ATTACHMENT: {"value":33306,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_COMPLETE: {"value":36053,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: {"value":36054,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: {"value":36055,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: {"value":36057,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_UNSUPPORTED: {"value":36061,"writable":false,"enumerable":true,"configurable":false},
    FRAMEBUFFER_BINDING: {"value":36006,"writable":false,"enumerable":true,"configurable":false},
    RENDERBUFFER_BINDING: {"value":36007,"writable":false,"enumerable":true,"configurable":false},
    MAX_RENDERBUFFER_SIZE: {"value":34024,"writable":false,"enumerable":true,"configurable":false},
    INVALID_FRAMEBUFFER_OPERATION: {"value":1286,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_FLIP_Y_WEBGL: {"value":37440,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: {"value":37441,"writable":false,"enumerable":true,"configurable":false},
    CONTEXT_LOST_WEBGL: {"value":37442,"writable":false,"enumerable":true,"configurable":false},
    UNPACK_COLORSPACE_CONVERSION_WEBGL: {"value":37443,"writable":false,"enumerable":true,"configurable":false},
    BROWSER_DEFAULT_WEBGL: {"value":37444,"writable":false,"enumerable":true,"configurable":false},
    RGB8: {"value":32849,"writable":false,"enumerable":true,"configurable":false},
    RGBA8: {"value":32856,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"WebGLRenderingContext",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PluginArray.prototype, {
    length: {get(){ v_console_log("  [*] PluginArray -> length[get]", 5);return 5 }},
    [Symbol.toStringTag]: {value:"PluginArray",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Plugin.prototype, {
    [Symbol.toStringTag]: {value:"Plugin",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MimeType.prototype, {
    [Symbol.toStringTag]: {value:"MimeType",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(CanvasRenderingContext2D.prototype, {
    textBaseline: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> textBaseline[set]", [].slice.call(arguments)); }},
    fillStyle: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> fillStyle[set]", [].slice.call(arguments)); }},
    fillRect: {value: v_saf(function fillRect(){v_console_log("  [*] CanvasRenderingContext2D -> fillRect[func]", [].slice.call(arguments));})},
    font: {set(){ v_console_log("  [*] CanvasRenderingContext2D -> font[set]", [].slice.call(arguments)); }},
    fillText: {value: v_saf(function fillText(){v_console_log("  [*] CanvasRenderingContext2D -> fillText[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"CanvasRenderingContext2D",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLCollection.prototype, {
    length: {get(){ v_console_log("  [*] HTMLCollection -> length[get]", 0);return 0 }},
    [Symbol.toStringTag]: {value:"HTMLCollection",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(NodeList.prototype, {
    length: {get(){ v_console_log("  [*] NodeList -> length[get]", 0);return 0 }},
    [Symbol.toStringTag]: {value:"NodeList",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MessageChannel.prototype, {
    port2: {get(){ v_console_log("  [*] MessageChannel -> port2[get]", {});return {} }},
    port1: {get(){ v_console_log("  [*] MessageChannel -> port1[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"MessageChannel",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(URLSearchParams.prototype, {
    forEach: {value: v_saf(function forEach(){v_console_log("  [*] URLSearchParams -> forEach[func]", [].slice.call(arguments));})},
    get: {value: v_saf(function get(){v_console_log("  [*] URLSearchParams -> get[func]", [].slice.call(arguments));})},
    toString: {value: v_saf(function toString(){v_console_log("  [*] URLSearchParams -> toString[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"URLSearchParams",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Crypto.prototype, {
    [Symbol.toStringTag]: {value:"Crypto",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Path2D.prototype, {
    addPath: {value: v_saf(function addPath(){v_console_log("  [*] Path2D -> addPath[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"Path2D",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Event.prototype, {
    target: {get(){ v_console_log("  [*] Event -> target[get]", {});return {} }},
    type: {get(){ v_console_log("  [*] Event -> type[get]", "mouseout");return "mouseout" }},
    eventPhase: {get(){ v_console_log("  [*] Event -> eventPhase[get]", 3);return 3 }},
    bubbles: {get(){ v_console_log("  [*] Event -> bubbles[get]", true);return true }},
    cancelable: {get(){ v_console_log("  [*] Event -> cancelable[get]", true);return true }},
    timeStamp: {get(){ v_console_log("  [*] Event -> timeStamp[get]", 1313.8000000715256);return 1313.8000000715256 }},
    defaultPrevented: {get(){ v_console_log("  [*] Event -> defaultPrevented[get]", false);return false }},
    srcElement: {get(){ v_console_log("  [*] Event -> srcElement[get]", {});return {} }},
    CAPTURING_PHASE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    AT_TARGET: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    BUBBLING_PHASE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"Event",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(CSSStyleDeclaration.prototype, {
    setProperty: {value: v_saf(function setProperty(){v_console_log("  [*] CSSStyleDeclaration -> setProperty[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"CSSStyleDeclaration",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(DOMRectReadOnly.prototype, {
    right: {get(){ v_console_log("  [*] DOMRectReadOnly -> right[get]", 1112.5);return 1112.5 }},
    bottom: {get(){ v_console_log("  [*] DOMRectReadOnly -> bottom[get]", 1124.203125);return 1124.203125 }},
    left: {get(){ v_console_log("  [*] DOMRectReadOnly -> left[get]", 472.5);return 472.5 }},
    top: {get(){ v_console_log("  [*] DOMRectReadOnly -> top[get]", 740);return 740 }},
    [Symbol.toStringTag]: {value:"DOMRectReadOnly",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(webkitURL.prototype, {
    searchParams: {get(){ v_console_log("  [*] webkitURL -> searchParams[get]", {});return {} }},
    pathname: {set(){ v_console_log("  [*] webkitURL -> pathname[set]", [].slice.call(arguments));return {} }},
    href: {get(){ v_console_log("  [*] webkitURL -> href[get]", "https://a/c%20d?a=1&c=3");return "https://a/c%20d?a=1&c=3" }},
    username: {get(){ v_console_log("  [*] webkitURL -> username[get]", "a");return "a" }},
    host: {get(){ v_console_log("  [*] webkitURL -> host[get]", "x");return "x" }},
    hash: {get(){ v_console_log("  [*] webkitURL -> hash[get]", "#%D0%B1");return "#%D0%B1" }},
    [Symbol.toStringTag]: {value:"webkitURL",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(ResizeObserver.prototype, {
    observe: {value: v_saf(function observe(){v_console_log("  [*] ResizeObserver -> observe[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"ResizeObserver",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(IntersectionObserver.prototype, {
    observe: {value: v_saf(function observe(){v_console_log("  [*] IntersectionObserver -> observe[func]", [].slice.call(arguments));})},
    unobserve: {value: v_saf(function unobserve(){v_console_log("  [*] IntersectionObserver -> unobserve[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"IntersectionObserver",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(DOMTokenList.prototype, {
    add: {value: v_saf(function add(){v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"DOMTokenList",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(IntersectionObserverEntry.prototype, {
    intersectionRatio: {get(){ v_console_log("  [*] IntersectionObserverEntry -> intersectionRatio[get]", 0);return 0 }},
    isIntersecting: {get(){ v_console_log("  [*] IntersectionObserverEntry -> isIntersecting[get]", true);return true }},
    target: {get(){ v_console_log("  [*] IntersectionObserverEntry -> target[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"IntersectionObserverEntry",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Image.prototype, {
    crossOrigin: {set(){ v_console_log("  [*] Image -> crossOrigin[set]", [].slice.call(arguments)); }},
    src: {set(){ v_console_log("  [*] Image -> src[set]", [].slice.call(arguments)); }},
    [Symbol.toStringTag]: {value:"Image",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Option.prototype, {
    value: {get(){ v_console_log("  [*] Option -> value[get]", "86");return "86" }},
    selected: {set(){ v_console_log("  [*] Option -> selected[set]", [].slice.call(arguments));return "86" }},
    [Symbol.toStringTag]: {value:"Option",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Node.prototype, {
    firstChild: {get(){ v_console_log("  [*] Node -> firstChild[get]", {});return {} }},
    parentNode: {get(){ v_console_log("  [*] Node -> parentNode[get]", {});return {} }},
    removeChild: {value: v_saf(function removeChild(){v_console_log("  [*] Node -> removeChild[func]", [].slice.call(arguments));})},
    insertBefore: {value: v_saf(function insertBefore(){v_console_log("  [*] Node -> insertBefore[func]", [].slice.call(arguments));})},
    textContent: {get(){ v_console_log("  [*] Node -> textContent[get]", "热门话题");return "热门话题" },set(){ v_console_log("  [*] Node -> textContent[set]", [].slice.call(arguments));return "热门话题" }},
    appendChild: {value: v_saf(function appendChild(){v_console_log("  [*] Node -> appendChild[func]", [].slice.call(arguments));})},
    nodeType: {get(){ v_console_log("  [*] Node -> nodeType[get]", 1);return 1 }},
    nodeName: {get(){ v_console_log("  [*] Node -> nodeName[get]", "DIV");return "DIV" }},
    nextSibling: {get(){ v_console_log("  [*] Node -> nextSibling[get]", {});return {} }},
    ownerDocument: {get(){ v_console_log("  [*] Node -> ownerDocument[get]", {});return {} }},
    nodeValue: {get(){ v_console_log("  [*] Node -> nodeValue[get]", "风中追风ice");return "风中追风ice" }},
    contains: {value: v_saf(function contains(){v_console_log("  [*] Node -> contains[func]", [].slice.call(arguments));})},
    nodeType: {"enumerable":true,"configurable":true,"get":function(){return 9},"set":function(){return true}},
    nodeName: {"enumerable":true,"configurable":true,"get":function(){return "#document"},"set":function(){return true}},
    baseURI: {"enumerable":true,"configurable":true,"get":function(){return "https://xueqiu.com/"},"set":function(){return true}},
    isConnected: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    ELEMENT_NODE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    ATTRIBUTE_NODE: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    TEXT_NODE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    CDATA_SECTION_NODE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    ENTITY_REFERENCE_NODE: {"value":5,"writable":false,"enumerable":true,"configurable":false},
    ENTITY_NODE: {"value":6,"writable":false,"enumerable":true,"configurable":false},
    PROCESSING_INSTRUCTION_NODE: {"value":7,"writable":false,"enumerable":true,"configurable":false},
    COMMENT_NODE: {"value":8,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_NODE: {"value":9,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_TYPE_NODE: {"value":10,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_FRAGMENT_NODE: {"value":11,"writable":false,"enumerable":true,"configurable":false},
    NOTATION_NODE: {"value":12,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_DISCONNECTED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_PRECEDING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_FOLLOWING: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_CONTAINS: {"value":8,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_CONTAINED_BY: {"value":16,"writable":false,"enumerable":true,"configurable":false},
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {"value":32,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"Node",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Performance.prototype, {
    timeOrigin: {get(){ v_console_log("  [*] Performance -> timeOrigin[get]", 1758443378758);return 1758443378758 }},
    getEntries: {value: v_saf(function getEntries(){v_console_log("  [*] Performance -> getEntries[func]", [].slice.call(arguments));})},
    now: {value: v_saf(function now(){v_console_log("  [*] Performance -> now[func]", [].slice.call(arguments));})},
    timeOrigin: {"enumerable":true,"configurable":true,"get":function(){return 1758443378758},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"Performance",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Screen.prototype, {
    width: {get(){ v_console_log("  [*] Screen -> width[get]", 1920);return 1920 }},
    height: {get(){ v_console_log("  [*] Screen -> height[get]", 1080);return 1080 }},
    colorDepth: {get(){ v_console_log("  [*] Screen -> colorDepth[get]", 24);return 24 }},
    pixelDepth: {get(){ v_console_log("  [*] Screen -> pixelDepth[get]", 24);return 24 }},
    availWidth: {get(){ v_console_log("  [*] Screen -> availWidth[get]", 1920);return 1920 }},
    availHeight: {get(){ v_console_log("  [*] Screen -> availHeight[get]", 1032);return 1032 }},
    orientation: {get(){ v_console_log("  [*] Screen -> orientation[get]", {});return {} }},
    availWidth: {"enumerable":true,"configurable":true,"get":function(){return 1920},"set":function(){return true}},
    availHeight: {"enumerable":true,"configurable":true,"get":function(){return 1032},"set":function(){return true}},
    width: {"enumerable":true,"configurable":true,"get":function(){return 1920},"set":function(){return true}},
    height: {"enumerable":true,"configurable":true,"get":function(){return 1080},"set":function(){return true}},
    colorDepth: {"enumerable":true,"configurable":true,"get":function(){return 24},"set":function(){return true}},
    pixelDepth: {"enumerable":true,"configurable":true,"get":function(){return 24},"set":function(){return true}},
    availLeft: {"enumerable":true,"configurable":true,"get":function(){return 1600},"set":function(){return true}},
    availTop: {"enumerable":true,"configurable":true,"get":function(){return 229},"set":function(){return true}},
    isExtended: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"Screen",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MediaQueryList.prototype, {
    matches: {get(){ v_console_log("  [*] MediaQueryList -> matches[get]", true);return true }},
    [Symbol.toStringTag]: {value:"MediaQueryList",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
    [Symbol.toStringTag]: {value:"XMLHttpRequestEventTarget",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MessagePort.prototype, {
    onmessage: {set(){ v_console_log("  [*] MessagePort -> onmessage[set]", [].slice.call(arguments)); }},
    postMessage: {value: v_saf(function postMessage(){v_console_log("  [*] MessagePort -> postMessage[func]", [].slice.call(arguments));})},
    [Symbol.toStringTag]: {value:"MessagePort",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(UIEvent.prototype, {
    view: {get(){ v_console_log("  [*] UIEvent -> view[get]", {});return {} }},
    detail: {get(){ v_console_log("  [*] UIEvent -> detail[get]", 0);return 0 }},
    [Symbol.toStringTag]: {value:"UIEvent",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLOptionsCollection.prototype, {
    length: {get(){ v_console_log("  [*] HTMLOptionsCollection -> length[get]", 108);return 108 }},
    [Symbol.toStringTag]: {value:"HTMLOptionsCollection",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(ScreenOrientation.prototype, {
    angle: {get(){ v_console_log("  [*] ScreenOrientation -> angle[get]", 0);return 0 }},
    [Symbol.toStringTag]: {value:"ScreenOrientation",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Document.prototype, {
    currentScript: {get(){ v_console_log("  [*] Document -> currentScript[get]", {});return {} }},
    readyState: {get(){ v_console_log("  [*] Document -> readyState[get]", "interactive");return "interactive" }},
    hidden: {get(){ v_console_log("  [*] Document -> hidden[get]", false);return false }},
    wasDiscarded: {get(){ v_console_log("  [*] Document -> wasDiscarded[get]", false);return false }},
    all: {get(){ v_console_log("  [*] Document -> all[get]", {});return {} }},
    referrer: {get(){ v_console_log("  [*] Document -> referrer[get]", "https://xueqiu.com/");return "https://xueqiu.com/" }},
    createTextNode: {value: v_saf(function createTextNode(){v_console_log("  [*] Document -> createTextNode[func]", [].slice.call(arguments));})},
    createElementNS: {value: v_saf(function createElementNS(){v_console_log("  [*] Document -> createElementNS[func]", [].slice.call(arguments));})},
    activeElement: {get(){ v_console_log("  [*] Document -> activeElement[get]", {});return {} }},
    elementFromPoint: {value: v_saf(function elementFromPoint(){v_console_log("  [*] Document -> elementFromPoint[func]", [].slice.call(arguments));})},
    defaultView: {get(){ v_console_log("  [*] Document -> defaultView[get]", {});return {} }},
    visibilityState: {get(){ v_console_log("  [*] Document -> visibilityState[get]", "visible");return "visible" }},
    title: {get(){ v_console_log("  [*] Document -> title[get]", "雪球 - 聪明的投资者都在这里");return "雪球 - 聪明的投资者都在这里" }},
    URL: {"enumerable":true,"configurable":true,"get":function(){return "https://xueqiu.com/"},"set":function(){return true}},
    documentURI: {"enumerable":true,"configurable":true,"get":function(){return "https://xueqiu.com/"},"set":function(){return true}},
    compatMode: {"enumerable":true,"configurable":true,"get":function(){return "CSS1Compat"},"set":function(){return true}},
    characterSet: {"enumerable":true,"configurable":true,"get":function(){return "UTF-8"},"set":function(){return true}},
    charset: {"enumerable":true,"configurable":true,"get":function(){return "UTF-8"},"set":function(){return true}},
    inputEncoding: {"enumerable":true,"configurable":true,"get":function(){return "UTF-8"},"set":function(){return true}},
    contentType: {"enumerable":true,"configurable":true,"get":function(){return "text/html"},"set":function(){return true}},
    xmlStandalone: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    domain: {"enumerable":true,"configurable":true,"get":function(){return "xueqiu.com"},"set":function(){return true}},
    referrer: {"enumerable":true,"configurable":true,"get":function(){return "https://xueqiu.com/"},"set":function(){return true}},
    lastModified: {"enumerable":true,"configurable":true,"get":function(){return "09/21/2025 16:29:40"},"set":function(){return true}},
    readyState: {"enumerable":true,"configurable":true,"get":function(){return "complete"},"set":function(){return true}},
    title: {"enumerable":true,"configurable":true,"get":function(){return "雪球 - 聪明的投资者都在这里"},"set":function(){return true}},
    dir: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    designMode: {"enumerable":true,"configurable":true,"get":function(){return "off"},"set":function(){return true}},
    fgColor: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    linkColor: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    vlinkColor: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    alinkColor: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    bgColor: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    hidden: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    visibilityState: {"enumerable":true,"configurable":true,"get":function(){return "visible"},"set":function(){return true}},
    wasDiscarded: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    prerendering: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    webkitVisibilityState: {"enumerable":true,"configurable":true,"get":function(){return "visible"},"set":function(){return true}},
    webkitHidden: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    fullscreenEnabled: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    fullscreen: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    webkitIsFullScreen: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    webkitFullscreenEnabled: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    pictureInPictureEnabled: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    childElementCount: {"enumerable":true,"configurable":true,"get":function(){return 1},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"Document",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Element.prototype, {
    getAttribute: {value: v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})},
    remove: {value: v_saf(function remove(){v_console_log("  [*] Element -> remove[func]", [].slice.call(arguments));})},
    classList: {get(){ v_console_log("  [*] Element -> classList[get]", {});return {} }},
    setAttribute: {value: v_saf(function setAttribute(){v_console_log("  [*] Element -> setAttribute[func]", [].slice.call(arguments));})},
    namespaceURI: {get(){ v_console_log("  [*] Element -> namespaceURI[get]", "http://www.w3.org/1999/xhtml");return "http://www.w3.org/1999/xhtml" }},
    tagName: {get(){ v_console_log("  [*] Element -> tagName[get]", this.v_tagName);return this.v_tagName }},
    removeAttribute: {value: v_saf(function removeAttribute(){v_console_log("  [*] Element -> removeAttribute[func]", [].slice.call(arguments));})},
    getBoundingClientRect: {value: v_saf(function getBoundingClientRect(){v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));})},
    className: {set(){ v_console_log("  [*] Element -> className[set]", [].slice.call(arguments));return "DIV" }},
    querySelector: {value: v_saf(function querySelector(){v_console_log("  [*] Element -> querySelector[func]", [].slice.call(arguments));})},
    setAttributeNS: {value: v_saf(function setAttributeNS(){v_console_log("  [*] Element -> setAttributeNS[func]", [].slice.call(arguments));})},
    clientWidth: {get(){ v_console_log("  [*] Element -> clientWidth[get]", 1905);return 1905 }},
    clientHeight: {get(){ v_console_log("  [*] Element -> clientHeight[get]", 2854);return 2854 }},
    scrollTop: {get(){ v_console_log("  [*] Element -> scrollTop[get]", 0);return 0 }},
    namespaceURI: {"enumerable":true,"configurable":true,"get":function(){return "http://www.w3.org/1999/xhtml"},"set":function(){return true}},
    localName: {"enumerable":true,"configurable":true,"get":function(){return "body"},"set":function(){return true}},
    tagName: {"enumerable":true,"configurable":true,"get":function(){return "BODY"},"set":function(){return true}},
    id: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    className: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    slot: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    scrollTop: {"enumerable":true,"configurable":true,"get":function(){return 0},"set":function(){return true}},
    scrollLeft: {"enumerable":true,"configurable":true,"get":function(){return 0},"set":function(){return true}},
    scrollWidth: {"enumerable":true,"configurable":true,"get":function(){return 1905},"set":function(){return true}},
    scrollHeight: {"enumerable":true,"configurable":true,"get":function(){return 2854},"set":function(){return true}},
    clientTop: {"enumerable":true,"configurable":true,"get":function(){return 0},"set":function(){return true}},
    clientLeft: {"enumerable":true,"configurable":true,"get":function(){return 0},"set":function(){return true}},
    clientWidth: {"enumerable":true,"configurable":true,"get":function(){return 1905},"set":function(){return true}},
    clientHeight: {"enumerable":true,"configurable":true,"get":function(){return 2854},"set":function(){return true}},
    elementTiming: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    childElementCount: {"enumerable":true,"configurable":true,"get":function(){return 10},"set":function(){return true}},
    currentCSSZoom: {"enumerable":true,"configurable":true,"get":function(){return 1},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"Element",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(XMLHttpRequest.prototype, {
    OPENED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    HEADERS_RECEIVED: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    LOADING: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    DONE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"XMLHttpRequest",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MouseEvent.prototype, {
    buttons: {get(){ v_console_log("  [*] MouseEvent -> buttons[get]", 0);return 0 }},
    fromElement: {get(){ v_console_log("  [*] MouseEvent -> fromElement[get]", {});return {} }},
    toElement: {get(){ v_console_log("  [*] MouseEvent -> toElement[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"MouseEvent",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLElement.prototype, {
    hidden: {set(){ v_console_log("  [*] HTMLElement -> hidden[set]", [].slice.call(arguments)); }},
    onclick: {set(){ v_console_log("  [*] HTMLElement -> onclick[set]", [].slice.call(arguments)); }},
    contentEditable: {get(){ v_console_log("  [*] HTMLElement -> contentEditable[get]", "inherit");return "inherit" }},
    offsetWidth: {get(){ v_console_log("  [*] HTMLElement -> offsetWidth[get]", 8800);return 8800 }},
    offsetHeight: {get(){ v_console_log("  [*] HTMLElement -> offsetHeight[get]", 524);return 524 }},
    onfocus: {set(){ v_console_log("  [*] HTMLElement -> onfocus[set]", [].slice.call(arguments));return 524 }},
    onblur: {set(){ v_console_log("  [*] HTMLElement -> onblur[set]", [].slice.call(arguments));return 524 }},
    onload: {set(){ v_console_log("  [*] HTMLElement -> onload[set]", [].slice.call(arguments));return 524 }},
    title: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    lang: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    translate: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    dir: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    hidden: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    inert: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    accessKey: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    draggable: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    spellcheck: {"enumerable":true,"configurable":true,"get":function(){return true},"set":function(){return true}},
    autocapitalize: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    contentEditable: {"enumerable":true,"configurable":true,"get":function(){return "inherit"},"set":function(){return true}},
    enterKeyHint: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    isContentEditable: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    inputMode: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    virtualKeyboardPolicy: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    offsetTop: {"enumerable":true,"configurable":true,"get":function(){return 0},"set":function(){return true}},
    offsetLeft: {"enumerable":true,"configurable":true,"get":function(){return 0},"set":function(){return true}},
    offsetWidth: {"enumerable":true,"configurable":true,"get":function(){return 1905},"set":function(){return true}},
    offsetHeight: {"enumerable":true,"configurable":true,"get":function(){return 2854},"set":function(){return true}},
    innerText: {"enumerable":true,"configurable":true,"get":function(){return "\n\n下载App\n关于雪球\n\n立即登录/注册\n验证码登录\n账号密码登录\n二维码登录\n+86\n中国 +86\n美国 +1\n加拿大 +1\n中国香港 +852\n新加坡 +65\n澳大利亚 +61\n中国台湾 +886\n英国 +44\n日本 +81\n中国澳门 +853\n马来西亚 +60\n德国 +49\n法国 +33\n韩国 +82\n新西兰 +64\n意大利 +39\n泰国 +66\n阿拉伯联合酋长国 +971\n西班牙 +34\n俄罗斯 +7\n瑞典 +46\n荷兰 +31\n印度尼西亚 +62\n菲律宾 +63\n爱尔兰 +353\n越南 +84\n沙特阿拉伯 +966\n柬埔寨 +855\n尼日利亚 +234\n安哥拉 +244\n瑞士 +41\n肯尼亚 +254\n墨西哥 +52\n南非 +27\n委内瑞拉 +58\n坦桑尼亚 +255\n巴基斯坦 +92\n挪威 +47\n比利时 +32\n巴西 +55\n葡萄牙 +351\n乌克兰 +380\n阿曼 +968\n芬兰 +358\n埃及 +20\n白俄罗斯 +375\n印度 +91\n科威特 +965\n斯里兰卡 +94\n埃塞俄比亚 +251\n土耳其 +90\n赞比亚 +260\n刚果民主共和国 +243\n罗马尼亚 +40\n博茨瓦纳 +267\n丹麦 +45\n以色列 +972\n塔吉克斯坦 +992\n巴拿马 +507\n卡塔尔 +974\n匈牙利 +36\n孟加拉国 +880\n莫桑比克 +258\n阿尔及利亚 +213\n喀麦隆 +237\n圣马力诺 +223\n伊朗 +98\n塞尔维亚 +381\n苏丹 +249\n斯洛伐克 +421\n莱索托 +266\n加纳 +233\n保加利亚 +359\n哥伦比亚 +57\n阿塞拜疆 +994\n纳米比亚 +264\n奥地利 +43\n西撒哈拉 +212\n蒙古 +976\n刚果 +242\n波兰 +48\n尼日尔 +227\n卢森堡 +352\n吉尔吉斯斯坦 +996\n卢旺达 +250\n乍得 +235\n苏里南 +597\n尼泊尔 +977\n约旦 +962\n多哥 +228\n特里尼达及多巴哥 +1868\n阿根廷 +54\n马达加斯加 +261\n危地马拉 +502\n伊拉克 +964\n利比里亚 +231\n牙买加 +1876\n赤道几内亚 +240\n几内亚 +224\n马约特 +262\n希腊 +30\n乌干达 +256\n阿富汗 +93\n加蓬 +241\n马其顿 +389\n科特迪瓦 +225\n秘鲁 +51\n关岛 +1671\n发送验证码\n下次自动登录\n邮箱验证码登录\n登 录\n\n阅读并同意 \n服务协议、\n隐私政策\n\n微信登录\n3820.09\n上证指数-0.30%\n13070.86\n深证成指-0.04%\n3091.00\n创业板指-0.16%\n热门7x24视频基金资讯达人私募ETF\n吃息佬大贝修改于7小时前 · 来自iPhone\n价值千金的组合\n周五海油股息率低于招行了， 海油按照每股1.27元算下来4.81%，招行按照每股分红2.01元算，算下来4.9%，所以换了部分把招行凑了个整数；\n格力昨天也一度到达40，我觉得性价比已经高过中远海控，所以海控换格力，吃股息账户最新持仓如下：\n本来周五吃股息组合调了仓，应该当天发的，但是因为...\n大隐无言修改于9小时前 · 来自雪球\n往事并不如烟\n释老毛、元卫南、大隐无言牛熊全纪录（看一次笑一次）\n1、牛市初期，2014年年底\n释老毛：“从大局看，现在应该不是牛市起步，而是小盘股牛市的尾声。。。。综上，十大皆凶，短期内看不出牛市的理由，反而看出小盘股牛市最后的疯狂。”\n元卫南：《论沪港通政策应该暂停》、《沪港通助跌...\n77的实盘修改于3小时前 · 来自Android\n简单分享一下明天思路，周五缩量调整，整体情绪开始走弱，这里指数还是箱体震荡预期（最明显的一点就是国家队用证券白酒控制指数涨幅），这里周四的大跌个人认为这里最大的原因是指数结构不符合国家队的预期，融资盘比例过大，如果想要长远发展这样是不健康的，所以这里调整之后再上涨更为合适，然...\n买股票的老木匠修改于4小时前 · 来自Android\n以前我给大家讲过，高房价相当于一种税收。我们过去20年的发展，很大一部分是依赖于这部分税收。不仅我们的基础设施建设依赖于高房价，即便是我们的公用事业开支也是依赖于高房价的。现在很明显，地方财政的卖地收入已经没有了，所以过去依赖这块财政收入的支出，就会成为一种赤字。所以现在所有的...\n风中追风ice修改于8小时前 · 来自雪球\nocs，9月最强主线！\n半个月前在我写下最有可能接替易中天冲锋的ai硬件就是ocs交换机\n到今天各个标的的涨幅已经非常可观：\n腾景科技从9月8日到19日涨幅为88元—132元\n光库科技从9月8日到19日涨幅为90元—-125元\n德科立从9月8日到19日的涨幅为97元—-154元\n个人也吃到这波涨幅完整收益：\n但我觉...\n甘如修改于6小时前 · 来自雪球\n$比亚迪(SZ002594)$ 我看网络上评鸿蒙汽车将来是比亚迪汽车的主要对手，主要是华为的智驾很厉害，相比之下比亚迪的电池是一个重要优势，我不同意这个说法。鸿蒙汽车用的是宁德时代电池，口碑和实际性能强于比亚迪，是鸿蒙汽车能在高端立足的一个重要原因，如果鸿蒙汽车不用宁德时代电池，也用比亚...\n公子豹修改于6小时前 · 来自雪球\n预制菜吵得这么凶，本周在外面调研了一圈，说个感想吧：预制菜在B端依然会流行，但C端越来越卖不动了，畅销的将是现做的面点、卤味。\n先说B端，中国的商业是大型mall形式，有消费能力的中产大多在商场里逛街、看电影、教培，吃饭也在此地，而商场却是禁止明火的，只能用电磁炉，加上租金高要降...\nssail修改于昨天23:15 · 来自Android\n$格力电器(SZ000651)$ 格力的阳谋-10年包修。\n今天看到一则新闻，说小米也10年包修了。\n对消费者来说，如果能落实，那一定是好事。\n上一个这样跟风的空调品牌飞利浦，现在销声匿迹了。\n行业老二老三美的和海尔依然持续着原来的6年。\n而小米的汽车、充电宝以及手机等等的表现，...\n热门话题\n1\t\n跨省旅游订单暴增！旅游板块集体大涨\n\n2\t\n全面涨价！AI点燃存储芯片需求\n\n3\t\n固态电池概念再走强，赣锋锂业涨停\n\n4\t\n光通信板块反复活跃，长飞光纤4天3板\n\n5\t\n高位股跳水，上海建工等多股跌停\n\n6\t\n机器人板块展开调整，三花智控领跌\n\n7\t\n钢铁股快速走高，首钢股份涨停\n\n8\t\n昇腾950来了！华为算力链全线走强\n\n9\t\n算力硬件股持续走强，中科曙光再创新高\n\n10\t\n旅游酒店股异动拉升，云南旅游2连板\n热股榜\n更多\n全球\n沪深\n港股\n美股\n1小时内最热\n24小时内最热\n1\t\n光库科技\n\t\t+1.77%\n2\t\n立讯精密\n\t\t+4.33%\n3\t\n和而泰\n\t\t+3.78%\n4\t\n阳光电源\n\t\t-3.75%\n5\t\n华工科技\n\t\t+4.05%\n6\t\n上海电力\n\t\t+0.30%\n7\t\n安踏体育\n\t\t+2.65%\n8\t\n东芯股份\n\t\t-4.38%\n热门基金\n1\t\n前海开源公用事业\n\t年化(近5年)\t+22.82%\n2\t\n宏利转型机遇股票A\n\t年化(近5年)\t+22.32%\n3\t\n易方达标普信息科技指数（QDII-LOF）A\n\t年化(近5年)\t+21.65%\n4\t\n华夏行业景气混合\n\t年化(近5年)\t+21.32%\n5\t\n万家品质生活混合\n\t年化(近5年)\t+19.37%\n6\t\n财通新视野混合A\n\t年化(近5年)\t+18.96%\n7\t\n华安标普全球石油指数\n\t年化(近5年)\t+18.29%\n8\t\n中加转型动力混合A\n\t年化(近5年)\t+17.01%\n9\t\n银华抗通胀主题(QDII-FOF-LOF)A\n\t年化(近5年)\t+16.48%\n10\t\n财通价值动量混合A\n\t年化(近5年)\t+16.22%\nA股开户｜雪球基金｜投资者教育｜风险提示\n风险提示：雪球里任何用户或者嘉宾的发言，都有其特定立场，投资决策需要建立在独立思考之上\n其他建议反馈欢迎点击 #我给雪球提建议#  如受到欺诈信息骚扰请至  #防诈骗举报专区# \n\n互联网违法和不良信息投诉：01061840634 / tousu@xueqiu.com 举报中心 侵权投诉指引 雪球服务协议 雪球隐私政策 \n© 2025 XUEQIU.COM 北京雪球信息科技有限公司 京公网安备 11010502040379号 京ICP证100666号 京ICP备10040543 京金信备〔2022〕3号 营业执照 \n证券业协会会员单位（代码817027） 广播电视节目制作经营许可证: (京)字第08638号 出版物经营许可证 \n人工智能服务登记编号：Beijing-XueQiuHuiJian-2S0033 \n常见问题｜加入我们｜关于雪球"},"set":function(){return true}},
    outerText: {"enumerable":true,"configurable":true,"get":function(){return "\n\n下载App\n关于雪球\n\n立即登录/注册\n验证码登录\n账号密码登录\n二维码登录\n+86\n中国 +86\n美国 +1\n加拿大 +1\n中国香港 +852\n新加坡 +65\n澳大利亚 +61\n中国台湾 +886\n英国 +44\n日本 +81\n中国澳门 +853\n马来西亚 +60\n德国 +49\n法国 +33\n韩国 +82\n新西兰 +64\n意大利 +39\n泰国 +66\n阿拉伯联合酋长国 +971\n西班牙 +34\n俄罗斯 +7\n瑞典 +46\n荷兰 +31\n印度尼西亚 +62\n菲律宾 +63\n爱尔兰 +353\n越南 +84\n沙特阿拉伯 +966\n柬埔寨 +855\n尼日利亚 +234\n安哥拉 +244\n瑞士 +41\n肯尼亚 +254\n墨西哥 +52\n南非 +27\n委内瑞拉 +58\n坦桑尼亚 +255\n巴基斯坦 +92\n挪威 +47\n比利时 +32\n巴西 +55\n葡萄牙 +351\n乌克兰 +380\n阿曼 +968\n芬兰 +358\n埃及 +20\n白俄罗斯 +375\n印度 +91\n科威特 +965\n斯里兰卡 +94\n埃塞俄比亚 +251\n土耳其 +90\n赞比亚 +260\n刚果民主共和国 +243\n罗马尼亚 +40\n博茨瓦纳 +267\n丹麦 +45\n以色列 +972\n塔吉克斯坦 +992\n巴拿马 +507\n卡塔尔 +974\n匈牙利 +36\n孟加拉国 +880\n莫桑比克 +258\n阿尔及利亚 +213\n喀麦隆 +237\n圣马力诺 +223\n伊朗 +98\n塞尔维亚 +381\n苏丹 +249\n斯洛伐克 +421\n莱索托 +266\n加纳 +233\n保加利亚 +359\n哥伦比亚 +57\n阿塞拜疆 +994\n纳米比亚 +264\n奥地利 +43\n西撒哈拉 +212\n蒙古 +976\n刚果 +242\n波兰 +48\n尼日尔 +227\n卢森堡 +352\n吉尔吉斯斯坦 +996\n卢旺达 +250\n乍得 +235\n苏里南 +597\n尼泊尔 +977\n约旦 +962\n多哥 +228\n特里尼达及多巴哥 +1868\n阿根廷 +54\n马达加斯加 +261\n危地马拉 +502\n伊拉克 +964\n利比里亚 +231\n牙买加 +1876\n赤道几内亚 +240\n几内亚 +224\n马约特 +262\n希腊 +30\n乌干达 +256\n阿富汗 +93\n加蓬 +241\n马其顿 +389\n科特迪瓦 +225\n秘鲁 +51\n关岛 +1671\n发送验证码\n下次自动登录\n邮箱验证码登录\n登 录\n\n阅读并同意 \n服务协议、\n隐私政策\n\n微信登录\n3820.09\n上证指数-0.30%\n13070.86\n深证成指-0.04%\n3091.00\n创业板指-0.16%\n热门7x24视频基金资讯达人私募ETF\n吃息佬大贝修改于7小时前 · 来自iPhone\n价值千金的组合\n周五海油股息率低于招行了， 海油按照每股1.27元算下来4.81%，招行按照每股分红2.01元算，算下来4.9%，所以换了部分把招行凑了个整数；\n格力昨天也一度到达40，我觉得性价比已经高过中远海控，所以海控换格力，吃股息账户最新持仓如下：\n本来周五吃股息组合调了仓，应该当天发的，但是因为...\n大隐无言修改于9小时前 · 来自雪球\n往事并不如烟\n释老毛、元卫南、大隐无言牛熊全纪录（看一次笑一次）\n1、牛市初期，2014年年底\n释老毛：“从大局看，现在应该不是牛市起步，而是小盘股牛市的尾声。。。。综上，十大皆凶，短期内看不出牛市的理由，反而看出小盘股牛市最后的疯狂。”\n元卫南：《论沪港通政策应该暂停》、《沪港通助跌...\n77的实盘修改于3小时前 · 来自Android\n简单分享一下明天思路，周五缩量调整，整体情绪开始走弱，这里指数还是箱体震荡预期（最明显的一点就是国家队用证券白酒控制指数涨幅），这里周四的大跌个人认为这里最大的原因是指数结构不符合国家队的预期，融资盘比例过大，如果想要长远发展这样是不健康的，所以这里调整之后再上涨更为合适，然...\n买股票的老木匠修改于4小时前 · 来自Android\n以前我给大家讲过，高房价相当于一种税收。我们过去20年的发展，很大一部分是依赖于这部分税收。不仅我们的基础设施建设依赖于高房价，即便是我们的公用事业开支也是依赖于高房价的。现在很明显，地方财政的卖地收入已经没有了，所以过去依赖这块财政收入的支出，就会成为一种赤字。所以现在所有的...\n风中追风ice修改于8小时前 · 来自雪球\nocs，9月最强主线！\n半个月前在我写下最有可能接替易中天冲锋的ai硬件就是ocs交换机\n到今天各个标的的涨幅已经非常可观：\n腾景科技从9月8日到19日涨幅为88元—132元\n光库科技从9月8日到19日涨幅为90元—-125元\n德科立从9月8日到19日的涨幅为97元—-154元\n个人也吃到这波涨幅完整收益：\n但我觉...\n甘如修改于6小时前 · 来自雪球\n$比亚迪(SZ002594)$ 我看网络上评鸿蒙汽车将来是比亚迪汽车的主要对手，主要是华为的智驾很厉害，相比之下比亚迪的电池是一个重要优势，我不同意这个说法。鸿蒙汽车用的是宁德时代电池，口碑和实际性能强于比亚迪，是鸿蒙汽车能在高端立足的一个重要原因，如果鸿蒙汽车不用宁德时代电池，也用比亚...\n公子豹修改于6小时前 · 来自雪球\n预制菜吵得这么凶，本周在外面调研了一圈，说个感想吧：预制菜在B端依然会流行，但C端越来越卖不动了，畅销的将是现做的面点、卤味。\n先说B端，中国的商业是大型mall形式，有消费能力的中产大多在商场里逛街、看电影、教培，吃饭也在此地，而商场却是禁止明火的，只能用电磁炉，加上租金高要降...\nssail修改于昨天23:15 · 来自Android\n$格力电器(SZ000651)$ 格力的阳谋-10年包修。\n今天看到一则新闻，说小米也10年包修了。\n对消费者来说，如果能落实，那一定是好事。\n上一个这样跟风的空调品牌飞利浦，现在销声匿迹了。\n行业老二老三美的和海尔依然持续着原来的6年。\n而小米的汽车、充电宝以及手机等等的表现，...\n热门话题\n1\t\n跨省旅游订单暴增！旅游板块集体大涨\n\n2\t\n全面涨价！AI点燃存储芯片需求\n\n3\t\n固态电池概念再走强，赣锋锂业涨停\n\n4\t\n光通信板块反复活跃，长飞光纤4天3板\n\n5\t\n高位股跳水，上海建工等多股跌停\n\n6\t\n机器人板块展开调整，三花智控领跌\n\n7\t\n钢铁股快速走高，首钢股份涨停\n\n8\t\n昇腾950来了！华为算力链全线走强\n\n9\t\n算力硬件股持续走强，中科曙光再创新高\n\n10\t\n旅游酒店股异动拉升，云南旅游2连板\n热股榜\n更多\n全球\n沪深\n港股\n美股\n1小时内最热\n24小时内最热\n1\t\n光库科技\n\t\t+1.77%\n2\t\n立讯精密\n\t\t+4.33%\n3\t\n和而泰\n\t\t+3.78%\n4\t\n阳光电源\n\t\t-3.75%\n5\t\n华工科技\n\t\t+4.05%\n6\t\n上海电力\n\t\t+0.30%\n7\t\n安踏体育\n\t\t+2.65%\n8\t\n东芯股份\n\t\t-4.38%\n热门基金\n1\t\n前海开源公用事业\n\t年化(近5年)\t+22.82%\n2\t\n宏利转型机遇股票A\n\t年化(近5年)\t+22.32%\n3\t\n易方达标普信息科技指数（QDII-LOF）A\n\t年化(近5年)\t+21.65%\n4\t\n华夏行业景气混合\n\t年化(近5年)\t+21.32%\n5\t\n万家品质生活混合\n\t年化(近5年)\t+19.37%\n6\t\n财通新视野混合A\n\t年化(近5年)\t+18.96%\n7\t\n华安标普全球石油指数\n\t年化(近5年)\t+18.29%\n8\t\n中加转型动力混合A\n\t年化(近5年)\t+17.01%\n9\t\n银华抗通胀主题(QDII-FOF-LOF)A\n\t年化(近5年)\t+16.48%\n10\t\n财通价值动量混合A\n\t年化(近5年)\t+16.22%\nA股开户｜雪球基金｜投资者教育｜风险提示\n风险提示：雪球里任何用户或者嘉宾的发言，都有其特定立场，投资决策需要建立在独立思考之上\n其他建议反馈欢迎点击 #我给雪球提建议#  如受到欺诈信息骚扰请至  #防诈骗举报专区# \n\n互联网违法和不良信息投诉：01061840634 / tousu@xueqiu.com 举报中心 侵权投诉指引 雪球服务协议 雪球隐私政策 \n© 2025 XUEQIU.COM 北京雪球信息科技有限公司 京公网安备 11010502040379号 京ICP证100666号 京ICP备10040543 京金信备〔2022〕3号 营业执照 \n证券业协会会员单位（代码817027） 广播电视节目制作经营许可证: (京)字第08638号 出版物经营许可证 \n人工智能服务登记编号：Beijing-XueQiuHuiJian-2S0033 \n常见问题｜加入我们｜关于雪球"},"set":function(){return true}},
    writingSuggestions: {"enumerable":true,"configurable":true,"get":function(){return "true"},"set":function(){return true}},
    nonce: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    autofocus: {"enumerable":true,"configurable":true,"get":function(){return false},"set":function(){return true}},
    tabIndex: {"enumerable":true,"configurable":true,"get":function(){return -1},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"HTMLElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(SVGElement.prototype, {
    style: {get(){ v_console_log("  [*] SVGElement -> style[get]", ); }},
    [Symbol.toStringTag]: {value:"SVGElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLScriptElement.prototype, {
    text: {set(){ v_console_log("  [*] HTMLScriptElement -> text[set]", [].slice.call(arguments)); }},
    src: {get(){ v_console_log("  [*] HTMLScriptElement -> src[get]", "");return "" },set(){ v_console_log("  [*] HTMLScriptElement -> src[set]", [].slice.call(arguments));return "" }},
    [Symbol.toStringTag]: {value:"HTMLScriptElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLCanvasElement.prototype, {
    getContext: {value: v_saf(function getContext(){v_console_log("  [*] HTMLCanvasElement -> getContext[func]", [].slice.call(arguments));if (arguments[0]=='2d'){var r = v_new(CanvasRenderingContext2D); return r}; if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_new(WebGLRenderingContext); r._canvas = this; return r}; return null})},
    height: {set(){ v_console_log("  [*] HTMLCanvasElement -> height[set]", [].slice.call(arguments)); }},
    width: {set(){ v_console_log("  [*] HTMLCanvasElement -> width[set]", [].slice.call(arguments)); }},
    [Symbol.toStringTag]: {value:"HTMLCanvasElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLAnchorElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLAnchorElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLIFrameElement.prototype, {
    contentWindow: {get(){ v_console_log("  [*] HTMLIFrameElement -> contentWindow[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"HTMLIFrameElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLInputElement.prototype, {
    type: {get(){ v_console_log("  [*] HTMLInputElement -> type[get]", "text");return "text" }},
    value: {get(){ v_console_log("  [*] HTMLInputElement -> value[get]", "");return "" }},
    name: {get(){ v_console_log("  [*] HTMLInputElement -> name[get]", "");return "" },set(){ v_console_log("  [*] HTMLInputElement -> name[set]", [].slice.call(arguments));return "" }},
    defaultChecked: {get(){ v_console_log("  [*] HTMLInputElement -> defaultChecked[get]", false);return false },set(){ v_console_log("  [*] HTMLInputElement -> defaultChecked[set]", [].slice.call(arguments));return false }},
    defaultValue: {get(){ v_console_log("  [*] HTMLInputElement -> defaultValue[get]", "");return "" },set(){ v_console_log("  [*] HTMLInputElement -> defaultValue[set]", [].slice.call(arguments));return "" }},
    checked: {get(){ v_console_log("  [*] HTMLInputElement -> checked[get]", true);return true },set(){ v_console_log("  [*] HTMLInputElement -> checked[set]", [].slice.call(arguments));return true }},
    [Symbol.toStringTag]: {value:"HTMLInputElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLSelectElement.prototype, {
    multiple: {set(){ v_console_log("  [*] HTMLSelectElement -> multiple[set]", [].slice.call(arguments)); }},
    options: {get(){ v_console_log("  [*] HTMLSelectElement -> options[get]", {});return {} }},
    [Symbol.toStringTag]: {value:"HTMLSelectElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLOptionElement.prototype, {
    value: {get(){ v_console_log("  [*] HTMLOptionElement -> value[get]", "86");return "86" }},
    selected: {set(){ v_console_log("  [*] HTMLOptionElement -> selected[set]", [].slice.call(arguments));return "86" }},
    [Symbol.toStringTag]: {value:"HTMLOptionElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLTrackElement.prototype, {
    kind: {set(){ v_console_log("  [*] HTMLTrackElement -> kind[set]", [].slice.call(arguments)); }},
    srclang: {set(){ v_console_log("  [*] HTMLTrackElement -> srclang[set]", [].slice.call(arguments)); }},
    label: {set(){ v_console_log("  [*] HTMLTrackElement -> label[set]", [].slice.call(arguments)); }},
    LOADING: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    LOADED: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    ERROR: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"HTMLTrackElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLMediaElement.prototype, {
    volume: {get(){ v_console_log("  [*] HTMLMediaElement -> volume[get]", 0.6);return 0.6 },set(){ v_console_log("  [*] HTMLMediaElement -> volume[set]", [].slice.call(arguments));return 0.6 }},
    canPlayType: {value: v_saf(function canPlayType(){v_console_log("  [*] HTMLMediaElement -> canPlayType[func]", [].slice.call(arguments));})},
    NETWORK_IDLE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    NETWORK_LOADING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    NETWORK_NO_SOURCE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    HAVE_METADATA: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    HAVE_CURRENT_DATA: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    HAVE_FUTURE_DATA: {"value":3,"writable":false,"enumerable":true,"configurable":false},
    HAVE_ENOUGH_DATA: {"value":4,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"HTMLMediaElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLImageElement.prototype, {
    crossOrigin: {set(){ v_console_log("  [*] HTMLImageElement -> crossOrigin[set]", [].slice.call(arguments)); }},
    src: {set(){ v_console_log("  [*] HTMLImageElement -> src[set]", [].slice.call(arguments)); }},
    [Symbol.toStringTag]: {value:"HTMLImageElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Window.prototype, {
    PERSISTENT: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"Window",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLDocument.prototype, {
    [Symbol.toStringTag]: {value:"HTMLDocument",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLHtmlElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLHtmlElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLHeadElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLHeadElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLBodyElement.prototype, {
    text: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    link: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    vLink: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    aLink: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    bgColor: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    background: {"enumerable":true,"configurable":true,"get":function(){return ""},"set":function(){return true}},
    [Symbol.toStringTag]: {value:"HTMLBodyElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(MimeTypeArray.prototype, {
    [Symbol.toStringTag]: {value:"MimeTypeArray",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]: {value:"Location",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceEntry.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceEntry",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceElementTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceElementTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceEventTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceEventTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceLongTaskTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceLongTaskTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceMark.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceMark",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceMeasure.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceMeasure",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceNavigation.prototype, {
    TYPE_RELOAD: {"value":1,"writable":false,"enumerable":true,"configurable":false},
    TYPE_BACK_FORWARD: {"value":2,"writable":false,"enumerable":true,"configurable":false},
    TYPE_RESERVED: {"value":255,"writable":false,"enumerable":true,"configurable":false},
    [Symbol.toStringTag]: {value:"PerformanceNavigation",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceResourceTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceResourceTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceNavigationTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceNavigationTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceObserver.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceObserver",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceObserverEntryList.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceObserverEntryList",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformancePaintTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformancePaintTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceServerTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceServerTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PerformanceTiming.prototype, {
    [Symbol.toStringTag]: {value:"PerformanceTiming",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLUnknownElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLUnknownElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(Touch.prototype, {
    [Symbol.toStringTag]: {value:"Touch",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(TouchEvent.prototype, {
    [Symbol.toStringTag]: {value:"TouchEvent",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(PointerEvent.prototype, {
    [Symbol.toStringTag]: {value:"PointerEvent",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLDivElement",writable:false,enumerable:false,configurable:true},
  })
  Object.defineProperties(HTMLButtonElement.prototype, {
    [Symbol.toStringTag]: {value:"HTMLButtonElement",writable:false,enumerable:false,configurable:true},
  })




  if (typeof __dirname != 'undefined'){ __dirname = undefined }
  if (typeof __filename != 'undefined'){ __filename = undefined }
  if (typeof require != 'undefined'){ require = undefined }
  if (typeof exports != 'undefined'){ exports = undefined }
  if (typeof module != 'undefined'){ module = undefined }
  if (typeof Buffer != 'undefined'){ Buffer = undefined }
  var avoid_log = ['Symbol','Object','Number','RegExp','Boolean','String','constructor']
  var __globalThis__ = typeof global != 'undefined' ? global : this
  var window = new Proxy(v_new(Window), {
    get(a,b){ if(b=='global'){return}
      var r = a[b] || __globalThis__[b]
      if (typeof b !== 'symbol' && avoid_log.indexOf(b) == -1){
        v_console_log('  [*] [window get '+b+'] ==>', r)
      }
      return r
    },
    set(a,b,c){
      if (b == 'onclick' && typeof c == 'function') { window.addEventListener('click', c) }
      if (b == 'onmousedown' && typeof c == 'function') { window.addEventListener('mousedown', c) }
      if (b == 'onmouseup' && typeof c == 'function') { window.addEventListener('mouseup', c) }
      __globalThis__[b] = a[b] = c
      return true
    },
  })
  function v_proxy(obj, name, func){
    return new Proxy(obj, {
      get(a,b){ if(b=='global'){return}
        var r = a[b]
        if (typeof b !== 'symbol' && avoid_log.indexOf(b) == -1){
          v_console_log('  [*] ['+name+' get '+b+'] ==>', r)
        }
        if (func && typeof r == 'undefined'){
          r = func(name)
        }
        return r
      },
      set(a,b,c){
        if (typeof b !== 'symbol' && avoid_log.indexOf(b) == -1){
          v_console_log('  [*] ['+name+' set '+b+'] <--', c)
        }
        a[b] = c
        return true
      },
    })
  }
  var v_hasOwnProperty = Object.prototype.hasOwnProperty
  Object.prototype.hasOwnProperty = v_saf(function hasOwnProperty(){
    var r;
    if (this === window){ r = v_hasOwnProperty.apply(__globalThis__, arguments) }
    else{ r = v_hasOwnProperty.apply(this, arguments) }
    v_console_log('  [*] [hasOwnProperty]', this===window?window:this, [].slice.call(arguments), r)
    return r
  })
  Object.defineProperties(__globalThis__, {[Symbol.toStringTag]:{value:'Window'}})
  Object.defineProperties(__globalThis__, Object.getOwnPropertyDescriptors(window))
  Object.setPrototypeOf(__globalThis__, Object.getPrototypeOf(window))
  window.parent = window
  window.top = window
  window.frames = window
  window.self = window
  window.document = v_proxy(v_new(HTMLDocument), "document")
  window.location = v_proxy(v_new(Location), "location")
  window.history = v_proxy(v_new(History), "history")
  window.navigator = v_proxy(v_new(Navigator), "navigator")
  window.screen = v_proxy(v_new(Screen), "screen")
  window.clientInformation = navigator
  window.performance = v_proxy(v_new(Performance), "performance")
  window.crypto = v_proxy(v_new(Crypto), "crypto")
  window.sessionStorage = v_proxy(v_new(Storage), "sessionStorage")
  window.localStorage = v_proxy(v_new(Storage), "localStorage")
  window._waf_body_copy = v_proxy(v_new(HTMLBodyElement), "_waf_body_copy")

  var win = {
    window: window,
    frames: window,
    parent: window,
    self: window,
    top: window,
  }
  function v_repair_this(){
    win = {
      window: __globalThis__,
      frames: __globalThis__,
      parent: __globalThis__,
      self: __globalThis__,
      top: __globalThis__,
    }
  }
  Object.defineProperties(window, {
    window: {get:function(){return win.window},set:function(e){return true}},
    frames: {get:function(){return win.frames},set:function(e){return true}},
    parent: {get:function(){return win.parent},set:function(e){return true}},
    self:   {get:function(){return win.self},  set:function(e){return true}},
    top:    {get:function(){return win.top},   set:function(e){return true}},
  })

  function _createElement(name){
    var htmlmap = {"HTMLElement":["abbr","address","article","aside","b","bdi","bdo","cite","code","dd","dfn","dt","em","figcaption","figure","footer","header","hgroup","i","kbd","main","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],"HTMLAnchorElement":["a"],"HTMLImageElement":["img"],"HTMLFontElement":["font"],"HTMLOutputElement":["output"],"HTMLAreaElement":["area"],"HTMLInputElement":["input"],"HTMLFormElement":["form"],"HTMLParagraphElement":["p"],"HTMLAudioElement":["audio"],"HTMLLabelElement":["label"],"HTMLFrameElement":["frame"],"HTMLParamElement":["param"],"HTMLBaseElement":["base"],"HTMLLegendElement":["legend"],"HTMLFrameSetElement":["frameset"],"HTMLPictureElement":["picture"],"HTMLBodyElement":["body"],"HTMLLIElement":["li"],"HTMLHeadingElement":["h1","h2","h3","h4","h5","h6"],"HTMLPreElement":["listing","pre","xmp"],"HTMLBRElement":["br"],"HTMLLinkElement":["link"],"HTMLHeadElement":["head"],"HTMLProgressElement":["progress"],"HTMLButtonElement":["button"],"HTMLMapElement":["map"],"HTMLHRElement":["hr"],"HTMLQuoteElement":["blockquote","q"],"HTMLCanvasElement":["canvas"],"HTMLMarqueeElement":["marquee"],"HTMLHtmlElement":["html"],"HTMLScriptElement":["script"],"HTMLDataElement":["data"],"HTMLMediaElement":[],"HTMLIFrameElement":["iframe"],"HTMLTimeElement":["time"],"HTMLDataListElement":["datalist"],"HTMLMenuElement":["menu"],"HTMLSelectElement":["select"],"HTMLTitleElement":["title"],"HTMLDetailsElement":["details"],"HTMLMetaElement":["meta"],"HTMLSlotElement":["slot"],"HTMLTableRowElement":["tr"],"HTMLDialogElement":["dialog"],"HTMLMeterElement":["meter"],"HTMLSourceElement":["source"],"HTMLTableSectionElement":["thead","tbody","tfoot"],"HTMLDirectoryElement":["dir"],"HTMLModElement":["del","ins"],"HTMLSpanElement":["span"],"HTMLTemplateElement":["template"],"HTMLDivElement":["div"],"HTMLObjectElement":["object"],"HTMLStyleElement":["style"],"HTMLTextAreaElement":["textarea"],"HTMLDListElement":["dl"],"HTMLOListElement":["ol"],"HTMLTableCaptionElement":["caption"],"HTMLTrackElement":["track"],"HTMLEmbedElement":["embed"],"HTMLOptGroupElement":["optgroup"],"HTMLTableCellElement":["th","td"],"HTMLUListElement":["ul"],"HTMLFieldSetElement":["fieldset"],"HTMLOptionElement":["option"],"HTMLTableColElement":["col","colgroup"],"HTMLUnknownElement":[],"HTMLTableElement":["table"],"HTMLVideoElement":["video"]}
    var ret, htmlmapkeys = Object.keys(htmlmap)
    name = name.toLocaleLowerCase()
    for (var i = 0; i < htmlmapkeys.length; i++) {
      if (htmlmap[htmlmapkeys[i]].indexOf(name) != -1){
        if (!window[htmlmapkeys[i]]){
          break
        }
        ret = v_new(window[htmlmapkeys[i]])
        break
      }
    }
    if (!ret){ ret = v_proxy(v_new(HTMLUnknownElement), 'HTMLUnknownElement', function(a){return function(){v_console_log(a,...arguments)}}) }
    if (typeof CSSStyleDeclaration != 'undefined') { ret.v_style = v_proxy(v_new(CSSStyleDeclaration), 'style') }
    ret.v_tagName = name.toUpperCase()
    return ret
  }
  function init_cookie(cookie){
    var cache = (cookie || "").trim();
    if (!cache){
      cache = ''
    }else if (cache.charAt(cache.length-1) != ';'){
      cache += '; '
    }else{
      cache += ' '
    }
    Object.defineProperty(Document.prototype, 'cookie', {
      get: function() {
        var r = cache.slice(0,cache.length-2);
        v_console_log('  [*] document -> cookie[get]', r)
        return r
      },
      set: function(c) {
        v_console_log('  [*] document -> cookie[set]', c)
        var ncookie = c.split(";")[0].split("=");
        if (!ncookie.slice(1).join('')){
          return c
        }
        var key = ncookie[0].trim()
        var val = ncookie.slice(1).join('').trim()
        var newc = key+'='+val
        var flag = false;
        var temp = cache.split("; ").map(function(a) {
          if (a.split("=")[0] === key) {
            flag = true;
            return newc;
          }
          return a;
        })
        cache = temp.join("; ");
        if (!flag) {
          cache += newc + "; ";
        }
        return cache;
      }
    });
  }
  function v_hook_href(obj, name, initurl){
    var r = Object.defineProperty(obj, 'href', {
      get: function(){
        if (!(this.protocol) && !(this.hostname)){
          r = ''
        }else{
          r = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "") + this.pathname + this.search + this.hash;
        }
        v_console_log(`  [*] ${name||obj.constructor.name} -> href[get]:`, JSON.stringify(r))
        return r
      },
      set: function(href){
        href = href.trim()
        v_console_log(`  [*] ${name||obj.constructor.name} -> href[set]:`, JSON.stringify(href))
        if (href.startsWith("http://") || href.startsWith("https://")){/*ok*/}
        else if(href.startsWith("//")){ href = (this.protocol?this.protocol:'http:') + href}
        else{ href = this.protocol+"//"+this.hostname + (this.port?":"+this.port:"") + '/' + ((href[0]=='/')?href.slice(1):href) }
        var a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
        this.protocol = a[1] ? a[1] : "";
        this.hostname = a[2] ? a[2] : "";
        this.port     = a[3] ? a[3] : "";
        this.pathname = a[4] ? a[4] : "";
        this.search   = a[5] ? a[5] : "";
        this.hash     = a[6] ? a[6] : "";
        this.host     = this.hostname + (this.port?":"+this.port:"") ;
        this.origin   = this.protocol + "//" + this.hostname + (this.port ? ":" + this.port : "");
      }
    });
    if (initurl && initurl.trim()){ var temp=v_new_toggle; v_new_toggle = true; r.href = initurl; v_new_toggle = temp; }
    return r
  }
  function v_hook_storage(){
    Storage.prototype.clear      = v_saf(function(){          v_console_log(`  [*] Storage -> clear[func]:`); var self=this;Object.keys(self).forEach(function (key) { delete self[key]; }); }, 'clear')
    Storage.prototype.getItem    = v_saf(function(key){       v_console_log(`  [*] Storage -> getItem[func]:`, key); var r = (this.hasOwnProperty(key)?String(this[key]):null); return r}, 'getItem')
    Storage.prototype.setItem    = v_saf(function(key, val){  v_console_log(`  [*] Storage -> setItem[func]:`, key, val); this[key] = (val === undefined)?null:String(val) }, 'setItem')
    Storage.prototype.key        = v_saf(function(key){       v_console_log(`  [*] Storage -> key[func]:`, key); return Object.keys(this)[key||0];} , 'key')
    Storage.prototype.removeItem = v_saf(function(key){       v_console_log(`  [*] Storage -> removeItem[func]:`, key); delete this[key];}, 'removeItem')
    Object.defineProperty(Storage.prototype, 'length', {get: function(){
      if(this===Storage.prototype){ throw TypeError('Illegal invocation') }return Object.keys(this).length
    }})
    window.sessionStorage = new Proxy(sessionStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
    window.localStorage = new Proxy(localStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
  }
  function v_init_document(){
    Document.prototype.documentElement = v_proxy(_createElement('html'), 'documentElement')
    Document.prototype.createElement = v_saf(function createElement(){ return v_proxy(_createElement(arguments[0]), 'createElement '+arguments[0]) })
    Document.prototype.getElementById = v_saf(function getElementById(name){ var r = v_getele(name, 'getElementById'); v_console_log('  [*] Document -> getElementById', name, r); return r })
    Document.prototype.querySelector = v_saf(function querySelector(name){ var r = v_getele(name, 'querySelector'); v_console_log('  [*] Document -> querySelector', name, r); return r })
    Document.prototype.getElementsByClassName = v_saf(function getElementsByClassName(name){ var r = v_geteles(name, 'getElementsByClassName'); v_console_log('  [*] Document -> getElementsByClassName', name, r); return r })
    Document.prototype.getElementsByName = v_saf(function getElementsByName(name){ var r = v_geteles(name, 'getElementsByName'); v_console_log('  [*] Document -> getElementsByName', name, r); return r })
    Document.prototype.getElementsByTagName = v_saf(function getElementsByTagName(name){ var r = v_geteles(name, 'getElementsByTagName'); v_console_log('  [*] Document -> getElementsByTagName', name, r); return r })
    Document.prototype.getElementsByTagNameNS = v_saf(function getElementsByTagNameNS(name){ var r = v_geteles(name, 'getElementsByTagNameNS'); v_console_log('  [*] Document -> getElementsByTagNameNS', name, r); return r })
    Document.prototype.querySelectorAll = v_saf(function querySelectorAll(name){ var r = v_geteles(name, 'querySelectorAll'); v_console_log('  [*] Document -> querySelectorAll', name, r); return r })
    var v_head = v_new(HTMLHeadElement)
    var v_body = v_new(HTMLBodyElement)
    Object.defineProperties(Document.prototype, {
      head: {get(){ v_console_log("  [*] Document -> head[get]", v_head);return v_proxy(v_head, 'document.head') }},
      body: {get(){ v_console_log("  [*] Document -> body[get]", v_body);return v_proxy(v_body, 'document.body') }},
    })
  }
  function v_init_canvas(){
    HTMLCanvasElement.prototype.getContext = function(){
      if (arguments[0]=='2d'){var r = v_proxy(v_new(CanvasRenderingContext2D), 'canvas2d', function(a){return function(){v_console_log(a,...arguments)}}); return r};
      if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_proxy(v_new(WebGLRenderingContext), 'webgl', function(a){return function(){v_console_log(a,...arguments)}}); r._canvas = this; return r};
      return null
    }
    HTMLCanvasElement.prototype.toDataURL = function(){return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC"}
  }
  var v_start_stamp = +new Date
  var v_fake_stamp = +new Date
  function v_init_event_target(){
    v_events = {}
    function add_event(_this, x){
      if (!v_events[x[0]]){
        v_events[x[0]] = []
      }
      v_events[x[0]].push([_this, x[1].bind(_this)])
    }
    function _mk_mouse_event(type, canBubble, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget){
      if (type == 'click'){
        var m = new v_saf(function PointerEvent(){})
        m.pointerType = "mouse"
      }else{
        var m = new v_saf(function MouseEvent(){})
      }
      m.isTrusted = true
      m.type = type
      m.canBubble = canBubble
      m.cancelable = cancelable
      m.view = view
      m.detail = detail
      m.screenX = screenX; m.movementX = screenX
      m.screenY = screenY; m.movementY = screenY
      m.clientX = clientX; m.layerX = clientX; m.offsetX = clientX; m.pageX = clientX; m.x = clientX;
      m.clientY = clientY; m.layerY = clientY; m.offsetY = clientY; m.pageY = clientY; m.y = clientY;
      m.ctrlKey = ctrlKey
      m.altKey = altKey
      m.shiftKey = shiftKey
      m.metaKey = metaKey
      m.button = button
      m.relatedTarget = relatedTarget
      return m
    }
    function make_mouse(type, x, y){
      return _mk_mouse_event(type, true, true, window, 0, 0, 0, x, y, false, false, false, false, 0, null)
    }
    function mouse_click(x, y){
      for (var i = 0; i < (v_events['click'] || []).length; i++) { v_events['click'][i][1](make_mouse('click', x, y)) }
      for (var i = 0; i < (v_events['mousedown'] || []).length; i++) { v_events['mousedown'][i][1](make_mouse('mousedown', x, y)) }
      for (var i = 0; i < (v_events['mouseup'] || []).length; i++) { v_events['mouseup'][i][1](make_mouse('mouseup', x, y)) }
    }
    var offr = Math.random()
    function make_touch(_this, type, x, y, timeStamp){
      var offx = Math.random()
      var offy = Math.random()
      var t = v_new(new v_saf(function Touch(){}))
      t = clientX = offx + x
      t = clientY = offy + y
      t = force = 1
      t = identifier = 0
      t = pageX = offx + x
      t = pageY = offy + y
      t = radiusX = 28 + offr
      t = radiusY = 28 + offr
      t = rotationAngle = 0
      t = screenX = 0
      t = screenY = 0
      var e = v_new(new v_saf(function TouchEvent(){}))
      e.isTrusted = true
      e.altKey = false
      e.bubbles = true
      e.cancelBubble = false
      e.cancelable = false
      e.changedTouches = e.targetTouches = e.touches = [t]
      e.composed = true
      e.ctrlKey = false
      e.currentTarget = null
      e.defaultPrevented = false
      e.detail = 0
      e.eventPhase = 0
      e.metaKey = false
      e.path = _this == window ? [window] : [_this, window]
      e.returnValue = true
      e.shiftKey = false
      e.sourceCapabilities = new v_saf(function InputDeviceCapabilities(){this.firesTouchEvents = true})
      e.srcElement = _this
      e.target = _this
      e.type = type
      e.timeStamp = timeStamp == undefined ? (new Date - v_start_stamp) : ((v_fake_stamp += Math.random()*20) - v_start_stamp)
      e.view = window
      e.which = 0
      return e
    }
    function make_trace(x1, y1, x2, y2){
      // 贝塞尔曲线
      function step_len(x1, y1, x2, y2){
        var ln = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
        return (ln / 10) ^ 0
      }
      var slen = step_len(x1, y1, x2, y2)
      if (slen < 3){
        return []
      }
      function factorial(x){
        for(var y = 1; x > 1;  x--) {
          y *= x
        }
        return y;
      }
      var lp = Math.random()
      var rp = Math.random()
      var xx1 = (x1 + (x2 - x1) / 12 * (4-lp*4)) ^ 0
      var yy1 = (y1 + (y2 - y1) / 12 * (8+lp*4)) ^ 0
      var xx2 = (x1 + (x2 - x1) / 12 * (8+rp*4)) ^ 0
      var yy2 = (y1 + (y2 - y1) / 12 * (4-rp*4)) ^ 0
      var points = [[x1, y1], [xx1, yy1], [xx2, yy2], [x2, y2]]
      var N = points.length
      var n = N - 1
      var traces = []
      var step = slen
      for (var T = 0; T < step+1; T++) {
        var t = T*(1/step)
        var x = 0
        var y = 0
        for (var i = 0; i < N; i++) {
          var B = factorial(n)*t**i*(1-t)**(n-i)/(factorial(i)*factorial(n-i))
          x += points[i][0]*B
          y += points[i][1]*B
        }
        traces.push([x^0, y^0])
      }
      return traces
    }
    function touch(x1, y1, x2, y2){
      if (x2 == undefined && y2 == undefined){
        x2 = x1
        y2 = y1
      }
      var traces = make_trace(x1, y1, x2, y2)
      v_console_log('traces:', traces)
      for (var i = 0; i < (v_events['touchstart'] || []).length; i++) { v_events['touchstart'][i][1](make_touch(v_events['touchstart'][i][0], 'touchstart', x1, y1)) }
      for (var j = 0; j < traces.length; j++) {
        var x = traces[j][0]
        var y = traces[j][0]
        for (var i = 0; i < (v_events['touchmove'] || []).length; i++) { v_events['touchmove'][i][1](make_touch(v_events['touchmove'][i][0], 'touchmove', x, y)) }
      }
      for (var i = 0; i < (v_events['touchend'] || []).length; i++) { v_events['touchend'][i][1](make_touch(v_events['touchend'][i][0], 'touchend', x2, y2)) }
    }
    function mouse_move(x1, y1, x2, y2){
      if (x2 == undefined && y2 == undefined){
        x2 = x1
        y2 = y1
      }
      var traces = make_trace(x1, y1, x2, y2)
      v_console_log('traces:', traces)
      for (var j = 0; j < traces.length; j++) {
        var x = traces[j][0]
        var y = traces[j][0]
        for (var i = 0; i < (v_events['mousemove'] || []).length; i++) { v_events['mousemove'][i][1](make_touch(v_events['mousemove'][i][0], 'mousemove', x, y)) }
      }
    }
    window.make_mouse = make_mouse
    window.mouse_click = mouse_click
    window.mouse_move = mouse_move
    window.touch = touch
    EventTarget.prototype.addEventListener = function(){v_console_log('  [*] EventTarget -> addEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
    EventTarget.prototype.dispatchEvent = function(){v_console_log('  [*] EventTarget -> dispatchEvent[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
    EventTarget.prototype.removeEventListener = function(){v_console_log('  [*] EventTarget -> removeEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
  }
  function v_init_Element_prototype(){
    Element.prototype.appendChild            = Element.prototype.appendChild            || v_saf(function appendChild(){v_console_log("  [*] Element -> appendChild[func]", [].slice.call(arguments));})
    Element.prototype.removeChild            = Element.prototype.removeChild            || v_saf(function removeChild(){v_console_log("  [*] Element -> removeChild[func]", [].slice.call(arguments));})
    Element.prototype.getAnimations          = Element.prototype.getAnimations          || v_saf(function getAnimations(){v_console_log("  [*] Element -> getAnimations[func]", [].slice.call(arguments));})
    Element.prototype.getAttribute           = Element.prototype.getAttribute           || v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})
    Element.prototype.getAttributeNS         = Element.prototype.getAttributeNS         || v_saf(function getAttributeNS(){v_console_log("  [*] Element -> getAttributeNS[func]", [].slice.call(arguments));})
    Element.prototype.getAttributeNames      = Element.prototype.getAttributeNames      || v_saf(function getAttributeNames(){v_console_log("  [*] Element -> getAttributeNames[func]", [].slice.call(arguments));})
    Element.prototype.getAttributeNode       = Element.prototype.getAttributeNode       || v_saf(function getAttributeNode(){v_console_log("  [*] Element -> getAttributeNode[func]", [].slice.call(arguments));})
    Element.prototype.getAttributeNodeNS     = Element.prototype.getAttributeNodeNS     || v_saf(function getAttributeNodeNS(){v_console_log("  [*] Element -> getAttributeNodeNS[func]", [].slice.call(arguments));})
    Element.prototype.getBoundingClientRect  = Element.prototype.getBoundingClientRect  || v_saf(function getBoundingClientRect(){v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));})
    Element.prototype.getClientRects         = Element.prototype.getClientRects         || v_saf(function getClientRects(){v_console_log("  [*] Element -> getClientRects[func]", [].slice.call(arguments));})
    Element.prototype.getElementsByClassName = Element.prototype.getElementsByClassName || v_saf(function getElementsByClassName(){v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments));})
    Element.prototype.getElementsByTagName   = Element.prototype.getElementsByTagName   || v_saf(function getElementsByTagName(){v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));})
    Element.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS || v_saf(function getElementsByTagNameNS(){v_console_log("  [*] Element -> getElementsByTagNameNS[func]", [].slice.call(arguments));})
    Element.prototype.getInnerHTML           = Element.prototype.getInnerHTML           || v_saf(function getInnerHTML(){v_console_log("  [*] Element -> getInnerHTML[func]", [].slice.call(arguments));})
    Element.prototype.hasAttribute           = Element.prototype.hasAttribute           || v_saf(function hasAttribute(){v_console_log("  [*] Element -> hasAttribute[func]", [].slice.call(arguments));})
    Element.prototype.hasAttributeNS         = Element.prototype.hasAttributeNS         || v_saf(function hasAttributeNS(){v_console_log("  [*] Element -> hasAttributeNS[func]", [].slice.call(arguments));})
    Element.prototype.hasAttributes          = Element.prototype.hasAttributes          || v_saf(function hasAttributes(){v_console_log("  [*] Element -> hasAttributes[func]", [].slice.call(arguments));})
    Element.prototype.hasPointerCapture      = Element.prototype.hasPointerCapture      || v_saf(function hasPointerCapture(){v_console_log("  [*] Element -> hasPointerCapture[func]", [].slice.call(arguments));})
    Element.prototype.webkitMatchesSelector  = Element.prototype.webkitMatchesSelector  || v_saf(function webkitMatchesSelector(){v_console_log("  [*] Element -> webkitMatchesSelector[func]", [].slice.call(arguments));})
  }
  function v_init_HTMLElement(){
    try{
      Object.defineProperties(HTMLElement.prototype, {
        style: {set: undefined, enumerable: true, configurable: true, get: v_saf(function style(){v_console_log("  [*] HTMLElement -> style[get]", [].slice.call(arguments)); return this.v_style })},
      })
    }catch(e){
      v_console_log(e)
    }
  }
  function v_init_DOMTokenList_prototype(){
    DOMTokenList.prototype.add = DOMTokenList.prototype.add || v_saf(function add(){v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.contains = DOMTokenList.prototype.contains || v_saf(function contains(){v_console_log("  [*] DOMTokenList -> contains[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.entries = DOMTokenList.prototype.entries || v_saf(function entries(){v_console_log("  [*] DOMTokenList -> entries[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.forEach = DOMTokenList.prototype.forEach || v_saf(function forEach(){v_console_log("  [*] DOMTokenList -> forEach[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.item = DOMTokenList.prototype.item || v_saf(function item(){v_console_log("  [*] DOMTokenList -> item[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.keys = DOMTokenList.prototype.keys || v_saf(function keys(){v_console_log("  [*] DOMTokenList -> keys[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.length = DOMTokenList.prototype.length || v_saf(function length(){v_console_log("  [*] DOMTokenList -> length[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.remove = DOMTokenList.prototype.remove || v_saf(function remove(){v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.replace = DOMTokenList.prototype.replace || v_saf(function replace(){v_console_log("  [*] DOMTokenList -> replace[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.supports = DOMTokenList.prototype.supports || v_saf(function supports(){v_console_log("  [*] DOMTokenList -> supports[func]", [].slice.call(arguments));})
    DOMTokenList.prototype.toggle = DOMTokenList.prototype.toggle || v_saf(function toggle(){v_console_log("  [*] DOMTokenList -> toggle[func]", [].slice.call(arguments));})
  }
  function v_init_CSSStyleDeclaration_prototype(){
    CSSStyleDeclaration.prototype["zoom"] = ''
    CSSStyleDeclaration.prototype["resize"] = ''
    CSSStyleDeclaration.prototype["text-rendering"] = ''
    CSSStyleDeclaration.prototype["text-align-last"] = ''
  }
  function v_init_PointerEvent_prototype(){
    PointerEvent.prototype.getCoalescedEvents = v_saf(function getCoalescedEvents(){v_console_log("  [*] PointerEvent -> getCoalescedEvents[func]", [].slice.call(arguments));})
    PointerEvent.prototype.getPredictedEvents = v_saf(function getPredictedEvents(){v_console_log("  [*] PointerEvent -> getPredictedEvents[func]", [].slice.call(arguments));})
  }
  function v_init_PerformanceTiming_prototype(){
    try{
      Object.defineProperties(PerformanceTiming.prototype, {
        connectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectEnd(){v_console_log("  [*] PerformanceTiming -> connectEnd[get]", [].slice.call(arguments));})},
        connectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectStart(){v_console_log("  [*] PerformanceTiming -> connectStart[get]", [].slice.call(arguments));})},
        domComplete: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domComplete(){v_console_log("  [*] PerformanceTiming -> domComplete[get]", [].slice.call(arguments));})},
        domContentLoadedEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventEnd(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", [].slice.call(arguments));})},
        domContentLoadedEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventStart(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventStart[get]", [].slice.call(arguments));})},
        domInteractive: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domInteractive(){v_console_log("  [*] PerformanceTiming -> domInteractive[get]", [].slice.call(arguments));})},
        domLoading: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domLoading(){v_console_log("  [*] PerformanceTiming -> domLoading[get]", [].slice.call(arguments));})},
        domainLookupEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupEnd(){v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", [].slice.call(arguments));})},
        domainLookupStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupStart(){v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", [].slice.call(arguments));})},
        fetchStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function fetchStart(){v_console_log("  [*] PerformanceTiming -> fetchStart[get]", [].slice.call(arguments));})},
        loadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventEnd(){v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", [].slice.call(arguments));})},
        loadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventStart(){v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", [].slice.call(arguments));})},
        navigationStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function navigationStart(){v_console_log("  [*] PerformanceTiming -> navigationStart[get]", [].slice.call(arguments));})},
        redirectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectEnd(){v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", [].slice.call(arguments));})},
        redirectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectStart(){v_console_log("  [*] PerformanceTiming -> redirectStart[get]", [].slice.call(arguments));})},
        requestStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function requestStart(){v_console_log("  [*] PerformanceTiming -> requestStart[get]", [].slice.call(arguments));})},
        responseEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseEnd(){v_console_log("  [*] PerformanceTiming -> responseEnd[get]", [].slice.call(arguments));})},
        responseStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseStart(){v_console_log("  [*] PerformanceTiming -> responseStart[get]", [].slice.call(arguments));})},
        secureConnectionStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function secureConnectionStart(){v_console_log("  [*] PerformanceTiming -> secureConnectionStart[get]", [].slice.call(arguments));})},
        unloadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventEnd(){v_console_log("  [*] PerformanceTiming -> unloadEventEnd[get]", [].slice.call(arguments));})},
        unloadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventStart(){v_console_log("  [*] PerformanceTiming -> unloadEventStart[get]", [].slice.call(arguments));})},
      })
    }catch(e){}
  }
  function mk_atob_btoa(r){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);return{atob:function(r){var a,e,o,h,c,i,n;for(i=r.length,c=0,n="";c<i;){do{a=t[255&r.charCodeAt(c++)]}while(c<i&&-1==a);if(-1==a)break;do{e=t[255&r.charCodeAt(c++)]}while(c<i&&-1==e);if(-1==e)break;n+=String.fromCharCode(a<<2|(48&e)>>4);do{if(61==(o=255&r.charCodeAt(c++)))return n;o=t[o]}while(c<i&&-1==o);if(-1==o)break;n+=String.fromCharCode((15&e)<<4|(60&o)>>2);do{if(61==(h=255&r.charCodeAt(c++)))return n;h=t[h]}while(c<i&&-1==h);if(-1==h)break;n+=String.fromCharCode((3&o)<<6|h)}return n},btoa:function(r){var t,e,o,h,c,i;for(o=r.length,e=0,t="";e<o;){if(h=255&r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4),t+="==";break}if(c=r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2),t+="=";break}i=r.charCodeAt(e++),t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2|(192&i)>>6),t+=a.charAt(63&i)}return t}}}
  var atob_btoa = mk_atob_btoa()
  window.btoa = window.btoa || v_saf(atob_btoa.btoa, 'btoa')
  window.atob = window.atob || v_saf(atob_btoa.atob, 'atob')
  window.postMessage = v_saf(function(){v_console_log('  [*] [postMessage]', arguments)}, 'postMessage')
  window.matchMedia = v_saf(function(){v_console_log('  [*] [matchMedia]', arguments); return v_proxy({}, 'matchMedia{}')}, 'matchMedia')

  init_cookie("cookiesu=791758443369831; u=791758443369831; device_id=2b0f93f9bc3b6b2b72fa21a6f10ddfd7; Hm_lvt_1db88642e346389874251b5a1eded6e3=1758377630,1758377679,1758378054,1758443210; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1758443379; .thumbcache_f24b8bbe5a5934237bbc0eda20c1b6e7=gD/YTYu4y8rgslWUS5UZkPvppf8ypUMd8kZfdzupGIIknu7mxnv26uo2bG604l4v87I2w0lzsfNlf8fnRoVYYw%3D%3D; ssxmod_itna=1-YqGxnQKWq7qxBADhx_xmwPQqij68jZ7DBP01Dp6xQ5DODLxnRDGdOuWOjwWDyAY8YTKzNn0kew1DBw__rDnqD80DQeDvKxu0q4M70wG_IW7tGvP3MjWGoe4QHV9R4pqR7GEqP0OT2=CV8kGxWS6UK7eDU4GnD06QieRrDYYLDBYD74G_DDeDixGm8eDStxD9DGPtP6WTZeDEDYPtxA3Di4D_BnbDmT4DGdfPx7Qa/mDD0wGpo7b_z7FCHmyTKznQ0p43BeDMWxGXWBk4BlH0PvDa2Pk6waodxB=BxBQTNOcK5zINOZn75oxche5Sxw7NBG4P2DeYqQGeWYYKBdOA5m7YVG5oWYPQ=12wwDD==_N9PqihmeNSONlEXr02QAe50mO9P2iD0CTVjw1BqGYmulGX7iQBizQGNjwqOxxD; ssxmod_itna2=1-YqGxnQKWq7qxBADhx_xmwPQqij68jZ7DBP01Dp6xQ5DODLxnRDGdOuWOjwWDyAY8YTKzNn0kewrD88ehr=s4cET3MlxWYNdN7CCfnI4D")
  v_hook_href(window.location, 'location', "https://xueqiu.com/")
  Location.prototype.toString = v_saf(function toString(){ return "https://xueqiu.com/" })
  window.alert = v_saf(function alert(){})
  v_hook_storage()
  v_init_HTMLElement()
  v_init_document()
  v_init_canvas()
  v_init_event_target()
  v_init_Element_prototype()
  v_init_DOMTokenList_prototype()
  v_init_CSSStyleDeclaration_prototype()
  v_init_PointerEvent_prototype()
  v_init_PerformanceTiming_prototype()
  window.innerWidth = 1920
  window.innerHeight = 945
  window.outerHeight = 1022
  window.outerWidth = 1910
  window.isSecureContext = true
  window.origin = location.origin
  function v_getele(name, func){
    if(name.toLocaleLowerCase() == "initstore" && func == "getElementById"){ return v_new(HTMLScriptElement) }
    if(name.toLocaleLowerCase() == "__loadable_required_chunks__" && func == "getElementById"){ return v_new(HTMLScriptElement) }
    if(name.toLocaleLowerCase() == "#app" && func == "querySelector"){ return v_new(HTMLDivElement) }
    if(name.toLocaleLowerCase() == "head" && func == "querySelector"){ return v_new(HTMLHeadElement) }
    if(name.toLocaleLowerCase() == "[data-index=\"0\"]" && func == "querySelector"){ return v_new(HTMLDivElement) }
    if(name.toLocaleLowerCase() == ".index_nav__search__result_l8q" && func == "querySelector"){ return v_new(HTMLDivElement) }
    if(name.toLocaleLowerCase() == ".undefined" && func == "querySelector"){ return v_new(HTMLDivElement) }
    return null
  }
  function v_geteles(name, func){
    if(name == "script" && func == "getElementsByTagName"){ return [v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement)] }
    if(name == "a" && func == "getElementsByTagName"){ return [v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement)] }
    if(name == "button" && func == "getElementsByTagName"){ return [v_new(HTMLButtonElement)] }
    if(name == "input" && func == "getElementsByTagName"){ return [v_new(HTMLInputElement),v_new(HTMLInputElement),v_new(HTMLInputElement),v_new(HTMLInputElement),v_new(HTMLInputElement),v_new(HTMLInputElement),v_new(HTMLInputElement),v_new(HTMLInputElement)] }
    if(name == "head" && func == "getElementsByTagName"){ return [v_new(HTMLHeadElement)] }
    if(name == ".slick-slide" && func == "querySelectorAll"){ return [v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement)] }
    return null
  }
  var v_Date = Date;
  var v_base_time = +new Date;
  (function(){
    function ftime(){
      return new v_Date() - v_base_time + v_to_time
    }
    Date = function(_Date) {
      var bind = Function.bind;
      var unbind = bind.bind(bind);
      function instantiate(constructor, args) {
        return new (unbind(constructor, null).apply(null, args));
      }
      var names = Object.getOwnPropertyNames(_Date);
      for (var i = 0; i < names.length; i++) {
        if (names[i]in Date)
          continue;
        var desc = Object.getOwnPropertyDescriptor(_Date, names[i]);
        Object.defineProperty(Date, names[i], desc);
      }
      function Date() {
        var date = instantiate(_Date, [ftime()]);
        return date;
      }
      Date.prototype = _Date.prototype
      return v_saf(Date);
    }(Date);
    Date.now = v_saf(function now(){ return ftime() })
  })();
  var v_to_time = +new v_Date
  // var v_to_time = +new v_Date('Sat Sep 03 2022 11:11:58 GMT+0800') // 自定义起始时间

  v_repair_this() // 修复 window 指向global
  v_new_toggle = false




  v_console_log = function(){} // 关闭日志输出
  // setTimeout = function(){} // 关闭定时器
  // setInterval = function(){} // 关闭定时器

  window._waf_bd8ce2ce37 = 'bjL+/tPniOQA+ED1CaEm48B8yNJ/BHmvZgRW3roIHXQ=';

  return window
})();




(function fMYfkb() {
    function Z() {
        var Mu = ['fLS2MNHW3F', 'ZoZvRAg', 'fMPxG/m', 'RGt7kXm', 'UuKGOaxS//', 'ZjPvfJW', 'SoGU1Jq', 'M4sxdX/', '9j4U/Q3', 'HGZjiJq', 'iM+4kA6', 'RLSvkJ6', 'gLssfIv', 'HyS+f8p', 'Gut1k2OHjatLXN', '1mS4d2HSQabYnN', '9EtVdA6', 'HjIoSQf', 'gHb9Spi', 'v3B/9+Hj87TC', 'kiSuiJi', '8ED51Ni', 'HEb//Bc', 'fuIF8Ag', '/WS2M8ww', 'Ovd1bSpbKhtxPS7g', 'GGrnRJX', 'SllmM+Ea3nDq', 'Hob7gAX', 'MGrOdQi', 'gsrA8JX', 'Hu+xR8i', 'hiZ4fpm', 'kLsZRFF', 'MLD8', 'kmRh8kq', 'bm40dIww6ZbCsZ', 'gWrZf/c', 'ZMR0ipv', 'flbNdQv', '8ls+ZQv', 'HuDuZNwQ6tl7JN', 'ilGv1Je', '8Hsk/Qv', 'iMbJgYe', 'fLIbM2p', 'gMrwHIF', 'HuDLfY5', 'HES/ZN0QQSsqJI', '/ylzRpi', 'GMtjZ0p', 'fuNwHZ0i6X', 'kHtr/Ym', 'HHNuHNm', 'Z4sJMQp', 'MuDKGN0R6ta', '8MsxS8F', 'fLSuH2uZO7RY7I', '1mRwM/xhtBPnnI', 'HES//N0Z6X', 'HLDS8Yhgwp', 'Mm20HkhwtKQ', 'gWbeGF3', 'Hut/Grm', 'ksSwRpf', 'iESc/I3', 'HuSKHQ0Z4ntUeZ', 'SM4/kkc', 'MoDhi0p', 'S3GDdJe', 'M441SA3', 'k3NYi8X', 'gm2f1AF', '93rgMXxW', '8ErQGkf', 'MHlsR8v', 'gLG0S2c', 'hGRo1I/', 'RulR1A3', 'flGA18F', 'GmrzSZm', 'huD8fpf', 'HMlu1/p', 'hu42S//', 'foRpgYv', 'f44WG0W', 'MuZ4/Bf', 'GuSwMC', 'Zsbokh', 'MySI1p/', '9Hl0RQ9SQ+M', 'HiN0Gw', 'g4ts1pm', 'fuD8', 'iEDOHA3', 'gmsek2v', '8H40gpv', 'hitSGYf', 'GHlFMNAmt/', 'kENw88f', 'RG4ZfBW', 'im4UGJm', 'Gyr88YF', 'HuSKHQ0Z3wB', 'HuDKdYnZ61RQ7N', '9uruMN9QKrl+oZ', '/L4Ki0c', 'SLtzSBm', 'fLSgHBhgtX', 'H4r3iNp', 'hHRFS23', 'gWtLR03', 'hHr4d+A+Q1t7NI', 'ZHrs8pg', '9jNriIF', 'MjDNR8g', 'Sj+W/I0QQCtYXI', 'gWsniAf', 'SW2cZJ5', 'hy+Ui/p', 'MMsWdNv', '8GG58QF', '94GZGFi', 'GGtvZShn0rQTz2', 'iGZx8kX', '/E4wMA6', 'f34jdBxQ07bY', 'iED4RQxMtX', '9W29ZJp', '/GG8MNp', 'ZjtUgI6', 'M4NW1Y6', 'ilsWHY9k6CB', 'hy48MIg', 'io+/SBe', 'Z4411QX', 'g4Gsk0X', 'HHl/', 'fLt4MBxG', 'HyNW1N3', 'HLrkdIc', 'flN5RIg', '9ORE3+/RkF', 'kySp', 'HuStdYv', 'imGwG8X', 'hj+SSB3', 'kHlNiAq', 'GW2WkBm', 'fmZSiYL/wrST', 'Riogbri6ZBMpAZ', 'fmSgZY3', 'HENhi0e', 'gGsh1Q6', 'jlBbhN5wFnNGXZ', 'imGcf8X', 'R3NOZ86', 'ME+gHQLZ61d', 'MEI2ZZ6', '9uS1dC', 'bvQgvrcU3wB', 'kjlsRBi', 'fsN/8/g', 'dvRiUNX6FBjcYN', 'R3GZG2f', 'kjSF1AW', 'HyPsG/f', 'huGh/Ff', 'GoI2/JW', 'hybhiY3', 'MHGJ/Jv', 'fsbjZ/g', 'kH+RkFf', 'MitK8/i', 'Rura/8W', 'GosFRZi', 'Gs2LdF/', 'fLS/dNHH1aRPrI', '9uDadIHR6S8', '/M478AwAb6PUP2', 'kibFS2c', 'M4ZJkp3', 'HErC826', 'SGZxMJq', 'GWGK/Yv', '1lD8MYH8QSspnI', '8EPtMAm', '8LIkiYg', 'M3tKdYX', '/WbrdAv', 'ZW4FiZg', 'gG42f/m', 'MsZkkFi', 'huZYGkv', 'hmGCMYX', 'GM+V1pv', 'S34XiNc', 'gmZjR8h/tX', 'fmStR20w', 'hMtOGXm', 'iED4M8C/27t7q2', 'fm2wdQW', 'HWNFR8C0t7tHrI', 'iEtKiBwW', 'g3RSi03', 'iHD+dY6', 'HH+OdC', '8uPBfXp', '/yGvk0e', '1lD4iYOd2+l7X2', 'HH+0HZF', 'Rusf/J3', 'ME4bMY9Q', 'iED4R20w2r2I7Z', 'kWrr1kf', 'g4txgNF', 'Gmb3/NF', '8oNwfBi', 'Zo+3dkf', 'f34jdBxg6tT', '9Ebo1p3', '/obj/Nm', 'HuSE4Iq', 'HLS/GQp', '9stvd05', 'HuDKdYnZ61d', 'MWsuSp3', 'GyI9gBf', '8i4DiQi', 'iMS2GZ6', 'HW4jHJ9dK7tw7Z', 'M3R/dY6', 'MHlzRBi', 'h3SPMFF', 've1kUS/K8QSgn+zVQlP', 'viBS9+0j8KT+', '9ssakFv', 'RLso1Qq', 'HHlKHQ0Z3wB', 'fm23iNF', 'MLsfHYW', 'fsD1G2HRQaRHn2', 'MLSfdAC83F', 'v5M8btpbZ1PKLwy23f', 'bV2FMYH2ttZYX2', 'giRZiZf', 've18bSOgv+GAx6+', 'ZsZCiN/', typeof Ms === [] + [][[]] ? 'SG2ARIp' : Ms(), 'MuRffJF', '8ybVfkF', 'HGNw8Xf', 'gHtL1Yf', 'ZMGxg8F', '1EZ9SQC/', 'RHbggJf', 'ied8bh', 'v3Bh9+9jZKTc', 'HjSpdI6', 'Hi4SH2i', 'RMNn8J6', 'fut/iBLS6rM', 'fEIOGQ6', 'HHlkHYwwKrtsnI', 'gHPDRAv', 'iHDzGJF', 'gMDtdAF', 'HsSIdAp', 'vWB19+hj8aTIYN', 'h4b+R/3', '13PThI9ojwyesZ', 'OibgHXux4/', 'gEI88Yf', 'SWGr8Qq', '94sRHFi', 'OWB99+AjZ7TIYN', '1mRwM/xd6tIx', '1mRwM/xSkBSNn2', 'kMlwS0m', 'ZmR8kp6', 'gLSQ8NAK', 'iED8GFv', '9ssSi8F', 'iEDjiQCZQ6GWqI', '8Lscdkv', '93RKiN/', '/GSsiZf', 'H4so1Yp', 'HES/', 'fEDIiIm', 'fMb9/Nv', 'iG2xiJX', 'RsbjS0q', 'Z328MY5', 'MH+RdI3', 'fErQGQAM', 'guPU1Qe', 'iED4GQhQ', '/yRu/Qf', 'fmZwGQVYQS4nnI', 'kut/Mn', '/yG8d26', '/mSjRJm', 'MoZ9k83', 'SElwdBC0tNbn7Z', 'HES/1BCGtX', 'SjGBi85', 'fES//N0Z6X', '1mRwM/xS8827pN', 'gHls8Qe', 'RMb+1pp', 'viBg', 'fuIokBg', '9WbkHQm', 'HLIjH2i', 'Myb88Av', 'MHS/iBx8', 'OWBk9+Hj8KTIYN', 'gut0/Jf', 'iWr/MJJZ6SZIrN', 'HstpdZm', 'GHZcR8wkw7PH', 'G340Mh', 'iEt3HpkdKr+I7Z', 'Sirc/8F', 'MH8khFe', 'SL++88W', 'gyN7d8e', 'GuPORB5', '9iS9MF3', 'gmZSiYL/', '8WGrMpg', 'g4RuSZv', 'hotcgYf', 'Hi4/fn', 'ZLDnZF/', 'iENwRkhQ', '8oro/pf', 'fsSDRAi', 'fES/1BCGtrIBJN', '9ERBHBW', '1m2vGYLQ6ty', '8lNZdQe', 'MHtg', 'fmZjR8h/tX', 'iHb8h29g3wINNI', 'Ml2gS/F', '/ysxGYe', 'gLNRHAe', '83NUZQq', 'Sjb4RNg', 'HWS4G20R6tarX2', 'fyDuiBi', 'H3tJ/2m', 'MjGs8Qe', '1lD2fB0ww7SYX2', 'MLNaiQe', 'GH4tSQq', 'vLb0btv', 'fHDCRJv', 'Zys0k0c', 'Mm2hRZ9Q27SANN', '934kMn', '/EIOMYLQ47Rz7N', '8MP8R05', 'RoR7RY3', '/LNUSpc', 'fHtfSkm', 'ZuZK8Am', 'ZoSa/23', 'g3sVf8W', '8Ht/iC', 'kWrgGYX', 'ZiNOHkX', 'im40GN0ZbrDY7I', '8HDVR/f', 'O3Bg9+Hj87TC', '9EStMIHR2SGc', 'iH+DiQv', '9ENV/8X', 'GLDOHh', 'fM4FdQf', '9MSWHAi', 'kmt1kYf', 'HlN3kpi', 'hHSASZ/', 'gHsY1pg', 'Gi2KiN0b3wB', '14PmhrJs0QQsYI', 'vfK8btv0Z82/Xr8Cvs4', 've1kbtv6Z1ZWn6Mw25', 'Mut1dN0iQ+SPJ2', '9HS1dC', 'SMSgdkm', '9uI8iQ3', 'vvKSbtF2Z88DII', 'MyI+1Ip', '9m4od//', 'fmZwGQ5', 'H4DFbr66ZB8+AI', '9jSnGXg', 'fES4MAHitao', 'fyN0dA3', 'fLla885', 'MHt/GQp', 'MLtuMn', 'iH4KMBwk', 'Mm201Xg', 'GHlOdC', 'fsG3g8q', 'GEP/dYg', 'HiSv1YF', '/M4/SZ/', 'veYhUtAgK8KcpN', '8uruiNF', 'S4bP8Ac', 'ki2kZJX', 'Zo47SJf', '9uDARIkZQg27XZ', 'vf2ibNXwFBblIN', 'Mm4O88wQKtz', '14bE3/J4', 'iysfiQW', '8E4bMY9Q', '832380e', 'io47kXp', '9yNNHZv', 'iHlFHQqdhNbVcN', 'ZWNkGN3', '84Sogpf', 'MLtZiYOS2+Ic', '8mrUHZF', 'GESrRXf', 'kGZX/Yi', 'hGGBgpCxKrtnnN', 'MMrsZZv', 'glGYZYLR6r4InI', 'HMsCRXp', 'SMtaMZF', 'kltkiXg', 'gjsIM8p', '8LGQ12i', 'iLDFfn', '1mZ0R20y6t277N', 'fyrOSZi', 'hMssHYW', 'hyGFHkq', 'fESwR89d', '1lTgbBiw8BRYII', 'S3sh/Jc', 'S3RDZZm', 'HMbN/0W', '1u4ThIOogQrGaI', '9HRNdF3', 'fo4kdBe', 'iLIjGSm', 'fut/iC', 'f3S1iC', 'GurIG0p', 'iEt3HC', '9uDWH2OZQg27XZ', 'futSRQwD61d', 'ksSU8/g', 'hMPC1QW', 'hMZVk0p', 'iHIOfNwH3KZ7n2', 'gHRA1Ii', 'MuDKGYJq2+IcqI', 'hGrPZ/f', '83twkJ3', 'flGCGk6', 'S3r+8km6OhSsx2', 'SiNKgZm', 'uubFGFxSQtRen2', 'kLIPikg', 'HuUkMSi', 'HEsO8/c', 'fGZu82g', 'v3Bh9+Hj8KTI', 'ZGZkSI3', '1mRwM/xwtrDLqI', 'gWShMI3', 'MHlZM/v', 'ZlRn/Nv', 'f3GJ8/f', 'HuS2iYLZjatLXN', 'MjNUkB3', 'HMlcHQc', 'GsNaR0m', 'iM+8kJp', '9mr8/Jg', 'RjGrSBf', 'GiRtiYv', 'GHN5RAW', 'guPZZ8g', 'fuDSdC', 'MuZcfXm', 'HurZ', 'vftivNX0FBd', '/Gs5/Am', 'hLIOi0W', 'hENQfX3', 'SiZCG0X', 'hGtnRXF', 'ZEDg8Ye', 'kyrakZF', '/H47/kW', 'uEbvGNHc6tRYeI', 'HuStdYO/t7K', 'iENwRk9it+GKJN', 'GES9Rw', 'SjsL12v', 'HHlKHQ0Z4ntUeZ', 'fmStR20wwr+J', '8ssFH2v', '8HlDRJ5', 'gi23GZ6', 'GubpZY5', 'Gut1iC', '9Hr4i8p', 'bvryutq', 'gHNX/Ap', 'HLrSR20cw+ssnN', 'ZlNt8Ip', 'Mm4U1Ym', '/l2zM8W', 'iErkGkF', 'hLb2dJq', 'iLI0MC', '9uruMXxW', '/sSFi2c', 'RsSXR/p', 'MyIoSkf', 'hyD3fXf', 'MuS4M20d', 'MyNV/Zf', 'MmbwfBq', 'fEG9HZv', 'HyZK1kv', '93NoS2i', 'RHNg/Nc', 'ZyILkkx7jnthLN', 'k4ra8J5', 'GuD1dBLS6rM', 'My+W1km', 'HHGQiBC9wtDo72', 'ioIIiQf', 'HEDpk8F', 'vmBg9+0j87Tc', 'GuD1dC', 'GMr9fZg', 'kjb9S8g', 'HytRiN3', 'imZ1M2F', 'kEr8k2F', '9LRB8Xc', 'vfKhvr3Q8gRjx1a+u5', 'GHl4MNHT4cl4', 'MGbD8IF', 'iy+pG2m', 'GHD4', 'vf8SfZHr274c', 'HlZX//c', 'hWGOZNc', '9Wshk2f', 'HLr3dBww', 'GHlgdNF', 'GuSRgN6'];
        j = [];
        ;Z = function() {
            return Mu;
        }
        ;
        return Z();
    }
    var j;
    var pGPvfi = 0x6e7c95b - 4162487067;
    function Y(X) {
        var Z = X['length'] & -0x3 * -0xa9f + -0x1381 + -0xc59
          , u = X['length'] - Z
          , E = -0x213f6b * 0x1 + -0x35cbb41 + 0x644c431 * 0x1
          , s = 0xda496089 + 0x500e04 * 0x6f + -0x306146f4
          , j = -0x522c1 * -0x752 + -0x12376e14 + 0x8263ad5
          , R = 0x13ce + 0xfeb * 0x1 + 0x1f * -0x127;
        while (R < u) {
            var g = X['charCodeAt'](R) & 0x2 * -0x259 + -0x1124 + 0x16d5 | (X['charCodeAt'](++R) & -0x677 + -0x25fa + 0x2d70) << 0x2 * -0x4a8 + -0x45d * 0x5 + 0x1f29 | (X['charCodeAt'](++R) & -0x699 * -0x1 + -0x95 + 0x5 * -0x101) << -0x1 * 0x1ff7 + -0x16 * -0x124 + 0x163 * 0x5 | (X['charCodeAt'](++R) & -0x1 * -0x24f2 + 0x3c * -0x7f + -0x62f) << -0x17b3 + -0x1 * 0x25e8 + 0x3db3;
            ++R,
            g = (g & -0xfb23 + -0x1f * 0x45a + 0xa082 * 0x4) * s + (((g >>> 0x2078 + 0x173b + -0x1 * 0x37a3) * s & 0x2251 * -0x7 + -0x10b6a + 0x2fba0) << 0xf6 + -0x21c + 0x136) & 0xd5292117 + 0x3ec4b8b * -0x41 + 0x129d60d33,
            g = g << 0x2 * -0x67a + -0x1b * 0xde + 0x246d | g >>> 0xb35 * 0x3 + 0x251b + -0x46a9,
            g = (g & 0xb290 * -0x1 + -0x12d6f + -0x1 * -0x2dffe) * j + (((g >>> 0x17 * -0x173 + 0x2 * -0x340 + -0x1 * -0x27e5) * j & 0x9400 + 0x12308 + 0x3 * -0x3d03) << 0x19e7 + -0x1 * 0x56c + -0x146b) & 0x11e48ccfb + 0x8b * 0x33be535 + -0x1ed6d * 0xf8ef,
            E ^= g,
            E = E << -0x1 * 0x2523 + -0x4ad + 0x29dd | E >>> -0x1759 * 0x1 + -0x1e5c + 0x2 * 0x1ae4,
            E = E * (-0xb * -0x2f5 + 0x1922 + 0x22 * -0x1b2) + (-0x92782d16 + -0x196146ec6 + 0x30ee10740) & 0x51e0b2f4 + -0x146386af3 + -0xfa2bdbff * -0x2;
        }
        var M = 0x1 * -0x2674 + 0xb05 * -0x1 + 0x3179;
        switch (Z) {
        case -0x18a8 + 0x268 * 0x9 + -0x3 * -0x101:
            M ^= (X['charCodeAt'](R + (0x23d7 + 0x1212 + 0x1 * -0x35e7)) & 0x7a5 + -0x18c7 + -0x15 * -0xdd) << 0x1 * -0x17a7 + -0x15f + 0x1916;
        case 0x1 * 0x16a1 + -0x133 * 0x12 + -0x109 * 0x1:
            M ^= (X['charCodeAt'](R + (0x1c17 + -0x5 * -0xee + 0x14 * -0x1a3)) & -0x20a7 + 0x1db7 + -0x1 * -0x3ef) << 0xc * -0x9e + -0x2045 + 0x27b5;
        case -0x139d * -0x1 + -0xc7 * -0xf + -0x1f45:
            M ^= X['charCodeAt'](R) & 0xb95 + 0x7ad + 0x1 * -0x1243,
            M = (M & -0x9 * -0x1a9d + -0x4 * -0x41b + 0xe) * s + (((M >>> -0x1 * -0x337 + -0x26c2 + 0x239b) * s & 0x1dd3e + -0x15daa + 0x19 * 0x523) << 0x289 * 0xa + 0x3 * -0x82f + -0x1 * 0xbd) & -0x13e10f173 + 0x85831f48 + 0x1b88dd22a,
            M = M << -0x1636 + -0x8a1 * -0x1 + -0x4 * -0x369 | M >>> 0x2 * -0xafd + 0x217 * -0x3 + 0x1c50,
            M = (M & -0x1b4ad + 0x169b8 + -0x4 * -0x52bd) * j + (((M >>> -0x83 * -0x1d + -0xaae * 0x2 + 0x1 * 0x695) * j & -0x1 * 0x1cde8 + -0x5e77 + 0x32c5e) << 0x139e + 0x2c * 0x3a + -0x1d86 * 0x1) & -0x9f28d * 0x1010 + -0x1 * 0xc4ca599f + -0x326 * -0xc2904d,
            E ^= M;
        }
        return E ^= X['length'],
        E ^= E >>> -0x17e * 0x14 + -0x1 * -0xf1 + -0x1 * -0x1cf7,
        E = (E & -0xe6db + -0x519d + 0xb3 * 0x32d) * (-0x80de0182 * 0x1 + -0x9949c74f * 0x1 + 0x880904 * 0x30f) + (((E >>> -0x2 * 0x5ba + 0x1571 + -0x9ed) * (0x94424fb3 + -0x6 * -0x28308ba2 + -0xff79cb14) & -0xf497 + -0x54d5 + -0x2496b * -0x1) << -0x25 * -0x1 + 0x598 + -0x5ad) & -0xb7ab9 * 0x23cf + -0x3a7 * -0x78d2cd + 0xe1c59bdb,
        E ^= E >>> 0x70c + 0x9 * -0x1e7 + 0x12 * 0x90,
        E = (E & 0x15cee + 0x15 * -0x153b + -0xb8 * -0x1eb) * (-0x79bd980d + 0x76a9 * -0x58d + 0x1 * 0x13f02ee57) + (((E >>> -0x1 * -0x1b59 + 0xaba + -0x2603) * (0xbb3 * 0x65a89 + -0xd0465db0 + 0x148a3db1a) & -0x61da + 0x194bf + -0x2 * 0x1973) << 0x2064 + 0xb * 0x79 + -0x2587) & 0xeb86f5c * 0x2 + -0x142fc21cb + -0x112c5a189 * -0x2,
        E ^= E >>> -0x12bf * 0x2 + -0x25 * 0x65 + 0x3427,
        E >>> 0x243c + 0x25ca + -0x4a06;
    }
    var ME;
    function Mi(X, Z, u) {
        try {
            var E = X['indexOf']('0x' + u['toString'](-0x7bc + 0x1d91 + -0x1 * 0x15c5));
            var i = X['indexOf']('-', E)
              , s = X['indexOf'](';', i)
              , j = X['substring'](0x1 * -0x216 + -0xcf3 + 0x1 * 0xf09, E)
              , R = X['substring'](i + (-0xe4e + 0xf71 * -0x1 + -0x440 * -0x7), s)['trim']()
              , M = X['substring'](s + (-0x1 * 0x1273 + -0x121d * -0x1 + 0x57))
              , g = Y(j + M + typeof window[Z]);
            return g - R;
        } catch (y) {
            return -(-0x974 + 0xa1e + 0x9 * 0x7);
        }
    }
    function Ms() {
        return ME = 997,
        'SG2ARIp';
    }
    function u(Y, E) {
        var i = Z();
        return u = function(s, R) {
            s = s - (-0x3 * -0xa9f + -0x1381 + -0xb8a);
            var M = i[s];
            if (u['mKowRs'] === undefined) {
                function m() {
                    var V = Math['pow'](-0xea * 0x1 + -0x17a7 + 0x1893 * 0x1, 0x14d6 + 0x6a * 0x8 + -0x1807) - (-0x1aad * -0x1 + -0xced + -0xdbf)
                      , b = 0xbf2f + 0x4cd7 * 0x2 + 0x39 * -0x2be
                      , Q = 0x2 * -0x259 + -0x1124 + 0x15d6;
                    var w = j[j['length'] - (-0xa5c + -0x25fa + 0x2c72 + ME)] % V;
                    function I() {
                        return w = (b * w + Q) % V,
                        w;
                    }
                    return function() {
                        return I() % (0x2 * -0x4a8 + -0x45d * 0x5 + 0x1b7c + ME);
                    }
                    ;
                }
                var g = function(V) {
                    var b = 'vObU3u4j6wtKF02Qf9RdiHGMghS1/kZ8exPzWLsoqnr7XJNY5VDTmElycC+apAIB=';
                    var Q = ''
                      , w = ''
                      , I = m();
                    I();
                    for (var z = -0x699 * -0x1 + -0x47a + 0x23 * -0x2c + ME, f, x, H = -0x1 * 0x1ff7 + -0x16 * -0x124 + 0x6df * 0x1; x = V['charAt'](H++); ~x && (f = z % (-0x1 * -0x24f2 + 0x3c * -0x7f + -0xb0f + ME) ? f * (-0x17b3 + -0x1 * 0x25e8 + 0x3ddb) + x : x,
                    z++ % (-0x1329 + -0x11 * 0x9b + 0xebc * 0x2)) ? Q += String['fromCharCode'](0x1c93 + 0x173b + -0x2 * 0x1b5a + ME & f >> (-(0x30e * -0x6 + -0x1467 + 0x26bd) * z & 0xf6 + -0x21c + 0x12c)) : 0xc5f + 0x125 * -0x11 + 0x331 + ME) {
                        x = b['indexOf'](x) ^ I();
                    }
                    for (var v = 0x2 * -0x67a + -0x1b * 0xde + 0x2079 + ME, F = Q['length']; v < F; v++) {
                        w += '%' + ('00' + Q['charCodeAt'](v)['toString'](0xb35 * 0x3 + 0x2136 + -0x46aa + ME))['slice'](-(0xda0 * -0x1 + -0x1ae5 + -0x2 * -0x1251 + ME));
                    }
                    return decodeURIComponent(w);
                };
                u['IxqnWO'] = g,
                Y = arguments,
                u['mKowRs'] = !![];
            }
            var y = i[0x17 * -0x173 + 0x2 * -0x340 + -0x1 * -0x27d5]
              , A = s + y
              , h = Y[A];
            return !h ? (M = u['IxqnWO'](M),
            Y[A] = M) : M = h,
            M;
        }
        ,
        u(Y, E);
    }
    (function(R, M) {
        try {
            var Za = {
                R: 0x295,
                M: 0x198,
                g: 0x1b8,
                y: 0x292,
                A: 0x2ae,
                h: 0x193,
                m: 0xec,
                V: 0xed,
                b: 0x289
            }
              , XS = u
              , g = R();
            j.push(175);
            while (!![]) {
                try {
                    var y = parseInt(XS(Za.R)) / (0x1f3 * 0x11 + 0x8 * -0xeb + -0x19ca) * (-parseInt(XS(Za.M)) / (-0x7e * 0xb + 0x220b + -0x1c9f)) + parseInt(XS(Za.g)) / (0x9 * -0x11b + 0x67 * 0x4a + 0x13d0 * -0x1) + parseInt(XS(Za.y)) / (-0x3af + 0x2 * -0xe99 + -0x4 * -0x740 + ME) + -parseInt(XS(Za.A)) / (0x1304 * -0x1 + 0x802 + -0xb07 * -0x1) * (-parseInt(XS(Za.h)) / (0x85b + 0x5de + -0xe33)) + -parseInt(XS(Za.m)) / (0x14ea * -0x1 + 0x13b1 + -0x2a5 + ME) + parseInt(XS(Za.V)) / (0x1d9b + -0x5af * -0x3 + -0x3285 + ME) + parseInt(XS(Za.b)) / (0x191 * 0x3 + -0x84a + 0x45 * -0x1 + ME);
                    if (y === M)
                        break;
                    else
                        g['push'](g['shift']());
                } catch (A) {
                    g['push'](g['shift']());
                }
            }
        } finally {
            j.pop();
        }
    }(Z, 0x1 * -0x1aea09 + -0x2454 + 0x2912cc),
    !(function() {
        'use strict';
        try {
            j.push(175);
            var MZ = {
                R: 0x273,
                M: 0x250,
                g: 0x138,
                y: 0x122,
                A: 0x264,
                h: 0x293,
                m: 0x1c3,
                V: 0x162,
                b: 0x22d,
                Q: 0x163,
                w: 0x2ad,
                I: 0x239,
                z: 0x10c,
                f: 0x12b,
                x: 0xeb,
                H: 0x1ba,
                v: 0x127,
                F: 0x23f,
                p: 0x2ab,
                e: 0x2fe,
                k: 0x112,
                G: 0x2cf,
                J: 0x27d,
                d: 0x158,
                n: 0x1a3,
                S: 0x1de,
                c: 0x12e,
                W: 0x2dc,
                l: 0x2d6,
                t: 0x18b,
                r: 0x1b2,
                N: 0xf2,
                o: 0xfd,
                O: 0x140,
                T: 0xee,
                C: 0x223,
                P: 0x2e0,
                D: 0x26a,
                U: 0x291,
                K: 0x2b2,
                q: 0x2a0,
                B: 0xf5,
                a: 0xe0,
                L: 0x28a,
                X0: 0x2f8,
                X1: 0x2c6,
                X2: 0x10a,
                X3: 0x242,
                X4: 0x159,
                X5: 0x104,
                X6: 0x22e,
                X7: 0x2bf,
                X8: 0x1f6,
                X9: 0xdf,
                XX: 0x1d9,
                XY: 0x305,
                XZ: 0x2b4,
                Xu: 0x142,
                XE: 0x29d,
                Xi: 0x309,
                Xs: 0x2d3,
                Xj: 0x29f,
                XR: 0x145,
                XM: 0x252,
                Xg: 0x184,
                Xy: 0x119,
                XA: 0x188,
                Xh: 0x308,
                Xm: 0x235,
                XV: 0x16f,
                Xb: 0x1e8,
                XQ: 0x19f,
                Xw: 0xea,
                XI: 0x2e4,
                Xz: 0x206,
                Xf: 0x28d,
                Xx: 0x178,
                XH: 0x208,
                Xv: 0x21d,
                XF: 0x2d2,
                Xp: 0x1da,
                Xe: 0x21d,
                Xk: 0x1d8,
                XG: 0xda,
                XJ: 0x229,
                Xd: 0x1f7,
                Xn: 0x234,
                Mu: 0x1d0,
                ME: 0x28e,
                Mi: 0x280,
                Ms: 0x148,
                Mj: 0x1e3,
                MR: 0x278,
                MM: 0xd3,
                Mg: 0x137,
                My: 0xf4,
                MA: 0x189,
                Mh: 0x24f,
                Mm: 0x16b,
                MV: 0x2e9,
                Mb: 0x285,
                MQ: 0x167,
                Mw: 0x23c,
                MI: 0xf3,
                Mz: 0x17d,
                Mf: 0x2dd,
                Mx: 0x13e
            }
              , MY = {
                R: 0x147,
                M: 0xf6,
                g: 0x1a7,
                y: 0x2be,
                A: 0x1f7,
                h: 0x234,
                m: 0x1f8,
                V: 0x1d1,
                b: 0x2a2
            }
              , MX = {
                R: 0x1e4,
                M: 0x28e,
                g: 0x1f7,
                y: 0x234,
                A: 0x29c,
                h: 0x17d,
                m: 0x130,
                V: 0x2fd,
                b: 0x201,
                Q: 0x1f5,
                w: 0x1f7,
                I: 0x234,
                z: 0xda,
                f: 0x229,
                x: 0x2fc
            }
              , M8 = {
                R: 0x154
            }
              , M7 = {
                R: 0x2f2,
                M: 0x21a
            }
              , M6 = {
                R: 0x29c
            }
              , M5 = {
                R: 0x1d9,
                M: 0x305,
                g: 0x1e2,
                y: 0x2eb,
                A: 0x2b0,
                h: 0x157,
                m: 0x305,
                V: 0x2b4,
                b: 0x142,
                Q: 0x2cb,
                w: 0x2d0,
                I: 0xd5,
                z: 0x1a0,
                f: 0x2d7,
                x: 0x2b4,
                H: 0x237,
                v: 0x2d7,
                F: 0x2b4,
                p: 0x142,
                e: 0x1dc,
                k: 0x213,
                G: 0xef,
                J: 0x2b3,
                d: 0x153,
                n: 0xf8,
                S: 0x19d,
                c: 0xff,
                W: 0x27e,
                l: 0x2b3,
                t: 0xf0,
                r: 0xff,
                N: 0x121,
                o: 0xff,
                O: 0x2db,
                T: 0x10b,
                C: 0x277,
                P: 0x298,
                D: 0x2c3,
                U: 0x1d6,
                K: 0x2e1,
                q: 0x18c,
                B: 0x182,
                a: 0x1b9,
                L: 0x227,
                X0: 0x17e,
                X1: 0x121,
                X2: 0x194,
                X3: 0x194,
                X4: 0x1fa,
                X5: 0x16a,
                X6: 0x1d6,
                X7: 0x2e1,
                X8: 0x296,
                X9: 0x2e1,
                XX: 0x1b0
            }
              , M4 = {
                R: 0x117,
                M: 0x28e,
                g: 0x232,
                y: 0x10d,
                A: 0x167,
                h: 0x23c,
                m: 0x187,
                V: 0x2a1,
                b: 0x22b,
                Q: 0x1d9,
                w: 0x305,
                I: 0x154,
                z: 0x1b0,
                f: 0x133,
                x: 0x21b,
                H: 0x1f5,
                v: 0x23d,
                F: 0xe2,
                p: 0x146,
                e: 0x2bb,
                k: 0x2cb,
                G: 0x2d0,
                J: 0x1d9,
                d: 0x305,
                n: 0x2b4,
                S: 0x142,
                c: 0x1fe,
                W: 0xe3,
                l: 0x244,
                t: 0x18c,
                r: 0x126,
                N: 0x245,
                o: 0x2ea,
                O: 0xda,
                T: 0x229,
                C: 0x24e,
                P: 0x1bc,
                D: 0x17a,
                U: 0x2f3,
                K: 0x201,
                q: 0x20f,
                B: 0x131,
                a: 0x12a,
                L: 0x2de,
                X0: 0x23c,
                X1: 0x2cb,
                X2: 0x1c1,
                X3: 0x2cc,
                X4: 0xd7,
                X5: 0x11c,
                X6: 0x279
            }
              , M3 = {
                R: 0x26f
            }
              , M2 = {
                R: 0x128
            }
              , Ra = {
                R: 0x1df
            }
              , RB = {
                R: 0x226
            }
              , RK = {
                R: 0x248
            }
              , RD = {
                R: 0x231,
                M: 0x28e,
                g: 0x2a5,
                y: 0xd8,
                A: 0x17d,
                h: 0x24a,
                m: 0x17d,
                V: 0x1cc,
                b: 0x2a5,
                Q: 0x2f1,
                w: 0x17d,
                I: 0x1e1,
                z: 0x23c,
                f: 0x28e,
                x: 0x100,
                H: 0x201,
                v: 0x130,
                F: 0x221,
                p: 0xe5,
                e: 0x1cc,
                k: 0xe3,
                G: 0x10e,
                J: 0x165,
                d: 0x2b8,
                n: 0x1cc,
                S: 0x11a,
                c: 0x167,
                W: 0x23c,
                l: 0x167,
                t: 0x23c,
                r: 0x1d5,
                N: 0x10e,
                o: 0x165,
                O: 0x17d
            }
              , RC = {
                R: 0x2cb,
                M: 0x1c1,
                g: 0xdc,
                y: 0xe3,
                A: 0x133
            }
              , RT = {
                R: 0x1a6,
                M: 0x17d,
                g: 0x164,
                y: 0x1d4,
                A: 0x214,
                h: 0x303
            }
              , RO = {
                R: 0x253,
                M: 0x28e,
                g: 0x2cb,
                y: 0x1c1,
                A: 0x2b9,
                h: 0x130,
                m: 0x173,
                V: 0x17d,
                b: 0x2e5,
                Q: 0x1c1
            }
              , Ro = {
                R: 0x251,
                M: 0x109,
                g: 0xe6,
                y: 0x17d,
                A: 0x25f,
                h: 0x19b
            }
              , RN = {
                R: 0x297,
                M: 0x17d,
                g: 0x130,
                y: 0x220,
                A: 0x2fb,
                h: 0x130,
                m: 0xda,
                V: 0x2d9,
                b: 0x303,
                Q: 0x123,
                w: 0x2cb,
                I: 0x2d0,
                z: 0x14e,
                f: 0x216,
                x: 0x17d,
                H: 0x2eb,
                v: 0x2c8,
                F: 0x2fb
            }
              , Rr = {
                R: 0x1cd,
                M: 0x17d,
                g: 0x195
            }
              , Rl = {
                R: 0x1ce,
                M: 0x28e,
                g: 0x21e,
                y: 0x22f,
                A: 0x267,
                h: 0x2a6,
                m: 0x2bf,
                V: 0x10e,
                b: 0x14c,
                Q: 0x2ed,
                w: 0x151,
                I: 0x21e,
                z: 0x22f,
                f: 0x2a5,
                x: 0x130,
                H: 0x115,
                v: 0x115,
                F: 0xe0,
                p: 0x2f4,
                e: 0x130,
                k: 0x2e2,
                G: 0x1d2,
                J: 0x1d2,
                d: 0x2ba,
                n: 0x177,
                S: 0x130,
                c: 0x268,
                W: 0x130,
                l: 0x26d,
                t: 0x130,
                r: 0x130,
                N: 0x1b7,
                o: 0x1c8,
                O: 0x197,
                T: 0x130,
                C: 0xe0,
                P: 0x258,
                D: 0x290,
                U: 0x269,
                K: 0x130,
                q: 0x302,
                B: 0x1ae,
                a: 0x130,
                L: 0xd2,
                X0: 0x130,
                X1: 0x270,
                X2: 0x1ad,
                X3: 0x2ed,
                X4: 0x165,
                X5: 0x1db,
                X6: 0x280,
                X7: 0x1cd,
                X8: 0x17d,
                X9: 0x207,
                XX: 0x271,
                XY: 0x1cf,
                XZ: 0x207,
                Xu: 0x2e7
            }
              , Rc = {
                R: 0x2a5
            }
              , Rn = {
                R: 0x2a5,
                M: 0xd9,
                g: 0x17d,
                y: 0x1f2,
                A: 0xda,
                h: 0x2d9,
                m: 0x2f5,
                V: 0x229,
                b: 0x2c2,
                Q: 0x17d
            }
              , Rd = {
                R: 0x2eb,
                M: 0x26e
            }
              , RJ = {
                R: 0x1ab
            }
              , RG = {
                R: 0x17c,
                M: 0x179,
                g: 0x249,
                y: 0x1bf,
                A: 0x17d
            }
              , Rk = {
                R: 0x2b6
            }
              , Rp = {
                R: 0x1f1
            }
              , Rv = {
                R: 0x1f9,
                M: 0x167,
                g: 0x23c
            }
              , RH = {
                R: 0x18d,
                M: 0x17d,
                g: 0x164,
                y: 0x246,
                A: 0x27c,
                h: 0x2ef,
                m: 0x299,
                V: 0x13d,
                b: 0x243
            }
              , Rx = {
                R: 0x136,
                M: 0x28e,
                g: 0xe6,
                y: 0x247,
                A: 0x13c,
                h: 0x20e,
                m: 0x164,
                V: 0x2e6,
                b: 0x214,
                Q: 0x18f,
                w: 0x17d,
                I: 0x199,
                z: 0x29e,
                f: 0x17d,
                x: 0x225,
                H: 0x17d
            }
              , Rf = {
                R: 0x2f5,
                M: 0x17d,
                g: 0x12a,
                y: 0x2e9,
                A: 0x285,
                h: 0x192,
                m: 0x15f,
                V: 0x1cb,
                b: 0x173
            }
              , Rz = {
                R: 0x181,
                M: 0x28e,
                g: 0xdb,
                y: 0x18e,
                A: 0x173,
                h: 0x12c,
                m: 0x195,
                V: 0x143,
                b: 0x12c,
                Q: 0x18d,
                w: 0x17d,
                I: 0x110,
                z: 0x256,
                f: 0x28b,
                x: 0x13b,
                H: 0x1bd,
                v: 0x19a,
                F: 0x16c,
                p: 0x2c9,
                e: 0x2cd,
                k: 0x141,
                G: 0x25b,
                J: 0x203,
                d: 0x2f0,
                n: 0x1bd,
                S: 0x2f0,
                c: 0x2a9,
                W: 0x2f0,
                l: 0x183,
                t: 0x180,
                r: 0x26b,
                N: 0x16c,
                o: 0x2ee,
                O: 0x286,
                T: 0x14d,
                C: 0x110,
                P: 0x175,
                D: 0x19a,
                U: 0x2d4,
                K: 0x175,
                q: 0x256,
                B: 0x1b1,
                a: 0x16c,
                L: 0x26b,
                X0: 0x1be,
                X1: 0x1d4,
                X2: 0x286,
                X3: 0x2c0,
                X4: 0x110,
                X5: 0x17f,
                X6: 0x212,
                X7: 0x2c2,
                X8: 0x13f,
                X9: 0xf7,
                XX: 0x2ff,
                XY: 0x166,
                XZ: 0x114,
                Xu: 0x260,
                XE: 0x12d,
                Xi: 0x191,
                Xs: 0xd7,
                Xj: 0x1c5,
                XR: 0x2d5,
                XM: 0x2aa,
                Xg: 0x107,
                Xy: 0x23b,
                XA: 0x1c2,
                Xh: 0x262,
                Xm: 0xe1,
                XV: 0x256,
                Xb: 0x25b,
                XQ: 0x260,
                Xw: 0x160,
                XI: 0x170,
                Xz: 0x12c,
                Xf: 0x1c5,
                Xx: 0x1d4,
                XH: 0x28f,
                Xv: 0x12d,
                XF: 0x24b,
                Xp: 0x254,
                Xe: 0x284,
                Xk: 0x160,
                XG: 0x19b,
                XJ: 0x24b,
                Xd: 0x1aa,
                Xn: 0x2a3,
                Rf: 0x24c,
                Rx: 0x200,
                RH: 0x149,
                Rv: 0x1aa,
                RF: 0x298,
                Rp: 0x1c5,
                Re: 0x238,
                Rk: 0x2c7,
                RG: 0x28f,
                RJ: 0x29b,
                Rd: 0x2a1,
                Rn: 0x2ce,
                RS: 0x2c0,
                Rc: 0x2a7,
                RW: 0xf7,
                Rl: 0x259,
                Rt: 0x185,
                Rr: 0x1bd,
                RN: 0x2ac,
                Ro: 0x1ed,
                RO: 0x15c,
                RT: 0x11e,
                RC: 0x2a8,
                RP: 0x1a8,
                RD: 0x2d1,
                RU: 0x241,
                RK: 0x1ee,
                Rq: 0x20a,
                RB: 0x1f1,
                Ra: 0x25a,
                RL: 0x1e9
            }
              , RI = {
                R: 0x240,
                M: 0x2c5,
                g: 0x108
            }
              , Rw = {
                R: 0x240,
                M: 0x1e7,
                g: 0x1e7
            }
              , RQ = {
                R: 0x301,
                M: 0x281,
                g: 0x192,
                y: 0x1f4
            }
              , Rb = {
                R: 0xf9,
                M: 0x215,
                g: 0x276,
                y: 0x1c9
            }
              , RV = {
                R: 0x20d,
                M: 0x2d8,
                g: 0x2e8,
                y: 0x20d,
                A: 0x172,
                h: 0x169,
                m: 0x143,
                V: 0x2bc
            }
              , Rm = {
                R: 0x128,
                M: 0x219,
                g: 0x20e,
                y: 0x2bd,
                A: 0x2ec,
                h: 0x203,
                m: 0x12c,
                V: 0x2b5,
                b: 0x300,
                Q: 0x1cb,
                w: 0x236
            }
              , Rh = {
                R: 0xd6,
                M: 0x28e,
                g: 0x15b,
                y: 0x17d,
                A: 0x126,
                h: 0x128,
                m: 0xe3,
                V: 0x1f5,
                b: 0x1a6,
                Q: 0x17d,
                w: 0x248,
                I: 0x201,
                z: 0x130,
                f: 0x126,
                x: 0x2a5,
                H: 0x1a9,
                v: 0x17d,
                F: 0x1f5,
                p: 0x304,
                e: 0x201,
                k: 0x150
            }
              , RA = {
                R: 0x2a4,
                M: 0x12f,
                g: 0x263,
                y: 0x201,
                A: 0x2a5,
                h: 0x12c,
                m: 0x14d,
                V: 0x18c,
                b: 0x28e,
                Q: 0x126,
                w: 0x19a,
                I: 0x1a8,
                z: 0x2f0,
                f: 0x2f0,
                x: 0x27a,
                H: 0x20a,
                v: 0x18c,
                F: 0x126,
                p: 0x16d,
                e: 0x16d
            }
              , Rg = {
                R: 0xdd,
                M: 0x228,
                g: 0x1ef,
                y: 0x194,
                A: 0x1ea,
                h: 0x171,
                m: 0x2e1,
                V: 0x194,
                b: 0x171,
                Q: 0x2e1,
                w: 0x27a,
                I: 0x18c,
                z: 0x186,
                f: 0x156,
                x: 0x1a2,
                H: 0x2a4,
                v: 0x265,
                F: 0x23a,
                p: 0x126,
                e: 0x16d
            }
              , Rs = {
                R: 0x1e1,
                M: 0x23c,
                g: 0x20b
            }
              , Ri = {
                R: 0x25c
            }
              , Ru = {
                R: 0x10f
            }
              , RZ = {
                R: 0x1e0
            }
              , RY = {
                R: 0x1a6
            }
              , RX = {
                R: 0x304
            }
              , R4 = {
                R: 0x199
            }
              , jL = {
                R: 0x17b
            }
              , ja = {
                R: 0x1bc
            }
              , jB = {
                R: 0x236
            }
              , jK = {
                R: 0x26e
            }
              , jU = {
                R: 0x257
            }
              , jD = {
                R: 0x1df
            }
              , jP = {
                R: 0x1a5
            }
              , jC = {
                R: 0x1ec
            }
              , jT = {
                R: 0x257
            }
              , jr = {
                R: 0x1ec
            }
              , jt = {
                R: 0x1bc
            }
              , jl = {
                R: 0x236
            }
              , jW = {
                R: 0x2eb
            }
              , jn = {
                R: 0xe8
            }
              , jJ = {
                R: 0x161
            }
              , jk = {
                R: 0x26e
            }
              , je = {
                R: 0x17b
            }
              , jp = {
                R: 0x176
            }
              , jv = {
                R: 0x1df
            }
              , jx = {
                R: 0x215
            }
              , jz = {
                R: 0x22c
            }
              , jw = {
                R: 0x257
            }
              , jV = {
                R: 0x2da
            }
              , jA = {
                R: 0x17b
            }
              , jM = {
                R: 0x25d
            }
              , js = {
                R: 0x1bc
            }
              , ji = {
                R: 0x257,
                M: 0x17d,
                g: 0x1f2,
                y: 0xda,
                A: 0x2d9,
                h: 0x205,
                m: 0x229,
                V: 0x27f,
                b: 0xe3
            }
              , jE = {
                R: 0xda,
                M: 0x229,
                g: 0x1f7,
                y: 0x234
            }
              , ju = {
                R: 0x125,
                M: 0x28e,
                g: 0x18a,
                y: 0x201,
                A: 0x2d4,
                h: 0x220,
                m: 0x22a,
                V: 0x201,
                b: 0x144,
                Q: 0xe7,
                w: 0x251
            }
              , jZ = {
                R: 0x144
            }
              , jY = {
                R: 0x2e6,
                M: 0x217,
                g: 0x12c,
                y: 0x1d7
            }
              , jX = {
                R: 0x26e,
                M: 0x21f,
                g: 0x2cb,
                y: 0x2d0,
                A: 0x29a,
                h: 0x21f,
                m: 0x19a,
                V: 0x203,
                b: 0x1a8,
                Q: 0x149,
                w: 0x15f,
                I: 0x1d7,
                z: 0xda,
                f: 0x229,
                x: 0x251
            }
              , j9 = {
                R: 0x2ca,
                M: 0x105,
                g: 0x2ca,
                y: 0x11b,
                A: 0x2e9,
                h: 0x14d,
                m: 0x23a,
                V: 0xfc,
                b: 0xf5,
                Q: 0x2b7,
                w: 0x222,
                I: 0xfb,
                z: 0x19c,
                f: 0x2f6,
                x: 0x105
            }
              , j8 = {
                R: 0x1fd
            }
              , j7 = {
                R: 0xe9,
                M: 0x201
            }
              , j5 = {
                R: 0x1a4
            }
              , j4 = {
                R: 0x17d,
                M: 0x25d,
                g: 0x257,
                y: 0x2ec,
                A: 0xda,
                h: 0x229,
                m: 0x274,
                V: 0x26b,
                b: 0x19a,
                Q: 0x1c0,
                w: 0xd4,
                I: 0x2c9,
                z: 0x23e,
                f: 0x251,
                x: 0x1a8,
                H: 0x1a4,
                v: 0x251,
                F: 0x201,
                p: 0x111,
                e: 0x2b7,
                k: 0x103
            }
              , j2 = {
                R: 0x1fe,
                M: 0x1da,
                g: 0x28e,
                y: 0x28c,
                A: 0x2cb,
                h: 0x2d0,
                m: 0x134,
                V: 0x1d8,
                b: 0x1e1,
                Q: 0x23c,
                w: 0xf1
            }
              , j1 = {
                R: 0x297,
                M: 0x172,
                g: 0x2d2
            }
              , j0 = {
                R: 0x19a,
                M: 0x167,
                g: 0x23c,
                y: 0x26b,
                A: 0x2cb,
                h: 0x2d0
            }
              , sL = {
                R: 0x2f7
            }
              , sa = {
                R: 0x2f7
            }
              , sB = {
                R: 0x2f7
            }
              , sq = {
                R: 0x1f3,
                M: 0x116,
                g: 0x13a
            }
              , sK = {
                R: 0x1f3,
                M: 0x13a,
                g: 0x2d2,
                y: 0x1d8
            }
              , sU = {
                R: 0x2f7
            }
              , sD = {
                R: 0x15b,
                M: 0x14a,
                g: 0x230
            }
              , Xc = u
              , R = {
                'VlikN': function(Xi, Xs) {
                    return Xi == Xs;
                },
                'KWAIw': Xc(MZ.R),
                'cvabl': Xc(MZ.M) + 's',
                'Oyknt': Xc(MZ.g) + Xc(MZ.y) + Xc(MZ.A),
                'VviAy': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'PwrkF': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'YPUpx': function(Xi) {
                    return Xi();
                },
                'KXbDx': function(Xi, Xs, Xj) {
                    return Xi(Xs, Xj);
                },
                'SzHOw': function(Xi) {
                    return Xi();
                },
                'zjOWm': function(Xi, Xs) {
                    return Xi > Xs;
                },
                'tlwkf': function(Xi, Xs, Xj) {
                    return Xi(Xs, Xj);
                },
                'Jrdjq': function(Xi, Xs) {
                    return Xi < Xs;
                },
                'jvcIg': function(Xi, Xs) {
                    return Xi - Xs;
                },
                'VAPYc': function(Xi, Xs) {
                    return Xi << Xs;
                },
                'FjvsT': function(Xi) {
                    return Xi();
                },
                'zGCqf': Xc(MZ.h) + Xc(MZ.m) + Xc(MZ.V) + Xc(MZ.b),
                'CGmKc': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'eToiM': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'HKhyN': function(Xi, Xs) {
                    return Xi === Xs;
                },
                'wHFnw': Xc(MZ.Q),
                'ABtRp': Xc(MZ.w) + Xc(MZ.I) + Xc(MZ.z),
                'UgdSv': function(Xi, Xs, Xj) {
                    return Xi(Xs, Xj);
                },
                'lHkLf': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'cvPzl': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'lXLUe': Xc(MZ.f) + Xc(MZ.x) + Xc(MZ.H),
                'LkWyX': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'vpyAH': Xc(MZ.v) + Xc(MZ.F),
                'eXaES': function(Xi, Xs, Xj, XR) {
                    return Xi(Xs, Xj, XR);
                },
                'yRvxn': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'mnvfW': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'KopEo': function(Xi, Xs) {
                    return Xi >>> Xs;
                },
                'MJIRd': function(Xi, Xs) {
                    return Xi * Xs;
                },
                'SHCvo': function(Xi, Xs) {
                    return Xi / Xs;
                },
                'mJLuw': function(Xi, Xs) {
                    return Xi % Xs;
                },
                'ugFwV': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'WFdnM': Xc(MZ.p) + '5',
                'goTNd': function(Xi) {
                    return Xi();
                },
                'QnNGo': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'AVwex': function(Xi, Xs) {
                    return Xi > Xs;
                },
                'gHLUv': function(Xi) {
                    return Xi();
                },
                'gXlLR': Xc(MZ.e) + Xc(MZ.k) + Xc(MZ.G) + Xc(MZ.J),
                'TbfRP': function(Xi, Xs) {
                    return Xi >= Xs;
                },
                'kIwEd': function(Xi, Xs) {
                    return Xi * Xs;
                },
                'vQhwK': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'mYiwb': function(Xi, Xs) {
                    return Xi == Xs;
                },
                'lZIuP': function(Xi, Xs) {
                    return Xi < Xs;
                },
                'ZaKPj': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'ibbSm': function(Xi, Xs) {
                    return Xi == Xs;
                },
                'oLORC': function(Xi, Xs) {
                    return Xi - Xs;
                },
                'xiSJn': function(Xi, Xs) {
                    return Xi | Xs;
                },
                'oCwDG': function(Xi, Xs) {
                    return Xi << Xs;
                },
                'supAf': function(Xi, Xs) {
                    return Xi & Xs;
                },
                'eCFKN': function(Xi, Xs) {
                    return Xi < Xs;
                },
                'sXXpq': function(Xi, Xs) {
                    return Xi | Xs;
                },
                'ZpPAK': function(Xi, Xs) {
                    return Xi | Xs;
                },
                'FUapS': function(Xi, Xs) {
                    return Xi == Xs;
                },
                'jXSsJ': function(Xi, Xs) {
                    return Xi | Xs;
                },
                'VcfuM': function(Xi, Xs) {
                    return Xi << Xs;
                },
                'AbCJN': function(Xi, Xs) {
                    return Xi !== Xs;
                },
                'UeURp': function(Xi, Xs) {
                    return Xi < Xs;
                },
                'PWmRw': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'UWOTp': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'MoYrS': function(Xi, Xs) {
                    return Xi | Xs;
                },
                'IiNDQ': function(Xi, Xs) {
                    return Xi == Xs;
                },
                'ZFkUM': function(Xi, Xs) {
                    return Xi | Xs;
                },
                'AUNjs': function(Xi, Xs) {
                    return Xi | Xs;
                },
                'dYlix': function(Xi, Xs) {
                    return Xi & Xs;
                },
                'gTDJY': function(Xi, Xs) {
                    return Xi - Xs;
                },
                'PkvBa': function(Xi, Xs) {
                    return Xi == Xs;
                },
                'ZmRFn': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'BsBtG': function(Xi, Xs) {
                    return Xi === Xs;
                },
                'aoRue': function(Xi, Xs) {
                    return Xi - Xs;
                },
                'cePHv': function(Xi, Xs) {
                    return Xi !== Xs;
                },
                'LplGO': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'MbeXW': function(Xi, Xs) {
                    return Xi === Xs;
                },
                'kyKRz': Xc(MZ.d),
                'mnNrg': Xc(MZ.n),
                'yQCMZ': function(Xi, Xs) {
                    return Xi === Xs;
                },
                'Qwvjs': function(Xi, Xs) {
                    return Xi != Xs;
                },
                'gERzh': Xc(MZ.S),
                'DxGjl': Xc(MZ.c),
                'XrDiy': function(Xi, Xs) {
                    return Xi == Xs;
                },
                'NIOHS': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'qaxRJ': Xc(MZ.W) + Xc(MZ.l),
                'XzqII': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'ldnHc': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'WCqif': function(Xi, Xs) {
                    return Xi == Xs;
                },
                'aMnLE': function(Xi, Xs) {
                    return Xi == Xs;
                },
                'aMwMH': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'tVvcR': function(Xi, Xs) {
                    return Xi & Xs;
                },
                'RqMsF': function(Xi, Xs) {
                    return Xi & Xs;
                },
                'ENaSJ': function(Xi, Xs) {
                    return Xi >> Xs;
                },
                'dqEKz': function(Xi, Xs) {
                    return Xi >> Xs;
                },
                'aCEYo': function(Xi, Xs) {
                    return Xi >> Xs;
                },
                'vsuoj': function(Xi, Xs) {
                    return Xi | Xs;
                },
                'uuygV': function(Xi, Xs) {
                    return Xi << Xs;
                },
                'NZdow': function(Xi, Xs, Xj) {
                    return Xi(Xs, Xj);
                },
                'gjiFY': function(Xi, Xs) {
                    return Xi >>> Xs;
                },
                'twcip': function(Xi, Xs) {
                    return Xi - Xs;
                },
                'sHetF': function(Xi, Xs, Xj, XR, XM, Xg, Xy) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy);
                },
                'PQIYt': function(Xi, Xs) {
                    return Xi & Xs;
                },
                'cVhUO': function(Xi, Xs) {
                    return Xi & Xs;
                },
                'lFNGo': function(Xi, Xs, Xj, XR, XM, Xg, Xy) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy);
                },
                'nzmPV': function(Xi, Xs) {
                    return Xi | Xs;
                },
                'vgWEY': function(Xi, Xs) {
                    return Xi & Xs;
                },
                'pRLcN': function(Xi, Xs) {
                    return Xi & Xs;
                },
                'DNNpb': function(Xi, Xs, Xj, XR, XM, Xg, Xy) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy);
                },
                'SpxTD': function(Xi, Xs) {
                    return Xi ^ Xs;
                },
                'mmztv': function(Xi, Xs) {
                    return Xi ^ Xs;
                },
                'JBCQC': function(Xi, Xs) {
                    return Xi | Xs;
                },
                'gDcVG': Xc(MZ.t),
                'Fypal': function(Xi, Xs) {
                    return Xi >> Xs;
                },
                'DCyRa': function(Xi, Xs) {
                    return Xi << Xs;
                },
                'orkUj': function(Xi, Xs) {
                    return Xi % Xs;
                },
                'mSZDt': function(Xi, Xs) {
                    return Xi << Xs;
                },
                'iIyzq': function(Xi, Xs) {
                    return Xi < Xs;
                },
                'bBCMX': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'YTIeM': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'vZSOW': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'UYJBS': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'RYUEL': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'hcTAk': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'CuoqJ': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'FlJjA': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'lqcul': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'QObtD': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'yhpIy': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'sfynw': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'JoACP': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'lwtue': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'ciubD': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'QcyPR': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'dmIrb': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'ehmmz': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'soVhz': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'osaxm': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'lOFra': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'aPIiL': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'YxcZz': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'tEAaQ': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'sOmhb': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'XJMWw': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'LUOXS': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'TdGbG': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'rButo': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'GiwOt': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'HdcDJ': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'IGehW': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'yCRTX': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'fUVtH': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'EpuAL': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'xxiBe': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'GwqFM': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'iMYTW': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'amZkg': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'GISNt': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'QhDHH': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'njxmn': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'EmzOS': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'lTELV': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'aEfbu': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'vzqOs': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'zehME': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'yHAEE': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'mqcFR': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'Uqrac': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'lgxyD': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'QZqWe': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'PkkWo': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'QaMUc': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'dETtu': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'nDyNf': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'QkZpG': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'OkbdJ': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'DYSEK': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'TSRrV': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'xnzTF': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'WhgyV': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'GQuiQ': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'aoKaD': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'XFWjk': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'rXtFQ': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'sVUVd': function(Xi, Xs, Xj, XR, XM, Xg, Xy, XA) {
                    return Xi(Xs, Xj, XR, XM, Xg, Xy, XA);
                },
                'eNmVX': function(Xi, Xs, Xj) {
                    return Xi(Xs, Xj);
                },
                'Nluia': function(Xi, Xs, Xj) {
                    return Xi(Xs, Xj);
                },
                'OigbC': function(Xi, Xs, Xj) {
                    return Xi(Xs, Xj);
                },
                'OXvwo': function(Xi, Xs) {
                    return Xi * Xs;
                },
                'UKQWn': Xc(MZ.r),
                'GqsMc': function(Xi, Xs) {
                    return Xi < Xs;
                },
                'jLfIN': function(Xi, Xs) {
                    return Xi >> Xs;
                },
                'LqaMF': function(Xi, Xs) {
                    return Xi << Xs;
                },
                'RzAhC': function(Xi, Xs) {
                    return Xi % Xs;
                },
                'gAziv': function(Xi, Xs) {
                    return Xi * Xs;
                },
                'ycpYC': function(Xi, Xs) {
                    return Xi >> Xs;
                },
                'bMtPo': function(Xi, Xs) {
                    return Xi < Xs;
                },
                'TfqKS': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'BCoIz': Xc(MZ.N) + Xc(MZ.o),
                'OCYzD': function(Xi, Xs) {
                    return Xi & Xs;
                },
                'sVQbE': function(Xi, Xs) {
                    return Xi >>> Xs;
                },
                'xvvcs': function(Xi, Xs) {
                    return Xi & Xs;
                },
                'giQGu': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'KwwLU': function(Xi, Xs) {
                    return Xi * Xs;
                },
                'RjNxw': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'PzYzn': function(Xi, Xs) {
                    return Xi - Xs;
                },
                'RfeSy': function(Xi, Xs) {
                    return Xi == Xs;
                },
                'BbckI': Xc(MZ.O) + Xc(MZ.T) + Xc(MZ.C),
                'KJeOI': Xc(MZ.P),
                'crkaJ': Xc(MZ.D),
                'opeUQ': Xc(MZ.U),
                'doMyk': Xc(MZ.K) + Xc(MZ.q),
                'wywIA': Xc(MZ.B),
                'QIalt': function(Xi, Xs) {
                    return Xi < Xs;
                },
                'hkipk': Xc(MZ.a),
                'RhzlO': function(Xi) {
                    return Xi();
                },
                'nhSko': function(Xi, Xs) {
                    return Xi % Xs;
                },
                'sIiRr': function(Xi, Xs) {
                    return Xi / Xs;
                },
                'eNPoi': function(Xi, Xs) {
                    return Xi > Xs;
                },
                'WMkjX': function(Xi) {
                    return Xi();
                },
                'nTuOR': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'EsdSy': Xc(MZ.L),
                'vZrjd': function(Xi, Xs) {
                    return Xi < Xs;
                },
                'IxinL': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'uinjh': function(Xi, Xs, Xj) {
                    return Xi(Xs, Xj);
                },
                'jpLLj': Xc(MZ.X0) + Xc(MZ.X1),
                'OZRCg': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'EaBIj': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'keBqS': Xc(MZ.X2) + Xc(MZ.X3) + Xc(MZ.X4),
                'EnFhM': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'cJxkn': function(Xi, Xs, Xj, XR) {
                    return Xi(Xs, Xj, XR);
                },
                'oMLVJ': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'fiuty': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'ihXpN': Xc(MZ.X5),
                'dLOSc': Xc(MZ.X6),
                'aTIFL': function(Xi, Xs) {
                    return Xi != Xs;
                },
                'olfBu': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'whYJl': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'ITuPv': function(Xi) {
                    return Xi();
                },
                'NjPvG': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'DEdTN': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'gKNbS': function(Xi, Xs, Xj) {
                    return Xi(Xs, Xj);
                },
                'NvBdQ': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'jJdrr': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'zUDrX': Xc(MZ.X7),
                'wgWln': Xc(MZ.X8),
                'hiVcH': function(Xi, Xs) {
                    return Xi instanceof Xs;
                },
                'CFwwu': Xc(MZ.X9),
                'OoXUr': function(Xi, Xs) {
                    return Xi - Xs;
                },
                'CPKfn': function(Xi, Xs) {
                    return Xi + Xs;
                },
                'HRsWl': function(Xi, Xs) {
                    return Xi < Xs;
                },
                'CFhOO': function(Xi, Xs) {
                    return Xi == Xs;
                },
                'eJQqX': Xc(MZ.X5) + '-',
                'JMlvC': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'YBtNI': function(Xi, Xs) {
                    return Xi != Xs;
                },
                'ZvBGm': Xc(MZ.XX) + Xc(MZ.XY),
                'ldPyZ': function(Xi, Xs, Xj, XR) {
                    return Xi(Xs, Xj, XR);
                },
                'BhkPY': function(Xi, Xs) {
                    return Xi != Xs;
                },
                'JDhpA': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'plOLa': Xc(MZ.XZ) + Xc(MZ.Xu),
                'ghqkO': function(Xi, Xs, Xj, XR) {
                    return Xi(Xs, Xj, XR);
                },
                'iwbig': function(Xi, Xs, Xj, XR, XM) {
                    return Xi(Xs, Xj, XR, XM);
                },
                'YEpvJ': function(Xi, Xs, Xj, XR, XM) {
                    return Xi(Xs, Xj, XR, XM);
                },
                'kslIt': function(Xi, Xs, Xj, XR) {
                    return Xi(Xs, Xj, XR);
                },
                'zSoSM': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'txOSr': Xc(MZ.XE),
                'iYAqL': Xc(MZ.Xi),
                'PVNOL': Xc(MZ.Xs) + Xc(MZ.Xj),
                'oHYJs': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'MnZqK': function(Xi, Xs, Xj, XR) {
                    return Xi(Xs, Xj, XR);
                },
                'JTQip': function(Xi, Xs, Xj, XR, XM) {
                    return Xi(Xs, Xj, XR, XM);
                },
                'IFIZd': function(Xi) {
                    return Xi();
                },
                'XvZuO': Xc(MZ.XR),
                'XCnqq': function(Xi, Xs) {
                    return Xi > Xs;
                },
                'LxkCm': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'tBkKf': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'dZOUh': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'oEVTP': function(Xi) {
                    return Xi();
                },
                'iAoCH': function(Xi, Xs) {
                    return Xi(Xs);
                },
                'CNKpR': Xc(MZ.XM) + Xc(MZ.Xg) + Xc(MZ.Xy) + Xc(MZ.XA) + Xc(MZ.Xh) + Xc(MZ.Xm) + Xc(MZ.XV),
                'Ruqdv': Xc(MZ.Xb),
                'nOqkH': Xc(MZ.XQ),
                'NHaxb': Xc(MZ.Xw),
                'MKwsK': Xc(MZ.XI),
                'UDYOH': Xc(MZ.Xz),
                'wrOvP': Xc(MZ.Xf),
                'bLVkc': Xc(MZ.Xx),
                'jPMwP': Xc(MZ.XH) + '_',
                'Qplbu': function(Xi, Xs) {
                    return Xi <= Xs;
                },
                'oLRTx': function(Xi, Xs) {
                    return Xi > Xs;
                },
                'PaeIC': function(Xi, Xs) {
                    return Xi(Xs);
                }
            };
            var M = {};
            M['E'] = (function() {
                try {
                    j.push(175);
                    var XW = Xc;
                    if (R[XW(sD.R)](R[XW(sD.M)], typeof globalThis))
                        return globalThis;
                    try {
                        return this || new Function(R[XW(sD.g)])();
                    } catch (Xi) {
                        if (R[XW(sD.R)](R[XW(sD.M)], typeof window))
                            return window;
                    }
                } finally {
                    j.pop();
                }
            }());
            var g = [-0x19 * -0x1f6353 + -0x2c8a2b6 + 0x4799 * 0x1289 + ME, 0xf56be19c + 0xd66372ae + -0x13f45dbc2 + ME, -0x1ff589e1 * -0x7 + -0xb7834a74 + -0xb1e1ecb * -0xd + ME]
              , y = void (0x155d + 0x159d * -0x1 + -0x3a5 + ME);
            function A() {
                try {
                    j.push(175);
                    var Xl = Xc;
                    this[Xl(sU.R)] = {};
                } finally {
                    j.pop();
                }
            }
            function h() {
                try {
                    j.push(175);
                    var Xt = Xc
                      , Xi = {};
                    Xi[Xt(sq.R)] = R[Xt(sq.M)];
                    var Xs = Xi;
                    return y || (y = (function() {
                        try {
                            j.push(175);
                            var Xr = Xt;
                            try {
                                var Xj = Xs[Xr(sK.R)];
                                return M['E'][Xr(sK.M) + 'ge'][Xr(sK.g)](Xj, Xj),
                                M['E'][Xr(sK.M) + 'ge'][Xr(sK.y)](Xj),
                                !(-0x118e + 0xb89 * -0x2 + -0x8 * -0x514);
                            } catch (XR) {
                                return !(-0x1 * -0x499 + 0xae * -0x31 + 0x18d1 + ME);
                            }
                        } finally {
                            j.pop();
                        }
                    }()) ? M['E'][Xt(sq.g) + 'ge'] : new A()),
                    y;
                } finally {
                    j.pop();
                }
            }
            A[Xc(MZ.Xv)][Xc(MZ.XF)] = function(Xi, Xs) {
                try {
                    j.push(175);
                    var XN = Xc;
                    this[XN(sB.R)][Xi] = Xs;
                } finally {
                    j.pop();
                }
            }
            ,
            A[Xc(MZ.Xv)][Xc(MZ.Xp)] = function(Xi) {
                try {
                    j.push(175);
                    var Xo = Xc;
                    return this[Xo(sa.R)][Xi];
                } finally {
                    j.pop();
                }
            }
            ,
            A[Xc(MZ.Xe)][Xc(MZ.Xk)] = function(Xi) {
                try {
                    j.push(175);
                    var XO = Xc;
                    delete this[XO(sL.R)][Xi];
                } finally {
                    j.pop();
                }
            }
            ;
            var m = {};
            function V(Xi, Xs) {
                try {
                    j.push(175);
                    var XT = Xc;
                    return Xs || (Xs = -0x2c35cb + 0x13 * -0x15d52 + 0x30cb1e * 0x2 + ME),
                    R[XT(j0.R)](R[XT(j0.R)](M['E'][XT(j0.M) + XT(j0.g)](Xi), '||'), R[XT(j0.y)](new M['E'][(XT(j0.A))]()[XT(j0.h)](), Xs));
                } finally {
                    j.pop();
                }
            }
            function b(Xi, Xs, Xj) {
                try {
                    j.push(175);
                    var XC = Xc
                      , XR = R[XC(j1.R)](h);
                    Xs = R[XC(j1.M)](V, Xs, Xj),
                    m[Xi] = Xs,
                    XR[XC(j1.g)](Xi, Xs);
                } finally {
                    j.pop();
                }
            }
            function Q(Xi) {
                try {
                    j.push(175);
                    var XP = Xc, Xs, Xj = R[XP(j2.R)](h);
                    if (Xs = m[Xi] ? m[Xi] : Xj[XP(j2.M)](Xi)) {
                        var XR = Xs[XP(j2.g)]('||')
                          , XM = XR[-0x1e71 + -0x1 * -0x16cd + -0x13 * -0x67];
                        return XM && R[XP(j2.y)](new M['E'][(XP(j2.A))]()[XP(j2.h)](), M['E'][XP(j2.m)](XM)) ? (Xj[XP(j2.V)](Xi),
                        void delete m[Xi]) : (m[Xi] = Xs,
                        M['E'][XP(j2.b) + XP(j2.Q)](XR[0x34 * -0x13 + -0xa9 + 0xa0 + ME]));
                    }
                    return m[Xi] = R[XP(j2.w)](V, '', -0x35 * -0x2911 + -0x22a0f + 0x40ed * -0x7 + ME),
                    '';
                } finally {
                    j.pop();
                }
            }
            var w = -0xe08adee + -0x1f89593 * 0x4 + 0x1f51c483;
            function I(Xi, Xs) {
                try {
                    j.push(175);
                    var XD = Xc;
                    for (var Xj = Xs ? 0x2c8412 * 0x4a + 0x3c83d99 * -0x1 + 0x50d0ae : w, XR = -0x3 * -0x5a1 + -0x1989 + -0x4c1 * -0x1 + ME, XM = Xi[XD(j4.R)], Xg = function() {}; R[XD(j4.M)](XR, XM); )
                        Xj = R[XD(j4.g)](R[XD(j4.y)](Xj, -0x23f1 + -0x2dd * 0x3 + 0x4 * 0xb23), Xj),
                        Xj += (Xg = M['E'][XD(j4.A)][XD(j4.h)][XD(j4.m) + 'r']('s', 'i', R[XD(j4.V)](R[XD(j4.b)](R[XD(j4.Q)](H), XR), R[XD(j4.w)])))(Xi[XR], XR),
                        Xj >>>= -0x457 * -0x7 + -0x1b6 * 0xc + -0x9d9,
                        XR += R[XD(j4.I)](0x203b + 0xe52 + 0x4 * -0xba3, !/{\s*\d/gm[XD(j4.z)](Xg[XD(j4.f)]()));
                    return Xs || (w = R[XD(j4.x)](Xj, R[XD(j4.H)](-(0x1f * 0xed + 0x7 * 0x577 + 0x57 * -0xc5), Xg[XD(j4.v)]()[XD(j4.F)](R[XD(j4.p)])) || new M['E'][(XD(j4.e))](R[XD(j4.k)],'gm')[XD(j4.z)](Xg[XD(j4.f)]()))),
                    Xj;
                } finally {
                    j.pop();
                }
            }
            function z() {
                try {
                    j.push(175);
                    var j6 = {
                        R: 0x20d
                    }, Xq = Xc, Xi = {
                        'QjGTQ': function(Xy, XA) {
                            try {
                                j.push(175);
                                var XU = u;
                                return R[XU(j5.R)](Xy, XA);
                            } finally {
                                j.pop();
                            }
                        },
                        'coilF': function(Xy, XA, Xh) {
                            try {
                                j.push(175);
                                var XK = u;
                                return R[XK(j6.R)](Xy, XA, Xh);
                            } finally {
                                j.pop();
                            }
                        }
                    }, Xs, Xj, XR, XM = Error[Xq(j9.R) + Xq(j9.M)];
                    try {
                        Error[Xq(j9.g) + Xq(j9.M)] = -0x1672 + 0xbc * -0x1b + 0x2693 + ME,
                        M['E'][Xq(j9.y) + Xq(j9.A)]();
                    } catch (Xy) {
                        var Xg = R[Xq(j9.h)](R[Xq(j9.m)](Xy[Xq(j9.V)], '\x20'), Xy[Xq(j9.b)]);
                        return Xs = Xg,
                        Xj = new M['E'][(Xq(j9.Q))](R[Xq(j9.w)],'gm'),
                        (XR = Xs[Xq(j9.I)](Xj))[Xq(j9.z)](function(XA, Xh) {
                            try {
                                j.push(175);
                                var XB = Xq;
                                return Xi[XB(j7.R)](XR[XB(j7.M)](XA), Xh);
                            } finally {
                                j.pop();
                            }
                        })[Xq(j9.f)](function(XA) {
                            try {
                                j.push(175);
                                var Xa = Xq;
                                return Xi[Xa(j8.R)](I, XA, !(0x1 * 0x107b + 0x1b78 + 0xbf6 * -0x4 + ME));
                            } finally {
                                j.pop();
                            }
                        });
                    } finally {
                        XM && (Error[Xq(j9.R) + Xq(j9.x)] = XM);
                    }
                } finally {
                    j.pop();
                }
            }
            function f() {
                try {
                    j.push(175);
                    var XL = Xc
                      , Xi = R[XL(jX.R)](Q, R[XL(jX.M)]);
                    if (!Xi) {
                        var Xs = new M['E'][(XL(jX.g))]()[XL(jX.y)]();
                        R[XL(jX.A)](b, R[XL(jX.h)], Xi = R[XL(jX.m)](R[XL(jX.V)](R[XL(jX.R)](I, R[XL(jX.b)](R[XL(jX.Q)](R[XL(jX.w)](R[XL(jX.I)](0x1033dca57 + 0x1d6e0bdbb + -0x8093209 * 0x3b, M['E'][XL(jX.z)][XL(jX.f)]()), -0x2 * -0xd4a + 0x16cf + -0x1aa4 * 0x2 + ME), '|'), Xs)), 'a'), Xs[XL(jX.x)](0x1 * -0x2372 + -0x5de + 0x65 * 0x5f + ME)), 0x23e0bec87 + -0x2c6824cf6 + 0x4276f106f);
                    }
                    return Xi;
                } finally {
                    j.pop();
                }
            }
            var x, H = M['E'][Xc(MZ.XG)][Xc(MZ.XJ)], v = M['E'][Xc(MZ.Xd)][Xc(MZ.Xn)], F = 0x2ef * 0x6 + 0x1d39 + -0x2ed3 * 0x1;
            function p(Xi) {
                try {
                    j.push(175);
                    var Y0 = Xc
                      , Xs = R[Y0(ju.R)][Y0(ju.M)]('|')
                      , Xj = 0x7 * 0x427 + -0x4bd + -0x1854;
                    while (!![]) {
                        switch (Xs[Xj++]) {
                        case '0':
                            R[Y0(ju.g)](z)[Y0(ju.y)](-0x1 * 0x84c5cf43 + 0x5 * -0xddfe039 + 0x156aeaccd);
                            continue;
                        case '1':
                            var XR = R[Y0(ju.A)](0x11f686 + 0x1c5f0d + -0x186df8 + ME, R[Y0(ju.h)](R[Y0(ju.m)](z)[Y0(ju.V)](0x30d1 * -0x519d1 + -0xe12a634f + -0x4cd6a3ef * -0x8 + ME), -(0xa3d * 0x3 + -0xa * -0x178 + -0x2d66)));
                            continue;
                        case '2':
                            var XM = {};
                            XM[Y0(ju.b)] = R[Y0(ju.Q)];
                            var Xg = XM;
                            continue;
                        case '3':
                            F = -0x139d5b97 + -0xed0f55d + 0x5fd2a01a;
                            continue;
                        case '4':
                            var Xy = -0x17603115 + -0xf38cfa0f + -0x6e99ab * -0x412 + ME
                              , XA = function() {
                                try {
                                    j.push(175);
                                    var Y1 = Y0;
                                    return R[Y1(jY.R)](F = R[Y1(jY.M)](R[Y1(jY.g)](R[Y1(jY.y)](XR, F), Xi), Xy), Xy);
                                } finally {
                                    j.pop();
                                }
                            };
                            continue;
                        case '5':
                            return XA[Y0(ju.w)] = function() {
                                try {
                                    j.push(175);
                                    var Y2 = Y0;
                                    return Xg[Y2(jZ.R)];
                                } finally {
                                    j.pop();
                                }
                            }
                            ,
                            XA;
                        }
                        break;
                    }
                } finally {
                    j.pop();
                }
            }
            function e() {
                try {
                    j.push(175);
                    var Y3 = Xc;
                    M['E'][Y3(jE.R)][Y3(jE.M)] = H,
                    M['E'][Y3(jE.g)][Y3(jE.y)] = v;
                } finally {
                    j.pop();
                }
            }
            x = R[Xc(MZ.Mu)][Xc(MZ.ME)]('');
            var k = 0x152ae47f + 0xb * 0xa374af + -0xc96bc47 + ME;
            function G(Xi) {
                try {
                    j.push(175);
                    var Y4 = Xc;
                    for (var Xs = Xi, Xj = R[Y4(ji.R)](Xs[Y4(ji.M)], -0x520 * 0x1 + -0x5 * 0x527 + 0x1ee4); R[Y4(ji.g)](Xj, 0x2ce + 0x2449 * 0x1 + -0x20c * 0x15 + ME); Xj--) {
                        var XR = M['E'][Y4(ji.y)][Y4(ji.A)](R[Y4(ji.h)](M['E'][Y4(ji.y)][Y4(ji.m)](), R[Y4(ji.V)](Xj, 0x2682 + 0x2137 * 0x1 + -0x66 * 0xb4)))
                          , XM = Xs[XR];
                        Xs[XR] = Xs[Xj],
                        Xs[Xj] = XM;
                    }
                    return Xs[Y4(ji.M)],
                    Xs[Y4(ji.b)](''),
                    Xs;
                } finally {
                    j.pop();
                }
            }
            function J(Xi, Xs) {
                try {
                    j.push(175);
                    var R8 = {
                        R: 0x1ca,
                        M: 0x19e,
                        g: 0x17d,
                        y: 0x2ef,
                        A: 0x10e,
                        h: 0x21d,
                        m: 0x1ad,
                        V: 0x2ed,
                        b: 0x132,
                        Q: 0x1a1,
                        w: 0x21d,
                        I: 0x2ed,
                        z: 0x10e,
                        f: 0x21d,
                        x: 0x1ad,
                        H: 0x132,
                        v: 0x218,
                        F: 0x164,
                        p: 0x106,
                        e: 0x102,
                        k: 0x11f,
                        G: 0x130,
                        J: 0x196,
                        d: 0x164,
                        n: 0x218,
                        S: 0x2f9,
                        c: 0x283,
                        W: 0x1c4,
                        l: 0xe4,
                        t: 0x124,
                        r: 0x196,
                        N: 0xfa,
                        o: 0x129,
                        O: 0x15e,
                        T: 0x130,
                        C: 0x196,
                        P: 0x19e,
                        D: 0x15a,
                        U: 0x1c4,
                        K: 0x1ca,
                        q: 0x130,
                        B: 0x113,
                        a: 0x1b5,
                        L: 0xda,
                        X0: 0x1fc,
                        X1: 0x2e3,
                        X2: 0x272,
                        X3: 0x1c4,
                        X4: 0x118,
                        X5: 0x275,
                        X6: 0x2b1,
                        X7: 0xda,
                        X8: 0x1fc,
                        X9: 0x2e9,
                        XX: 0x120,
                        XY: 0x10e,
                        XZ: 0x21d,
                        Xu: 0x132,
                        XE: 0x139,
                        Xi: 0x1b6,
                        Xs: 0x15d,
                        Xj: 0x2af,
                        XR: 0x130,
                        XM: 0x2c4,
                        Xg: 0x135,
                        Xy: 0x287,
                        XA: 0x130,
                        Xh: 0x1c6,
                        Xm: 0x224,
                        XV: 0x1af,
                        Xb: 0x283,
                        XQ: 0x1b3,
                        Xw: 0x202,
                        XI: 0x130,
                        Xz: 0x1fb,
                        Xf: 0x164,
                        Xx: 0x2c1,
                        XH: 0x272,
                        Xv: 0x1c4,
                        XF: 0x25e,
                        Xp: 0x11d,
                        Xe: 0x261,
                        Xk: 0xda,
                        XG: 0x1b6,
                        XJ: 0x1e5,
                        Xd: 0x272,
                        Xn: 0x190,
                        R9: 0x282,
                        RX: 0x101,
                        RY: 0xe4,
                        RZ: 0xda,
                        Ru: 0x1fc,
                        RE: 0x27b,
                        Ri: 0x306,
                        Rs: 0x288,
                        Rj: 0x1bb,
                        RR: 0x14b,
                        RM: 0x130,
                        Rg: 0x2c4,
                        Ry: 0x21c,
                        RA: 0x1f0,
                        Rh: 0x211,
                        Rm: 0xe3
                    }
                      , R7 = {
                        R: 0x2e5
                    }
                      , R6 = {
                        R: 0x257
                    }
                      , R5 = {
                        R: 0x155
                    }
                      , R3 = {
                        R: 0x1bc
                    }
                      , R2 = {
                        R: 0x20c
                    }
                      , R1 = {
                        R: 0x2bd
                    }
                      , R0 = {
                        R: 0x1a6
                    }
                      , jq = {
                        R: 0x2bd
                    }
                      , jO = {
                        R: 0x210
                    }
                      , jo = {
                        R: 0xde
                    }
                      , jN = {
                        R: 0x25d
                    }
                      , jc = {
                        R: 0x17b
                    }
                      , jS = {
                        R: 0x15b
                    }
                      , jd = {
                        R: 0xe8
                    }
                      , jG = {
                        R: 0x15b
                    }
                      , jF = {
                        R: 0x14f
                    }
                      , jH = {
                        R: 0x26e
                    }
                      , jf = {
                        R: 0x17b
                    }
                      , jI = {
                        R: 0x12a
                    }
                      , jQ = {
                        R: 0x304
                    }
                      , jb = {
                        R: 0x236
                    }
                      , jm = {
                        R: 0x24d
                    }
                      , jh = {
                        R: 0x26e
                    }
                      , jy = {
                        R: 0x304
                    }
                      , jg = {
                        R: 0x25d
                    }
                      , jR = {
                        R: 0x20a
                    }
                      , jj = {
                        R: 0x1a6
                    }
                      , YB = Xc
                      , Xj = {
                        'MjuKg': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Y5 = u;
                                return R[Y5(js.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'hezYu': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Y6 = u;
                                return R[Y6(jj.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'qKIbZ': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Y7 = u;
                                return R[Y7(jR.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'MVXGd': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Y8 = u;
                                return R[Y8(jM.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'XSJDI': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Y9 = u;
                                return R[Y9(jg.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'euhUd': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YX = u;
                                return R[YX(jy.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'PJVfh': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YY = u;
                                return R[YY(jA.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'cMTcz': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YZ = u;
                                return R[YZ(jh.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'oPpRT': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yu = u;
                                return R[Yu(jm.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'MrZkb': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YE = u;
                                return R[YE(jV.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'RyvzY': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yi = u;
                                return R[Yi(jb.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'qBdwc': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Ys = u;
                                return R[Ys(jQ.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'UJNmn': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yj = u;
                                return R[Yj(jw.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'rnSFk': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YR = u;
                                return R[YR(jI.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'XwZBz': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YM = u;
                                return R[YM(jz.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'UQAqT': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yg = u;
                                return R[Yg(jf.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'AZXHJ': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yy = u;
                                return R[Yy(jx.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'Jxuav': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YA = u;
                                return R[YA(jH.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'gctHi': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yh = u;
                                return R[Yh(jv.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'YyPJd': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Ym = u;
                                return R[Ym(jF.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'xjxIF': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YV = u;
                                return R[YV(jp.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'ETDIb': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yb = u;
                                return R[Yb(je.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'FyBVC': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YQ = u;
                                return R[YQ(jk.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'tZzoR': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yw = u;
                                return R[Yw(jG.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'NfgWr': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YI = u;
                                return R[YI(jJ.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'QgUTr': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yz = u;
                                return R[Yz(jd.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'pldDA': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yf = u;
                                return R[Yf(jn.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'YtQcL': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yx = u;
                                return R[Yx(jS.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'SlwEc': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YH = u;
                                return R[YH(jc.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'Hpwek': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yv = u;
                                return R[Yv(jW.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'FUkFQ': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YF = u;
                                return R[YF(jl.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'mnKpb': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yp = u;
                                return R[Yp(jt.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'sSFwg': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Ye = u;
                                return R[Ye(jr.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'WBwdq': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yk = u;
                                return R[Yk(jN.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'waYtE': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YG = u;
                                return R[YG(jo.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'EumiB': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YJ = u;
                                return R[YJ(jO.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'GhaFc': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yd = u;
                                return R[Yd(jT.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'PQNTZ': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yn = u;
                                return R[Yn(jC.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'qCyIw': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YS = u;
                                return R[YS(jP.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'QRfzZ': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yc = u;
                                return R[Yc(jD.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'YASft': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YW = u;
                                return R[YW(jU.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'WvQel': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yl = u;
                                return R[Yl(jK.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'lRsPF': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yt = u;
                                return R[Yt(jq.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'ctsgt': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yr = u;
                                return R[Yr(jB.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'kLyXc': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YN = u;
                                return R[YN(ja.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'kktua': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yo = u;
                                return R[Yo(jL.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'wcOTV': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YO = u;
                                return R[YO(R0.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'qoQqG': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YT = u;
                                return R[YT(R1.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'TuJgT': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YC = u;
                                return R[YC(R2.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'fCCXL': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YP = u;
                                return R[YP(R3.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'pvEFS': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YD = u;
                                return R[YD(R4.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'CbadE': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YU = u;
                                return R[YU(R5.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'TowxS': function(XM, Xg) {
                            try {
                                j.push(175);
                                var YK = u;
                                return R[YK(R6.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        },
                        'tHBht': function(XM, Xg) {
                            try {
                                j.push(175);
                                var Yq = u;
                                return R[Yq(R7.R)](XM, Xg);
                            } finally {
                                j.pop();
                            }
                        }
                    };
                    if (R[YB(RX.R)](null, Xi))
                        return '';
                    var XR = function(XM, Xg, Xy) {
                        try {
                            j.push(175);
                            var Ya = YB;
                            if (Xj[Ya(R8.R)](null, XM))
                                return '';
                            var XA, Xh, Xm, XV = {}, Xb = {}, XQ = '', Xw = '', XI = '', Xz = -0x23a3 + 0xb93 * -0x1 + -0xe71 * -0x3 + ME, Xf = -0x3b5 + -0x1823 + 0x1 * 0x1bdb, Xx = 0x1dcb + -0xc17 + -0x1597 * 0x1 + ME, XH = [], Xv = 0x1415 + -0x2 * 0x1101 + 0xded, XF = -0x2 * 0xf06 + 0x2107 + -0x2fb;
                            for (Xm = -0x1 * -0x212e + -0x1d41 * 0x1 + -0x5 * 0xc9; Xj[Ya(R8.M)](Xm, XM[Ya(R8.g)]); Xm += 0x1 * 0x1de6 + -0x3a1 * 0x1 + -0x1a44)
                                if (XQ = XM[Ya(R8.y)](Xm),
                                M['E'][Ya(R8.A)][Ya(R8.h)][Ya(R8.m) + Ya(R8.V)][Ya(R8.b)](XV, XQ) || (XV[XQ] = Xf,
                                Xf += 0x41 * 0x71 + 0x4c7 + -0x2177,
                                Xb[XQ] = !(0xe45 + -0x1 * -0x407 + -0x1631 + ME)),
                                Xw = Xj[Ya(R8.Q)](XI, XQ),
                                M['E'][Ya(R8.A)][Ya(R8.w)][Ya(R8.m) + Ya(R8.I)][Ya(R8.b)](XV, Xw))
                                    XI = Xw;
                                else {
                                    if (M['E'][Ya(R8.z)][Ya(R8.f)][Ya(R8.x) + Ya(R8.I)][Ya(R8.H)](Xb, XI)) {
                                        if (Xj[Ya(R8.v)](XI[Ya(R8.F)](0x745 * 0x2 + 0x8a1 + -0x1b10 + ME), 0x214a + 0x2 * -0x11f2 + 0x2 * 0x1cd)) {
                                            for (XA = 0x896 + -0x18a3 + 0x1 * 0x100d; Xj[Ya(R8.p)](XA, Xx); XA++)
                                                Xv <<= -0x1645 + -0x649 + -0x1c8f * -0x1,
                                                Xj[Ya(R8.e)](XF, Xj[Ya(R8.k)](Xg, 0xe04 + -0xb4d + -0x69b + ME)) ? (XF = 0x3d7 + 0x2dd + -0xa99 + ME,
                                                XH[Ya(R8.G)](Xj[Ya(R8.J)](Xy, Xv)),
                                                Xv = -0x17 * -0x149 + 0x1 * 0x169f + -0x342e) : XF++;
                                            for (Xh = XI[Ya(R8.d)](-0x1e35 + 0xa14 + 0x1 * 0x1421),
                                            XA = 0x5d8 + 0x22 * 0xf1 + 0x29bf * -0x1 + ME; Xj[Ya(R8.n)](XA, -0x1f * -0x51 + -0x6b9 * -0x3 + -0x2 * 0xef9); XA++)
                                                Xv = Xj[Ya(R8.S)](Xj[Ya(R8.c)](Xv, 0xed * 0x15 + -0x5 * 0x40f + -0x1 * -0xdb), Xj[Ya(R8.W)](0x569 + 0x11c3 * -0x1 + 0x1 * 0xc5b, Xh)),
                                                Xj[Ya(R8.l)](XF, Xj[Ya(R8.t)](Xg, 0xf5c * -0x1 + -0x1c1a + -0xe7d * -0x3)) ? (XF = 0x3 * 0x65 + -0x2246 + 0x1d32 + ME,
                                                XH[Ya(R8.G)](Xj[Ya(R8.r)](Xy, Xv)),
                                                Xv = 0x15a8 + -0x7cb + -0xddd) : XF++,
                                                Xh >>= 0xf79 * -0x2 + 0x8 * 0x77 + 0x1b3b * 0x1;
                                        } else {
                                            for (Xh = 0x39 * -0x2 + -0x20e5 + -0x184 * -0x16,
                                            XA = 0x21 * 0x41 + 0x230e + 0x3a4 * -0xd + ME; Xj[Ya(R8.N)](XA, Xx); XA++)
                                                Xv = Xj[Ya(R8.o)](Xj[Ya(R8.c)](Xv, 0x140d + 0x25b4 + -0x16 * 0x2a0), Xh),
                                                Xj[Ya(R8.R)](XF, Xj[Ya(R8.O)](Xg, 0x1dc5 + 0xf1e + -0x30c7 + ME)) ? (XF = 0x1de7 + 0x22c6 * -0x1 + 0x4df,
                                                XH[Ya(R8.T)](Xj[Ya(R8.C)](Xy, Xv)),
                                                Xv = -0x25 * 0x93 + -0x2e * -0x8c + -0x7ce + ME) : XF++,
                                                Xh = -0x6fd + -0x20b5 + -0x13d9 * -0x2;
                                            for (Xh = XI[Ya(R8.F)](-0x3 * 0x38b + -0x21cd + -0x481 * -0x9 + ME),
                                            XA = -0x36 * 0x40 + -0x482 * 0x1 + 0x1202; Xj[Ya(R8.P)](XA, 0x14 * 0x15f + 0x2187 + -0x40c8 + ME); XA++)
                                                Xv = Xj[Ya(R8.D)](Xj[Ya(R8.c)](Xv, -0x682 * -0x1 + 0x1abb + -0x84f * 0x4), Xj[Ya(R8.U)](-0x1 * -0x2519 + -0x5c4 + -0x2339 * 0x1 + ME, Xh)),
                                                Xj[Ya(R8.K)](XF, Xj[Ya(R8.t)](Xg, -0x150a + 0x1 * 0x2135 + -0xc2a)) ? (XF = -0x231c + -0x233e + -0x1 * -0x4275 + ME,
                                                XH[Ya(R8.q)](Xj[Ya(R8.B)](Xy, Xv)),
                                                Xv = 0xa65 * 0x3 + 0x11f + 0x1 * -0x2433 + ME) : XF++,
                                                Xh >>= -0x10 * 0x1bd + -0x1d * 0x145 + 0x40a2 * 0x1;
                                        }
                                        Xj[Ya(R8.a)](-0x319 * -0x5 + -0x1737 * -0x1 + -0x4 * 0x9ad, --Xz) && (Xz = M['E'][Ya(R8.L)][Ya(R8.X0)](0x117e * 0x1 + -0x3 * 0x76 + 0x2af * -0x6, Xx),
                                        Xx++),
                                        delete Xb[XI];
                                    } else {
                                        for (Xh = XV[XI],
                                        XA = -0x1 * 0x122b + 0x662 * 0x1 + 0xbc9; Xj[Ya(R8.P)](XA, Xx); XA++)
                                            Xv = Xj[Ya(R8.X1)](Xj[Ya(R8.X2)](Xv, -0x5b * -0x25 + -0x1 * -0x86 + -0x1191 + ME), Xj[Ya(R8.X3)](-0x1f0e + -0x860 + 0x238a + ME, Xh)),
                                            Xj[Ya(R8.R)](XF, Xj[Ya(R8.X4)](Xg, -0x1ae9 + -0x19b0 + 0x30b5 + ME)) ? (XF = 0x65c + -0xea3 + 0x462 + ME,
                                            XH[Ya(R8.G)](Xj[Ya(R8.X5)](Xy, Xv)),
                                            Xv = -0x1f09 + -0x8 * 0x1f7 + 0x2adc + ME) : XF++,
                                            Xh >>= -0x1a7a + -0x1d52 + 0x33e8 + ME;
                                    }
                                    Xj[Ya(R8.X6)](-0x102 * -0x19 + 0x3ef + -0x1d21, --Xz) && (Xz = M['E'][Ya(R8.X7)][Ya(R8.X8)](-0xbbd + -0x2014 + 0x13f7 * 0x2 + ME, Xx),
                                    Xx++),
                                    XV[Xw] = Xf,
                                    Xf += -0x17bb + -0xc7 * -0x1c + 0x1f8,
                                    XI = M['E'][Ya(R8.X9)](XQ);
                                }
                            if (Xj[Ya(R8.XX)]('', XI)) {
                                if (M['E'][Ya(R8.XY)][Ya(R8.XZ)][Ya(R8.x) + Ya(R8.V)][Ya(R8.Xu)](Xb, XI)) {
                                    if (Xj[Ya(R8.XE)](XI[Ya(R8.F)](-0x252c + -0x13be + 0x115 * 0x31 + ME), 0x144a * -0x1 + 0x123b + 0xd6 * -0x1 + ME)) {
                                        for (XA = -0x8fb + 0x2 * -0x1063 + 0x25dc + ME; Xj[Ya(R8.Xi)](XA, Xx); XA++)
                                            Xv <<= -0xc3 * -0x15 + 0x4a * 0x52 + -0x27b2 * 0x1,
                                            Xj[Ya(R8.Xs)](XF, Xj[Ya(R8.Xj)](Xg, -0x1ffd + 0x1 * 0xf92 + 0x4 * 0x41b)) ? (XF = -0xa67 + 0x11fc * 0x1 + -0x1 * 0x795,
                                            XH[Ya(R8.XR)](Xj[Ya(R8.XM)](Xy, Xv)),
                                            Xv = 0x1 * -0xb60 + -0x1f4f + 0x2aaf) : XF++;
                                        for (Xh = XI[Ya(R8.F)](-0x31 * -0x99 + 0x1690 * -0x1 + -0xa9e + ME),
                                        XA = -0x174f + 0x293 + 0x1df * 0x9 + ME; Xj[Ya(R8.Xi)](XA, -0x26 * -0x71 + 0x13d6 * 0x1 + -0x2494); XA++)
                                            Xv = Xj[Ya(R8.S)](Xj[Ya(R8.X2)](Xv, 0x20a5 + 0x1a * 0xf2 + -0x3938), Xj[Ya(R8.Xg)](0x9 * -0x2dd + -0x1c2c + 0x1af9 * 0x2, Xh)),
                                            Xj[Ya(R8.Xy)](XF, Xj[Ya(R8.t)](Xg, 0x12cb * -0x1 + 0xd13 * 0x1 + -0x125 * -0x5)) ? (XF = -0x24ee + 0x692 * -0x1 + 0x1 * 0x279b + ME,
                                            XH[Ya(R8.XA)](Xj[Ya(R8.Xh)](Xy, Xv)),
                                            Xv = -0x1058 + -0x5 * 0x4fd + 0x2 * 0x12b2 + ME) : XF++,
                                            Xh >>= 0x8ec + -0x239e + -0xb67 * -0x2 + ME;
                                    } else {
                                        for (Xh = -0x8ec + -0x13a1 + 0x1c8e,
                                        XA = 0x1 * 0x1ebf + -0xaac + 0x5fe * -0x4 + ME; Xj[Ya(R8.Xm)](XA, Xx); XA++)
                                            Xv = Xj[Ya(R8.XV)](Xj[Ya(R8.Xb)](Xv, -0x1 * -0x1592 + -0x3 * 0x773 + 0x32 * 0x4), Xh),
                                            Xj[Ya(R8.XQ)](XF, Xj[Ya(R8.Xw)](Xg, -0x1 * -0x44 + -0x1 * -0x1727 + -0x14d * 0x12)) ? (XF = -0x31 * 0x59 + -0x77a + 0xcb * 0x1a + ME,
                                            XH[Ya(R8.XI)](Xj[Ya(R8.Xz)](Xy, Xv)),
                                            Xv = -0x7 * -0xd9 + -0x232 * 0x5 + 0x1 * 0x50b) : XF++,
                                            Xh = -0xe95 + 0x3ed + -0x2aa * -0x4;
                                        for (Xh = XI[Ya(R8.Xf)](0xe * 0x151 + -0xbc0 + 0xa93 * -0x1 + ME),
                                        XA = -0xb * 0x2a3 + -0x48b + 0x1da7 + ME; Xj[Ya(R8.Xi)](XA, 0x2025 + 0xb30 + -0x2f2a + ME); XA++)
                                            Xv = Xj[Ya(R8.Xx)](Xj[Ya(R8.XH)](Xv, -0x2 * 0x29 + -0x1fb3 + 0x1c21 + ME), Xj[Ya(R8.Xv)](-0xf1 * -0x23 + -0x17b2 + -0x940, Xh)),
                                            Xj[Ya(R8.XF)](XF, Xj[Ya(R8.Xp)](Xg, 0x20d5 + -0x50a + -0x1bca)) ? (XF = 0x48a + -0x1738 + 0x12ae,
                                            XH[Ya(R8.q)](Xj[Ya(R8.Xe)](Xy, Xv)),
                                            Xv = -0x11 * 0x22 + 0x1ea3 + -0x2046 + ME) : XF++,
                                            Xh >>= 0x1e29 + 0x225e + 0xac1 * -0x6;
                                    }
                                    Xj[Ya(R8.e)](-0x4 * -0x8d2 + -0x5 * -0x395 + -0x11 * 0x321, --Xz) && (Xz = M['E'][Ya(R8.Xk)][Ya(R8.X0)](0x973 + 0xa * -0x368 + 0x1 * 0x189f, Xx),
                                    Xx++),
                                    delete Xb[XI];
                                } else {
                                    for (Xh = XV[XI],
                                    XA = -0x18a4 * -0x1 + 0xb55 + -0x23f9; Xj[Ya(R8.XG)](XA, Xx); XA++)
                                        Xv = Xj[Ya(R8.XJ)](Xj[Ya(R8.Xd)](Xv, 0xf + 0x247c + -0x286f + ME), Xj[Ya(R8.Xn)](0x1 * 0x2549 + -0xb1 * -0x37 + -0x4f34 + ME, Xh)),
                                        Xj[Ya(R8.R9)](XF, Xj[Ya(R8.RX)](Xg, -0x1657 + -0x1aa1 + -0x904 * -0x5 + ME)) ? (XF = -0x1d03 + -0xcfd + 0x2a0 * 0x10,
                                        XH[Ya(R8.XI)](Xj[Ya(R8.r)](Xy, Xv)),
                                        Xv = -0x98f + 0x1 * -0x106b + 0x19fa) : XF++,
                                        Xh >>= 0x151 * 0x1d + 0x120e + -0x1c1d * 0x2;
                                }
                                Xj[Ya(R8.RY)](0xd5b + -0x1096 + -0xaa + ME, --Xz) && (Xz = M['E'][Ya(R8.RZ)][Ya(R8.Ru)](0x1a4f + 0x29 * -0x40 + -0x100d, Xx),
                                Xx++);
                            }
                            for (Xh = 0xb40 + -0x2252 + 0x1714,
                            XA = -0x1bd * 0xd + -0x209a + 0x3733; Xj[Ya(R8.RE)](XA, Xx); XA++)
                                Xv = Xj[Ya(R8.Ri)](Xj[Ya(R8.X2)](Xv, 0x1250 + -0x527 + -0xd28), Xj[Ya(R8.Rs)](-0x2398 + 0x189a + -0xca * -0x9 + ME, Xh)),
                                Xj[Ya(R8.Rj)](XF, Xj[Ya(R8.RR)](Xg, -0x3 * -0xb5a + 0x1849 + -0x3a56)) ? (XF = 0x1687 + -0x33 * -0x32 + -0x207d,
                                XH[Ya(R8.RM)](Xj[Ya(R8.Rg)](Xy, Xv)),
                                Xv = 0x2 * -0x471 + -0x2f9 * -0x7 + 0x47 * -0x2b) : XF++,
                                Xh >>= 0xdab + -0x4a5 * -0x5 + -0x13 * 0x1f1;
                            for (; ; ) {
                                if (Xv <<= 0x1882 + 0xa7 * 0x11 + -0x2398,
                                Xj[Ya(R8.Ry)](XF, Xj[Ya(R8.RA)](Xg, -0xb + -0x1fbc + -0x18 * -0x153))) {
                                    XH[Ya(R8.G)](Xj[Ya(R8.Rh)](Xy, Xv));
                                    break;
                                }
                                XF++;
                            }
                            return XH[Ya(R8.Rm)]('');
                        } finally {
                            j.pop();
                        }
                    }(Xi, 0x1c7d + -0x3d0 + 0x1 * -0x18a7, function(XM) {
                        return x[XM];
                    });
                    return XR;
                } finally {
                    j.pop();
                }
            }
            !(function() {
                var RR = {
                    R: 0x2ef,
                    M: 0x28e,
                    g: 0x168,
                    y: 0x17d,
                    A: 0x152,
                    h: 0xfb,
                    m: 0x1dd,
                    V: 0x20b,
                    b: 0x2df,
                    Q: 0x266,
                    w: 0x2fa
                }
                  , Rj = {
                    R: 0x2ef,
                    M: 0x28e,
                    g: 0x25c,
                    y: 0x1a6,
                    A: 0x134,
                    h: 0x168,
                    m: 0x26b,
                    V: 0x17d,
                    b: 0x26c
                }
                  , RE = {
                    R: 0x1ff
                }
                  , Xi = {
                    'xFBPc': function(XM, Xg) {
                        try {
                            j.push(175);
                            var YL = u;
                            return R[YL(RY.R)](XM, Xg);
                        } finally {
                            j.pop();
                        }
                    },
                    'RsHcV': function(XM, Xg) {
                        try {
                            j.push(175);
                            var Z0 = u;
                            return R[Z0(RZ.R)](XM, Xg);
                        } finally {
                            j.pop();
                        }
                    },
                    'fQTvz': function(XM, Xg) {
                        try {
                            j.push(175);
                            var Z1 = u;
                            return R[Z1(Ru.R)](XM, Xg);
                        } finally {
                            j.pop();
                        }
                    },
                    'UAiaZ': function(XM, Xg) {
                        try {
                            j.push(175);
                            var Z2 = u;
                            return R[Z2(RE.R)](XM, Xg);
                        } finally {
                            j.pop();
                        }
                    },
                    'CJIao': function(XM, Xg) {
                        try {
                            j.push(175);
                            var Z3 = u;
                            return R[Z3(Ri.R)](XM, Xg);
                        } finally {
                            j.pop();
                        }
                    }
                };
                function Xs(XM) {
                    try {
                        j.push(175);
                        var Z4 = u;
                        return M['E'][Z4(Rs.R) + Z4(Rs.M)](XM[Z4(Rs.g)](/\+/g, '\x20'));
                    } finally {
                        j.pop();
                    }
                }
                function Xj(XM, Xg) {
                    try {
                        j.push(175);
                        var Z5 = u
                          , Xy = XM[Z5(Rj.R)](-0x108d * -0x1 + 0x3b3 + -0x1825 + ME)
                          , XA = Xg[Z5(Rj.M)](Xy);
                        return R[Z5(Rj.g)](Xy, XM) ? XA : XA[R[Z5(Rj.y)](XM = M['E'][Z5(Rj.A)](XM[Z5(Rj.h)](-0x4 * 0x1bb + -0x1247 * -0x1 + -0xf3f + ME), 0x12d1 + 0x884 + -0x1b4b), -0x1 * -0x3f5 + 0x22c1 + 0x3df * -0xa) ? R[Z5(Rj.m)](XA[Z5(Rj.V)], XM) : R[Z5(Rj.b)](XM, 0x2fd + -0xc5 * -0x19 + -0x1a1e * 0x1 + ME)];
                    } finally {
                        j.pop();
                    }
                }
                function XR(XM, Xg) {
                    try {
                        j.push(175);
                        var Z6 = u;
                        for (var Xy = XM[Z6(RR.R)](-0x2a * 0x24 + 0x1d * 0x8b + -0x1 * 0x9d7), XA = Xg[Z6(RR.M)]('&'), Xh = [], Xm = {}, XV = [], Xb = XM[Z6(RR.g)](0x1 * -0x2312 + 0x1 * -0x1e85 + 0x4 * 0x1066), XQ = 0xb17 + -0x197 * -0xb + -0x2079 + ME, Xw = XA[Z6(RR.y)]; Xi[Z6(RR.A)](XQ, Xw); XQ++)
                            if ((Xh = XA[XQ][Z6(RR.h)](/(.*?)=(.*)/)) || (Xh = [XA[XQ], XA[XQ], '']),
                            Xi[Z6(RR.m)]('', Xh[-0x1368 * 0x1 + 0x1 * -0x1c44 + 0x2bc8 + ME][Z6(RR.V)](/\s/g, ''))) {
                                if (Xh[0x4e6 + -0x1e0a + 0x1541 + ME] = Xi[Z6(RR.b)](Xs, Xh[-0x19b7 + -0x1 * -0x24a3 + -0xaea] || ''),
                                Xi[Z6(RR.Q)](Xb, Xh[0x1312 * -0x1 + 0x1378 + -0x65]))
                                    return Xh[0x8b1 + -0x1bec + -0x4 * -0x3d6 + ME];
                                (XV = Xh[-0x422 + 0x267f + -0x2641 + ME][Z6(RR.h)](/(.*)\[([0-9]+)\]/)) ? (Xm[XV[0x1f2a * 0x1 + -0x22a * 0x7 + -0x1003 * 0x1]] = Xm[XV[0x52 * -0x1d + 0x329 * 0x8 + 0x1 * -0xffd]] || [],
                                Xm[XV[0x1676 + -0x1de7 + 0x38d + ME]][XV[-0x1c9 * -0xd + 0x20fd + 0x7c * -0x74]] = Xh[-0x1 * -0x636 + -0x1 * -0x1bd9 + 0x1 * -0x220d]) : Xm[Xh[-0x6ee + -0xfe7 * -0x1 + -0xcdd + ME]] = Xh[-0x15bd + 0x1955 + -0x77b + ME];
                            }
                        return Xi[Z6(RR.w)](Xy, XM) ? Xm : Xm[Xb];
                    } finally {
                        j.pop();
                    }
                }
            }());
            var d = M['E'][Xc(MZ.Mi)];
            function n(Xi) {
                try {
                    j.push(175);
                    return {
    "protocol": "https:",
    "host": "xueqiu.com",
    "hostname": "xueqiu.com",
    "port": "",
    "pathname": "/7796248954/354282572",
    "search": "",
    "hash": "",
    "original": "https://xueqiu.com/7796248954/354282572"
};
                } finally {
                    j.pop();
                }
            }
            function S(Xi, Xs, Xj) {
                try {
                    j.push(175);
                    var Ry = {
                        R: 0x27a,
                        M: 0x294,
                        g: 0x1ac,
                        y: 0x1e6,
                        A: 0x27a
                    }
                      , Z9 = Xc
                      , XR = function(Xg) {
                        try {
                            j.push(175);
                            var Z8 = u;
                            return !(!Xg[Z8(Ry.R)] || R[Z8(Ry.M)](R[Z8(Ry.g)], Xg[Z8(Ry.R)]) && R[Z8(Ry.M)](R[Z8(Ry.y)], Xg[Z8(Ry.A)]));
                        } finally {
                            j.pop();
                        }
                    }(Xi)
                      , XM = Xi[Z9(RA.R)] || Xi[Z9(RA.M)];
                    return XR && R[Z9(RA.g)](0x35 * -0x4f + -0x16 * -0x18a + -0x1181, XM[Z9(RA.y)]('/')) && (XM = Xi[Z9(RA.R)][Z9(RA.A)](0x224e + -0x189 + 0x24a9 * -0x1 + ME)),
                    Xj ? R[Z9(RA.h)](R[Z9(RA.m)](Xi[Z9(RA.V)][Z9(RA.b)](':')[0x1dd9 + -0x57d * -0x2 + 0x7 * -0x5d5], XM), Xi[Z9(RA.Q)]) : R[Z9(RA.w)](R[Z9(RA.I)](R[Z9(RA.z)](R[Z9(RA.f)](Xi[Z9(RA.x)], XR ? '' : R[Z9(RA.H)]('//', Xi[Z9(RA.v)])), XM), Xi[Z9(RA.F)]), Xs ? '' : Xi[Z9(RA.p)] ? Xi[Z9(RA.e)] : '');
                } finally {
                    j.pop();
                }
            }
            function c(Xi, Xs) {
                try {
                    j.push(175);
                    var ZX = Xc
                      , Xj = R[ZX(Rh.R)][ZX(Rh.M)]('|')
                      , XR = 0x1598 * 0x1 + 0x2008 + -0x1 * 0x3985 + ME;
                    while (!![]) {
                        switch (Xj[XR++]) {
                        case '0':
                            return R[ZX(Rh.g)](-0x487 * -0x7 + 0x10ba + -0x306b, XM[ZX(Rh.y)]) ? XA[ZX(Rh.A)] = '' : XA[ZX(Rh.A)] = R[ZX(Rh.h)]('?', XM[ZX(Rh.m)]('&')),
                            R[ZX(Rh.V)](S, XA);
                        case '1':
                            for (var XM = [], Xg = -0x207c + 0x969 * -0x1 + 0x29e5; R[ZX(Rh.b)](Xg, Xy[ZX(Rh.Q)]); ++Xg)
                                R[ZX(Rh.w)](0x466 * -0x1 + 0x2190 + 0x1f * -0x111 + ME, Xy[Xg][ZX(Rh.I)](R[ZX(Rh.h)](Xs, '='))) || XM[ZX(Rh.z)](Xy[Xg]);
                            continue;
                        case '2':
                            if (!XA[ZX(Rh.A)])
                                return Xi;
                            continue;
                        case '3':
                            var Xy = XA[ZX(Rh.f)][ZX(Rh.x)](0x3 * 0x455 + -0x405 * 0x3 + -0xef * 0x1)[ZX(Rh.M)]('&');
                            continue;
                        case '4':
                            if (R[ZX(Rh.H)](-0x1 * -0x417 + 0x1 * 0x3ab + -0xba7 + ME, Xy[ZX(Rh.v)]))
                                return Xi;
                            continue;
                        case '5':
                            var XA = R[ZX(Rh.F)](n, Xi);
                            continue;
                        case '6':
                            if (R[ZX(Rh.p)](-(0x1 * -0x132d + 0x175f + 0xf * -0x8a + ME), Xi[ZX(Rh.e)](R[ZX(Rh.k)](Xs, '='))))
                                return Xi;
                            continue;
                        }
                        break;
                    }
                } finally {
                    j.pop();
                }
            }
            function W(Xi, Xs) {
                try {
                    j.push(175);
                    var ZY = Xc
                      , Xj = R[ZY(Rm.R)](R[ZY(Rm.M)](0x11a * -0x62 + -0x5c9 * 0x58 + 0x3690b, Xi), R[ZY(Rm.g)](-0x13718 + 0x1b421 + 0x82f6, Xs));
                    return R[ZY(Rm.y)](R[ZY(Rm.A)](R[ZY(Rm.h)](R[ZY(Rm.m)](R[ZY(Rm.V)](Xi, -0x22f3 + 0x2 * -0x11fb + 0x4314 + ME), R[ZY(Rm.b)](Xs, 0x30a * 0x6 + 0xec9 + -0x3b * 0x8f)), R[ZY(Rm.Q)](Xj, -0x40f * -0x7 + 0x1bcf + -0xe0a * 0x4)), 0x1 * 0x1e4d + 0x91 * -0x13 + -0x12 * 0x115), R[ZY(Rm.w)](-0x7b * -0x232 + 0x11 * 0xee3 + -0x10b1a, Xj));
                } finally {
                    j.pop();
                }
            }
            function l(Xi, Xs, Xj, XR, XM, Xg) {
                try {
                    j.push(175);
                    var ZZ = Xc;
                    return R[ZZ(RV.R)](W, R[ZZ(RV.M)](R[ZZ(RV.g)](Xy = R[ZZ(RV.y)](W, R[ZZ(RV.A)](W, Xs, Xi), R[ZZ(RV.h)](W, XR, Xg)), XA = XM), R[ZZ(RV.m)](Xy, R[ZZ(RV.V)](-0xcb0 * 0x3 + -0x1 * 0x1e05 + 0x4435, XA))), Xj);
                    var Xy, XA;
                } finally {
                    j.pop();
                }
            }
            function t(Xi, Xs, Xj, XR, XM, Xg, Xy) {
                try {
                    j.push(175);
                    var Zu = Xc;
                    return R[Zu(Rb.R)](l, R[Zu(Rb.M)](R[Zu(Rb.g)](Xs, Xj), R[Zu(Rb.y)](~Xs, XR)), Xi, Xs, XM, Xg, Xy);
                } finally {
                    j.pop();
                }
            }
            function r(Xi, Xs, Xj, XR, XM, Xg, Xy) {
                try {
                    j.push(175);
                    var ZE = Xc;
                    return R[ZE(RQ.R)](l, R[ZE(RQ.M)](R[ZE(RQ.g)](Xs, XR), R[ZE(RQ.y)](Xj, ~XR)), Xi, Xs, XM, Xg, Xy);
                } finally {
                    j.pop();
                }
            }
            function N(Xi, Xs, Xj, XR, XM, Xg, Xy) {
                try {
                    j.push(175);
                    var Zi = Xc;
                    return R[Zi(Rw.R)](l, R[Zi(Rw.M)](R[Zi(Rw.g)](Xs, Xj), XR), Xi, Xs, XM, Xg, Xy);
                } finally {
                    j.pop();
                }
            }
            function o(Xi, Xs, Xj, XR, XM, Xg, Xy) {
                try {
                    j.push(175);
                    var Zs = Xc;
                    return R[Zs(RI.R)](l, R[Zs(RI.M)](Xj, R[Zs(RI.g)](Xs, ~XR)), Xi, Xs, XM, Xg, Xy);
                } finally {
                    j.pop();
                }
            }
            function O(Xi, Xs) {
                try {
                    j.push(175);
                    var Zj = Xc
                      , Xj = R[Zj(Rz.R)][Zj(Rz.M)]('|')
                      , XR = -0x103 * 0x24 + -0xb * 0x33 + 0x22b8 + ME;
                    while (!![]) {
                        switch (Xj[XR++]) {
                        case '0':
                            Xi[R[Zj(Rz.g)](Xs, -0xca9 + 0x1 * -0x7f7 + 0x14a5)] |= R[Zj(Rz.y)](0x14c5 + 0x7 * 0x449 + -0x127 * 0x2f + ME, R[Zj(Rz.A)](Xs, -0xc02 + 0x19ac + 0x1 * -0x116f + ME)),
                            Xi[R[Zj(Rz.h)](0x52 * 0x5c + 0x163c + 0x3b * -0xf1 + ME, R[Zj(Rz.m)](R[Zj(Rz.V)](R[Zj(Rz.b)](Xs, 0x755 * -0x1 + -0x43 * 0x43 + 0x191e), -0x12a0 + -0x1a5c + 0x2d05), -0xf8b * 0x2 + -0x76 + -0x2 * -0xfc8))] = Xs;
                            continue;
                        case '1':
                            for (XM = -0x1 * -0xf82 + -0xd97 * 0x2 + -0x3e4 * -0x3; R[Zj(Rz.Q)](XM, Xi[Zj(Rz.w)]); XM += -0x172d * 0x1 + -0x274f + -0x23 * -0x1ad + ME)
                                Xg = Xm,
                                Xy = XV,
                                XA = Xb,
                                Xh = XQ,
                                Xm = R[Zj(Rz.I)](t, Xm, XV, Xb, XQ, Xi[XM], 0x24a2 + 0x66 * 0x2f + 0x3755 * -0x1, -(0x57b617 * 0xc7 + -0x199 * -0x13f220 + 0xe33593 * -0x43)),
                                XQ = R[Zj(Rz.z)](t, XQ, Xm, XV, Xb, Xi[R[Zj(Rz.f)](XM, -0x9e6 + 0x8ec + -0x2ea + ME)], 0x2fb + -0x505 * -0x7 + -0x2612 * 0x1, -(-0x10415c77 + -0x140bb4ae + -0x3b8559cf * -0x1)),
                                Xb = R[Zj(Rz.z)](t, Xb, XQ, Xm, XV, Xi[R[Zj(Rz.x)](XM, -0x1e15 + -0xb84 + 0x3 * 0xc92 + ME)], 0x12 * -0x1e8 + -0x142f + -0x6d2 * -0x8, -0x4169a1e8 + 0x2f0e020e + 0x3 * 0x12295ae7),
                                XV = R[Zj(Rz.H)](t, XV, Xb, XQ, Xm, Xi[R[Zj(Rz.v)](XM, -0x2240 + 0x1014 + -0x3a3 * -0x5)], -0x2601 + -0xb7 * 0xc + -0x397 * -0xd, -(-0x1a3 * -0x112935 + 0x54ad8a7d + 0xe * -0x39b8e83)),
                                Xm = R[Zj(Rz.F)](t, Xm, XV, Xb, XQ, Xi[R[Zj(Rz.p)](XM, -0x1b29 + 0x2 * 0x108c + -0x65 * 0xf)], 0x326 + 0x1f * 0x1d + -0x6 * 0x11b, -(-0xac3ac0c + -0xb46796b + 0x208e11e3 + ME)),
                                XQ = R[Zj(Rz.e)](t, XQ, Xm, XV, Xb, Xi[R[Zj(Rz.k)](XM, -0x47 * -0x47 + -0x2835 + -0x10a4 * -0x1 + ME)], -0xe * -0x38 + 0x80b * 0x1 + -0xef4 + ME, 0x1c0436c6 * -0x1 + 0xaad7d5a * -0x1 + -0xc3f467a * -0x9),
                                Xb = R[Zj(Rz.H)](t, Xb, XQ, Xm, XV, Xi[R[Zj(Rz.v)](XM, 0x1f23 + -0x1366 + -0xbb7)], 0x4fc * -0x5 + 0x3f6 + -0x1507 * -0x1, -(-0x777136c3 + 0x18bcf * 0x5c05 + 0x1 * 0x40fad1a5)),
                                XV = R[Zj(Rz.G)](t, XV, Xb, XQ, Xm, Xi[R[Zj(Rz.J)](XM, -0x2a * 0xce + -0x2f * -0x83 + 0x9c6)], -0x1813 + 0x1fe3 + -0x2e * 0x2b, -(0x4eb5287 * -0x1 + 0x59b18 * -0x63 + 0x9cfb7ce)),
                                Xm = R[Zj(Rz.I)](t, Xm, XV, Xb, XQ, Xi[R[Zj(Rz.d)](XM, -0x3 * 0xc8e + 0x19f8 + -0x7d5 * -0x1 + ME)], 0x1c97 * -0x1 + 0x2 * 0x119f + -0xa85 + ME, 0x22dcf * -0x93b + 0x8a55 * -0x13f3 + -0x2219430f * -0x4),
                                XQ = R[Zj(Rz.n)](t, XQ, Xm, XV, Xb, Xi[R[Zj(Rz.S)](XM, 0x1 * -0x3f + 0xfd6 + -0xf8e)], 0x1 * -0x293 + -0x1510 + 0x17af, -(-0xea7 * -0xd6455 + 0xc302a9b * 0x8 + 0x534b02d * -0x22)),
                                Xb = R[Zj(Rz.c)](t, Xb, XQ, Xm, XV, Xi[R[Zj(Rz.W)](XM, -0x21cd * -0x1 + -0x242 + -0x1f81)], 0x2 * 0x11e5 + -0x1 * -0x1349 + -0x3ae7 + ME, -(0xb89 * -0x17 + -0x1 * 0xe9a1 + 0x2935a + ME)),
                                XV = R[Zj(Rz.z)](t, XV, Xb, XQ, Xm, Xi[R[Zj(Rz.l)](XM, 0x9 * -0x41f + 0x2ff + -0x1 * -0x1e3e + ME)], 0x1ad9 + -0xa69 * 0x1 + 0x47 * -0x49 + ME, -(-0x1c797bd0 + -0xe03d23d * 0xd + -0x1 * -0x1494e4d46 + ME)),
                                Xm = R[Zj(Rz.t)](t, Xm, XV, Xb, XQ, Xi[R[Zj(Rz.r)](XM, 0x497 * 0x1 + -0x14a + -0x726 + ME)], 0xb * 0x2e9 + -0x1414 + -0xbe8, -0x1 * -0x35717669 + -0xbea4dc0c + 0xf4c376c5),
                                XQ = R[Zj(Rz.N)](t, XQ, Xm, XV, Xb, Xi[R[Zj(Rz.o)](XM, -0x9aa + -0x23e + 0x810 + ME)], 0x4 * 0x64f + 0x1eb3 + -0x39 * 0xfb, -(0x9c14c6 + -0x2fe467b + 0x4c9bc3d + ME)),
                                Xb = R[Zj(Rz.O)](t, Xb, XQ, Xm, XV, Xi[R[Zj(Rz.T)](XM, -0x8fe + -0x141e + 0x1945 + ME)], 0x1efe + 0xd9 * 0x1f + -0x3934, -(-0x1d * -0x3154fbb + 0x293 * -0x16c897 + 0x3ac30d13 + ME)),
                                Xm = R[Zj(Rz.C)](r, Xm, XV = R[Zj(Rz.P)](t, XV, Xb, XQ, Xm, Xi[R[Zj(Rz.D)](XM, 0xbe * 0x20 + 0x803 * -0x1 + -0x1393 + ME)], -0x235e + -0xdcf + 0x3143 * 0x1, 0x6 * -0x126e2652 + 0x6dac8441 * 0x1 + 0x4a9c65e7 + ME), Xb, XQ, Xi[R[Zj(Rz.U)](XM, 0x75 * 0x11 + 0x2 * 0x881 + 0xc63 * -0x2)], 0x7b9 + 0x2 * 0x4e3 + -0x117a, -(0x132249fb + -0x769a78f + -0x1d6c7ce)),
                                XQ = R[Zj(Rz.K)](r, XQ, Xm, XV, Xb, Xi[R[Zj(Rz.W)](XM, 0x4bf * 0x7 + 0x1e41 + -0x3f74)], -0x7fb + 0xa3b + 0x2 * -0x30e + ME, -(0x3b * -0x9fff17 + 0x3370b096 + 0x63ec77 * 0x7e + ME)),
                                Xb = R[Zj(Rz.q)](r, Xb, XQ, Xm, XV, Xi[R[Zj(Rz.B)](XM, 0x1f9a + 0x261c + 0x932 * -0x8 + ME)], 0xc6f + -0xdf * -0x1b + -0x72e * 0x5, 0x352 * 0x934f8 + 0x3c59e418 + -0x348d6937),
                                XV = R[Zj(Rz.t)](r, XV, Xb, XQ, Xm, Xi[XM], -0x1eaf + 0x136e + 0x770 + ME, -(0x1039283 * -0xd + -0x2454a811 + -0x23e62887 * -0x2)),
                                Xm = R[Zj(Rz.a)](r, Xm, XV, Xb, XQ, Xi[R[Zj(Rz.L)](XM, 0x9 * -0x1df + -0x8bf * 0x3 + 0x3b * 0xbb)], -0x16 + 0x21f8 + 0x6 * -0x64b + ME, -(0x19 * -0x30047bc + 0x208d10a5 + 0x605592b * 0xe)),
                                XQ = R[Zj(Rz.X0)](r, XQ, Xm, XV, Xb, Xi[R[Zj(Rz.X1)](XM, -0x2 * -0x12b9 + -0x2 * 0x21d + -0x212e)], 0x1b41 * -0x1 + 0x1ff + 0x1566 + ME, -0x116e9f * 0x22 + 0x44318bf + -0x6d73 * -0xbf + ME),
                                Xb = R[Zj(Rz.X2)](r, Xb, XQ, Xm, XV, Xi[R[Zj(Rz.X3)](XM, 0x2 * -0x1223 + 0x676 + 0x1ddf)], 0x16b0 + 0x39 * -0x76 + -0x41 + ME, -(0x638ade4 + 0xbf063e1 + -0x2d5 * -0x77d01 + ME)),
                                XV = R[Zj(Rz.X4)](r, XV, Xb, XQ, Xm, Xi[R[Zj(Rz.X5)](XM, -0x1db1 * -0x1 + -0x24a5 + 0x1 * 0x313 + ME)], 0xc18 + 0x164b + -0x2634 + ME, -(-0x348f * -0x427 + -0x33a6ac * 0x5f + 0x2a7ca043)),
                                Xm = R[Zj(Rz.X6)](r, Xm, XV, Xb, XQ, Xi[R[Zj(Rz.X7)](XM, 0xe3 * -0x9 + 0x196b + -0x129 * 0xf)], -0x4 * 0x7cf + 0x8b * 0x47 + 0x1d3 * -0x4, 0x4 * -0xc70df15 + -0x53 * -0xaadfc5 + -0x5a625df * -0x5),
                                XQ = R[Zj(Rz.X8)](r, XQ, Xm, XV, Xb, Xi[R[Zj(Rz.X9)](XM, 0x203a + 0x133 * 0xb + -0x1a * 0x1e5 + ME)], -0x6ff + 0xd * -0x1c3 + 0x1a0a + ME, -(0x7872cc8b + -0x17c90cb * -0x1b + 0x1af * -0x3b4756)),
                                Xb = R[Zj(Rz.XX)](r, Xb, XQ, Xm, XV, Xi[R[Zj(Rz.XY)](XM, -0x389 + -0x1295 + 0x123c + ME)], -0x136 * 0x19 + -0x468 + 0x1ed7 + ME, -(0x9af13eb + -0x267dee9 + 0x3e3b992 + ME)),
                                XV = R[Zj(Rz.XZ)](r, XV, Xb, XQ, Xm, Xi[R[Zj(Rz.Xu)](XM, 0x471 + 0xe72 + -0x16c0 + ME)], 0x1260 * 0x2 + 0x1c09 + -0x449a + ME, -0x7965daf3 + 0x1 * -0x3d954bbb + -0x49 * -0x374e4c3),
                                Xm = R[Zj(Rz.XZ)](r, Xm, XV, Xb, XQ, Xi[R[Zj(Rz.XE)](XM, 0x1057 * -0x1 + 0x14b5 + -0x451)], -0x69c + 0x3fb * -0x1 + 0xa9c, -(0x96e2b55a + 0x2 * -0x54ec2d69 + 0x6911b88e + ME)),
                                XQ = R[Zj(Rz.Xi)](r, XQ, Xm, XV, Xb, Xi[R[Zj(Rz.Xs)](XM, -0x1 * 0x18d1 + -0x2062 * -0x1 + -0x81 * 0xf)], 0x231f + 0x1d0 * -0x1 + -0x252b + ME, -(-0xfab7ca * 0x3 + -0x38f7d8d + 0xb * 0xde8bb9)),
                                Xb = R[Zj(Rz.e)](r, Xb, XQ, Xm, XV, Xi[R[Zj(Rz.X5)](XM, 0x1 * 0x1369 + 0x1f7d * -0x1 + 0xc1b)], -0x21 * 0x62 + -0x1 * -0x5c5 + -0x6eb * -0x1, 0x2083b96 * -0x10 + 0x80774d7d + 0x77b6ad7 + ME),
                                Xm = R[Zj(Rz.Xj)](N, Xm, XV = R[Zj(Rz.XR)](r, XV, Xb, XQ, Xm, Xi[R[Zj(Rz.XM)](XM, 0x2 * -0x6cf + 0x9 * 0x37d + -0x11bb)], -0x23ef + 0x2 * 0x325 + -0x3 * -0x89c + ME, -(-0x35041825 + 0xc57eaa * -0x79 + 0x10532a610 + ME)), Xb, XQ, Xi[R[Zj(Rz.Xg)](XM, 0x2599 + 0x73f * -0x2 + -0x1716)], -0x4ef * -0x2 + -0x4 * -0x2dd + -0x154e, -(-0x1f * 0x1f35 + 0x1 * -0x65746 + 0xfe18a + ME)),
                                XQ = R[Zj(Rz.Xy)](N, XQ, Xm, XV, Xb, Xi[R[Zj(Rz.XA)](XM, -0x1591 + 0x26bc * -0x1 + 0x3c55)], 0x1 * -0x795 + -0x1 * 0x26e0 + 0x2a9b + ME, -(0x7022fe93 + 0x45561a13 + -0x3ceb130c + ME)),
                                Xb = R[Zj(Rz.Xh)](N, Xb, XQ, Xm, XV, Xi[R[Zj(Rz.Xm)](XM, 0x57c + -0x35 * -0x77 + -0x1e14)], -0x280d + -0x2 * 0xaed + 0x3a12 + ME, 0x6724d353 + 0x96496f49 + -0x8fd0e17a),
                                XV = R[Zj(Rz.XV)](N, XV, Xb, XQ, Xm, Xi[R[Zj(Rz.Xu)](XM, 0x22ae + -0x1a * -0x6a + -0x3149 + ME)], -0x19e5 + -0x144b + 0x19 * 0x1b2 + ME, -(-0x65 * 0x26c75 + -0x1 * -0x13ce6f8 + 0x1 * 0x1d2ab25)),
                                Xm = R[Zj(Rz.Xb)](N, Xm, XV, Xb, XQ, Xi[R[Zj(Rz.XQ)](XM, -0x47 * 0x1d + -0x1d82 + 0xd1 * 0x2e)], -0x2c7 * 0x7 + 0x766 + 0x82a + ME, -(-0x86 * -0xfeb6b7 + -0x9d9e6898 + 0x6e * 0x10ce863)),
                                XQ = R[Zj(Rz.Xw)](N, XQ, Xm, XV, Xb, Xi[R[Zj(Rz.XI)](XM, 0x56 * -0x2b + -0x1920 + 0x2796)], -0x67 * -0x60 + -0x1e33 + -0x862, -0x773f7 * -0x916 + 0x92ad40f5 + -0x8a861b6b + ME),
                                Xb = R[Zj(Rz.X8)](N, Xb, XQ, Xm, XV, Xi[R[Zj(Rz.Xz)](XM, -0x1d08 + 0xdcc * -0x2 + 0x1 * 0x38a7)], 0x1 * 0xbab + -0x1f03 + 0x1368, -(0x1 * 0x75ce07a + 0xec0f5f + 0x29f57b * 0x6 + ME)),
                                XV = R[Zj(Rz.Xf)](N, XV, Xb, XQ, Xm, Xi[R[Zj(Rz.Xx)](XM, 0x182a + 0x264a + -0x424f + ME)], -0x27e7 + 0x1632 + -0x1 * -0xde7 + ME, -(-0x45aaf7a6 + -0x13f30 * 0x6785 + 0x107fd5b41 + ME)),
                                Xm = R[Zj(Rz.XH)](N, Xm, XV, Xb, XQ, Xi[R[Zj(Rz.Xv)](XM, 0x1c1c + -0x1a8 * 0x1 + -0x1a67)], 0xb23 + 0x13ba + 0x1 * -0x22be + ME, -0x3447fa14 + 0x2 * 0x1262490d + -0x13715 * -0x2e2f + ME),
                                XQ = R[Zj(Rz.z)](N, XQ, Xm, XV, Xb, Xi[XM], -0x7d6 + -0x527 + 0xd08, -(-0x7 * -0x4156ea4 + 0x2341e016 + -0x2a791271 + ME)),
                                Xb = R[Zj(Rz.XF)](N, Xb, XQ, Xm, XV, Xi[R[Zj(Rz.XQ)](XM, 0x13 * -0x205 + 0x3fb * 0x1 + 0x1e82 + ME)], 0x102e + 0x6 * -0x31f + 0x7 * -0x2f + ME, -(0x52ba5c81 + -0x122e8a25 + -0x157b06c6 + ME)),
                                XV = R[Zj(Rz.Xp)](N, XV, Xb, XQ, Xm, Xi[R[Zj(Rz.Xe)](XM, -0x1c45 + -0x40 * 0x8c + 0x3b66 + ME)], -0xbb7 + -0x1a87 * -0x1 + -0xeb9, 0x2275a40 + 0x32 * 0x1cc15f + -0x33d05ae + ME),
                                Xm = R[Zj(Rz.Xk)](N, Xm, XV, Xb, XQ, Xi[R[Zj(Rz.XG)](XM, -0xc15 + -0x17fb * 0x1 + 0x3 * 0xabc + ME)], 0xeab + 0x3 * -0xa23 + -0x2 * -0x7e1, -(0x36206b1e + 0x69344a2 * -0x1 + 0x22 * -0x46a57d + ME)),
                                XQ = R[Zj(Rz.XJ)](N, XQ, Xm, XV, Xb, Xi[R[Zj(Rz.X5)](XM, 0x389 * 0xb + 0x4a7 * -0x2 + -0x1 * 0x1d89)], -0x2626 + -0xbc6 + 0x2e12 + ME, -(0x1c * -0x7ebb51 + -0x91508fb * -0x1 + -0x2 * -0xef5ecfe)),
                                Xb = R[Zj(Rz.Xd)](N, Xb, XQ, Xm, XV, Xi[R[Zj(Rz.Xn)](XM, -0x95 * -0x32 + 0x58 * -0x5b + 0xbf * 0x3)], -0x1d35 + -0x1c4 + 0x1f09 * 0x1, 0x2b3af3 * -0x14f + -0x29 * 0x37d519 + -0xb2b * -0x8b2e2),
                                Xm = R[Zj(Rz.Rf)](o, Xm, XV = R[Zj(Rz.Rx)](N, XV, Xb, XQ, Xm, Xi[R[Zj(Rz.RH)](XM, -0x2409 + -0x22f4 * 0x1 + -0x19 * -0x2d7)], -0x3 * 0x5c6 + 0x22f2 + -0xab7 * 0x2 + ME, -(-0x1bd0d71b + -0x7 * 0xc3fa457 + -0xcc7be * -0xd87 + ME)), Xb, XQ, Xi[XM], 0x4 * 0x97a + 0x1f76 + -0x7 * 0x9e8, -(-0x1200d595 + -0xf42c71d + 0x2d1a7689 + ME)),
                                XQ = R[Zj(Rz.Rv)](o, XQ, Xm, XV, Xb, Xi[R[Zj(Rz.RF)](XM, -0xc2d + 0x33 * -0xc + 0xe98)], -0x1da4 + 0x1 * -0x1bdc + 0x398a, 0xb * 0x27215a2 + -0x309f482c * 0x1 + 0x3 * 0x1da11def),
                                Xb = R[Zj(Rz.Rp)](o, Xb, XQ, Xm, XV, Xi[R[Zj(Rz.RH)](XM, 0x1 * -0xc07 + 0x64 * -0x19 + 0x15d9)], -0x20d4 + 0x177c + 0x967, -(-0x7d * -0x6005f9 + 0x6a3fdfd8 + -0x44b6f1f9 + ME)),
                                XV = R[Zj(Rz.Re)](o, XV, Xb, XQ, Xm, Xi[R[Zj(Rz.Rk)](XM, 0x16e8 + 0x1d7d * 0x1 + -0xb41 * 0x5 + ME)], 0x89 * -0x2 + -0x1 * -0x177b + 0x1654 * -0x1, -(-0x2ee0ed9 + 0x33ecab8 + 0x31ba003 + ME)),
                                Xm = R[Zj(Rz.RG)](o, Xm, XV, Xb, XQ, Xi[R[Zj(Rz.RJ)](XM, 0x167 + 0x89a + -0x3 * 0x49e + ME)], 0xb * -0xa7 + 0x35 * -0x91 + -0x18 * -0x18d, -0x1deb46db * 0x3 + -0x1b1c61 * 0x89 + 0xcd9f5e3d),
                                XQ = R[Zj(Rz.t)](o, XQ, Xm, XV, Xb, Xi[R[Zj(Rz.Rd)](XM, 0x1 * 0x265f + 0xa22 + -0x3 * 0x102a)], -0x26c4 + 0x2 * 0xf0 + 0x2109 + ME, -(-0x422674b + 0xdb63bb77 + -0x664e24a3 + ME)),
                                Xb = R[Zj(Rz.Rn)](o, Xb, XQ, Xm, XV, Xi[R[Zj(Rz.RS)](XM, 0xf * 0x14 + 0x11 * 0x1cd + 0x9 * -0x387)], 0xdd5 + 0x2509 + -0x36b4 + ME, -(0x14784 * -0x19 + -0x1 * 0x6b43c + 0x9d * 0x593f)),
                                XV = R[Zj(Rz.Rc)](o, XV, Xb, XQ, Xm, Xi[R[Zj(Rz.RW)](XM, 0x1b1d + 0x110e + -0x2c2a)], 0x881 + 0x35 * -0x71 + 0xef9, -(0x1 * 0xc86460fb + 0xc9a2eea6 + -0x1178bb157 + ME)),
                                Xm = R[Zj(Rz.c)](o, Xm, XV, Xb, XQ, Xi[R[Zj(Rz.RH)](XM, 0xa3 + 0xafd * 0x1 + -0xb98)], -0x1a6a + 0x802 + 0x3d * 0x3d + ME, -0x886e3a6 * -0xb + -0x1 * -0x4a62c3f1 + -0x34ee6 * 0x1116),
                                XQ = R[Zj(Rz.Rl)](o, XQ, Xm, XV, Xb, Xi[R[Zj(Rz.Rt)](XM, -0x288 * -0xa + -0x16ae + -0x293)], -0xfa9 + -0x2 * -0x1b7 + -0x1 * -0xc45, -(0x5 * -0x69c2b3 + 0x3545 * -0x27a + 0x467cf9c + ME)),
                                Xb = R[Zj(Rz.Rr)](o, Xb, XQ, Xm, XV, Xi[R[Zj(Rz.RN)](XM, -0x8 * 0x2e + 0x1 * -0x3a9 + 0x51f)], -0x1b99 + -0x151b * 0x1 + 0x2cde + ME, -(-0x377 * 0x252f9b + 0x3ea1 * -0x2cb37 + 0x18ccfce90)),
                                XV = R[Zj(Rz.Ro)](o, XV, Xb, XQ, Xm, Xi[R[Zj(Rz.RO)](XM, -0x2 * -0x1131 + 0xd65 + -0x3 * 0x1135 + ME)], 0x17b * 0xb + 0x2314 + 0x88c * -0x6, 0x8eed41f5 + -0x4 * -0x2187ceb3 + -0xc7046f05 + ME),
                                Xm = R[Zj(Rz.RT)](o, Xm, XV, Xb, XQ, Xi[R[Zj(Rz.XM)](XM, 0x5 * 0x9f + -0x172 * 0x9 + 0x1 * 0x9eb)], -0x193b * 0x1 + -0x1e01 + -0xb * -0x506, -(-0x4dc8 * 0x19cb + 0x853274 * 0x9 + 0x9fba * 0x12f5)),
                                XQ = R[Zj(Rz.RC)](o, XQ, Xm, XV, Xb, Xi[R[Zj(Rz.RP)](XM, -0x2ab * -0x3 + -0x17e1 * -0x1 + -0x23bc + ME)], -0xa57 + 0x3ab * 0x1 + 0x2d1 + ME, -(0x1 * -0x4b6582a4 + 0x169c55d0 + 0x778e36ba + ME)),
                                Xb = R[Zj(Rz.RD)](o, Xb, XQ, Xm, XV, Xi[R[Zj(Rz.RU)](XM, 0x200b + 0x5 * -0x6ff + -0xf3 + ME)], -0x341 + 0x170 + 0x1e0, -0x23868e03 * -0x1 + 0x1a8b29ba + -0x1 * 0x1339e502),
                                XV = R[Zj(Rz.RK)](o, XV, Xb, XQ, Xm, Xi[R[Zj(Rz.Rq)](XM, 0x197 * -0x3 + -0x62 * -0x37 + -0x340 * 0x5)], -0x131c + -0x1dd7 + 0x3108, -(0x6a3 * 0x251fa + -0x150485d2 + 0x1a17a02e + ME)),
                                Xm = R[Zj(Rz.RB)](W, Xm, Xg),
                                XV = R[Zj(Rz.Ra)](W, XV, Xy),
                                Xb = R[Zj(Rz.Ra)](W, Xb, XA),
                                XQ = R[Zj(Rz.RL)](W, XQ, Xh);
                            continue;
                        case '2':
                            return [Xm, XV, Xb, XQ];
                        case '3':
                            var XM, Xg, Xy, XA, Xh;
                            continue;
                        case '4':
                            var Xm = 0x1 * -0x53017057 + 0x3d29b9d8 + 0x7d1cd980
                              , XV = -(-0x584d216 + 0x12 * 0xfee6aa + -0x1 * -0x3caeab4 + ME)
                              , Xb = -(-0x3bab0ed3 * 0x2 + 0x935eba36 + 0x1 * 0x4b3c828d + ME)
                              , XQ = -0x189406b9 + 0xe55137d + -0x1a7143cd * -0x1 + ME;
                            continue;
                        }
                        break;
                    }
                } finally {
                    j.pop();
                }
            }
            function T(Xi) {
                try {
                    j.push(175);
                    var ZR = Xc, Xs, Xj = '', XR = R[ZR(Rf.R)](-0x23d5 + -0xff6 + 0x1 * 0x3006 + ME, Xi[ZR(Rf.M)]);
                    for (Xs = -0x5c2 * -0x1 + -0x15d4 + 0xc2d + ME; R[ZR(Rf.g)](Xs, XR); Xs += 0x581 * -0x6 + 0x1639 + -0x1 * -0x6f0 + ME)
                        Xj += M['E'][ZR(Rf.y)][ZR(Rf.A) + 'de'](R[ZR(Rf.h)](R[ZR(Rf.m)](Xi[R[ZR(Rf.V)](Xs, 0x1670 + -0x1 * 0x6d9 + -0x1 * 0xf92)], R[ZR(Rf.b)](Xs, -0x235f * 0x1 + 0x14ae + 0x1 * 0xaec + ME)), -0x1 * -0x221 + -0x5 * -0x506 + 0x118 * -0x18));
                    return Xj;
                } finally {
                    j.pop();
                }
            }
            function C(Xi) {
                try {
                    j.push(175);
                    var ZM = Xc
                      , Xs = R[ZM(Rx.R)][ZM(Rx.M)]('|')
                      , Xj = 0x1357 * 0x2 + 0x56d * 0x1 + 0x1 * -0x2c1b;
                    while (!![]) {
                        switch (Xs[Xj++]) {
                        case '0':
                            var XR, XM = [];
                            continue;
                        case '1':
                            for (XR = -0x1c71 + -0x1ba2 + 0x3813; R[ZM(Rx.g)](XR, Xg); XR += -0x4 * -0x29b + 0xff7 + -0x1e40 + ME)
                                XM[R[ZM(Rx.y)](XR, -0xc92 + 0x1a67 * 0x1 + 0x3 * -0x5e7 + ME)] |= R[ZM(Rx.A)](R[ZM(Rx.h)](0x207 * 0x9 + -0x295 * -0x1 + -0x1 * 0x13d5, Xi[ZM(Rx.m)](R[ZM(Rx.V)](XR, -0x2 * -0x2a1 + -0x1 * -0x491 + -0xdb0 + ME))), R[ZM(Rx.b)](XR, 0x1 * -0x1467 + -0x1c83 + 0x2 * 0x1885));
                            continue;
                        case '2':
                            var Xg = R[ZM(Rx.Q)](0x7d3 * 0x1 + 0x15d3 + -0x2183 + ME, Xi[ZM(Rx.w)]);
                            continue;
                        case '3':
                            return XM;
                        case '4':
                            for (XM[R[ZM(Rx.I)](R[ZM(Rx.z)](Xi[ZM(Rx.f)], 0x1 * -0x15bb + 0xe * 0xbf + 0x766 + ME), 0x56 * -0x59 + -0x2 * -0x122e + -0xa5a + ME)] = void (0x1502 + 0x1fa3 + 0x388a * -0x1 + ME),
                            XR = 0x1757 + -0x11e4 + -0x958 + ME; R[ZM(Rx.x)](XR, XM[ZM(Rx.H)]); XR += -0x1268 + -0x83 * 0x29 + 0x4 * 0x9d9)
                                XM[XR] = 0x67 * -0x27 + 0x1 * 0x5cf + -0x2 * -0x4f1;
                            continue;
                        }
                        break;
                    }
                } finally {
                    j.pop();
                }
            }
            function P(Xi) {
                try {
                    j.push(175);
                    var Zg = Xc, Xs, Xj, XR = '';
                    for (Xj = -0x1f2c + 0x4bd * -0x1 + 0x2 * 0x1002 + ME; R[Zg(RH.R)](Xj, Xi[Zg(RH.M)]); Xj += 0x2 * 0x986 + 0x1a24 + -0x2d2f)
                        Xs = Xi[Zg(RH.g)](Xj),
                        XR += R[Zg(RH.y)](R[Zg(RH.A)][Zg(RH.h)](R[Zg(RH.m)](R[Zg(RH.V)](Xs, -0xe72 + -0x255 + 0xce6 + ME), 0x11ed + 0xa08 * 0x3 + 0xe * -0x36d)), R[Zg(RH.A)][Zg(RH.h)](R[Zg(RH.b)](-0x22f9 + 0x52f * 0x1 + 0x1dd9, Xs)));
                    return XR;
                } finally {
                    j.pop();
                }
            }
            function D(Xi) {
                try {
                    j.push(175);
                    var Zy = Xc;
                    return M['E'][Zy(Rv.R)](M['E'][Zy(Rv.M) + Zy(Rv.g)](Xi));
                } finally {
                    j.pop();
                }
            }
            function U(Xi) {
                try {
                    j.push(175);
                    var Re = {
                        R: 0x2e5
                    }
                      , RF = {
                        R: 0x255
                    }
                      , ZQ = Xc
                      , Xs = {
                        'WOlyS': function(Xj, XR) {
                            try {
                                j.push(175);
                                var ZA = u;
                                return R[ZA(RF.R)](Xj, XR);
                            } finally {
                                j.pop();
                            }
                        },
                        'BUdky': function(Xj, XR, XM) {
                            try {
                                j.push(175);
                                var Zh = u;
                                return R[Zh(Rp.R)](Xj, XR, XM);
                            } finally {
                                j.pop();
                            }
                        },
                        'mfEIG': function(Xj, XR) {
                            try {
                                j.push(175);
                                var Zm = u;
                                return R[Zm(Re.R)](Xj, XR);
                            } finally {
                                j.pop();
                            }
                        },
                        'UtnxZ': function(Xj, XR) {
                            try {
                                j.push(175);
                                var ZV = u;
                                return R[ZV(Rk.R)](Xj, XR);
                            } finally {
                                j.pop();
                            }
                        }
                    };
                    return function(Xj) {
                        try {
                            j.push(175);
                            var Zb = u;
                            return Xs[Zb(RG.R)](T, Xs[Zb(RG.M)](O, Xs[Zb(RG.g)](C, Xj), Xs[Zb(RG.y)](-0x1 * -0xfa1 + -0x9ef * 0x2 + 0x1 * 0x445, Xj[Zb(RG.A)])));
                        } finally {
                            j.pop();
                        }
                    }(R[ZQ(RJ.R)](D, Xi));
                } finally {
                    j.pop();
                }
            }
            function K(Xi) {
                try {
                    j.push(175);
                    var Zw = Xc;
                    return R[Zw(Rd.R)](P, R[Zw(Rd.M)](U, Xi));
                } finally {
                    j.pop();
                }
            }
            var q = K
              , B = function(Xi) {
                try {
                    j.push(175);
                    var ZI = Xc;
                    for (var Xs = Xi[ZI(Rn.R)](), Xj = R[ZI(Rn.M)](Xs[ZI(Rn.g)], 0x2511 * -0x1 + 0x1 * -0x1281 + 0x33ae + ME); R[ZI(Rn.y)](Xj, -0x152d + 0x103a + 0x10e + ME); Xj--) {
                        var XR = M['E'][ZI(Rn.A)][ZI(Rn.h)](R[ZI(Rn.m)](M['E'][ZI(Rn.A)][ZI(Rn.V)](), R[ZI(Rn.b)](Xj, -0x828 + -0x799 + -0x1 * -0xfc2)))
                          , XM = Xs[XR];
                        Xs[XR] = Xs[Xj],
                        Xs[Xj] = XM;
                    }
                    return Xs[ZI(Rn.Q)],
                    Xs;
                } finally {
                    j.pop();
                }
            }
              , a = [0x23 * 0x2c8f203 + 0xb7011bc4 + 0x1474b * -0x9133 + ME, -0xa87f7f * 0x16f + 0x926598e2 + 0x1 * 0x13dd09f4f + ME, 0x1fa69ec + 0x7c6fc * -0x47 + 0x2d2749f * 0x2 + ME, 0x4ddec31 + -0x3b78 * -0x11cd + 0x75044f * -0x6 + ME, 0x13643 * -0xf94a + 0xb0758dca + -0x2 * -0x98f99c1d + ME, -0x17998b1 * 0x2 + -0x1509cbf48 + 0x20c07b7b6 + ME, 0x1f47f * -0x18d9 + -0x1 * -0x3aae32fd + 0xc1 * 0x28442b, -0x8a * -0x3f3844 + 0x3d * 0x318d544 + 0x1b0f1d3 * -0x49];
            function L() {
                try {
                    j.push(175);
                    var RW = {
                        R: 0x1eb,
                        M: 0x201,
                        g: 0x209,
                        y: 0x1ad,
                        A: 0x2ed,
                        h: 0x307,
                        m: 0x1ad,
                        V: 0x204,
                        b: 0x1ad,
                        Q: 0xfe
                    }
                      , Zz = Xc
                      , Xi = R[Zz(Rl.R)][Zz(Rl.M)]('|')
                      , Xs = -0x8b3 * -0x1 + -0x2832 + -0x1 * -0x1b9a + ME;
                    while (!![]) {
                        switch (Xi[Xs++]) {
                        case '0':
                            if (M['E'][Zz(Rl.g)] && M['E'][Zz(Rl.g)][Zz(Rl.y)]) {
                                var Xj = new Error()
                                  , XR = {};
                                XR[Zz(Rl.A) + 'le'] = !(-0x2ed * -0xa + -0x1 * -0x647 + -0x2388),
                                XR[Zz(Rl.h)] = !(0x833 + 0x1e9 + -0xa1b * 0x1),
                                XR[Zz(Rl.m)] = function() {
                                    return Xg = -0x1 * -0x791 + -0x775 + -0x10 * 0x40 + ME,
                                    '';
                                }
                                ,
                                (M['E'][Zz(Rl.V)][Zz(Rl.b) + Zz(Rl.Q)](Xj, R[Zz(Rl.w)], XR),
                                M['E'][Zz(Rl.I)][Zz(Rl.z)](Xj));
                            }
                            continue;
                        case '1':
                            var XM = [];
                            continue;
                        case '2':
                            return L = function() {
                                try {
                                    j.push(175);
                                    var Zf = Zz;
                                    return XM[Zf(Rc.R)]();
                                } finally {
                                    j.pop();
                                }
                            }
                            ,
                            XM[Zz(Rl.f)]();
                        case '3':
                            XM[Zz(Rl.x)](Xg),
                            XM[Zz(Rl.x)](Xy[Zz(Rl.H)] && Xy[Zz(Rl.v)][Zz(Rl.F)]),
                            XM[Zz(Rl.x)](XV),
                            XM[Zz(Rl.x)](Xy[Zz(Rl.p)]),
                            XM[Zz(Rl.e)](Xy[Zz(Rl.k) + 'm']),
                            XM[Zz(Rl.e)](Xy[Zz(Rl.G)] && Xy[Zz(Rl.J)][Zz(Rl.d) + Zz(Rl.n)]),
                            XM[Zz(Rl.S)](Xy[Zz(Rl.c)]),
                            XM[Zz(Rl.W)](Xy[Zz(Rl.l)]),
                            XM[Zz(Rl.t)](Xh),
                            XM[Zz(Rl.r)](Xy[Zz(Rl.N)]),
                            XM[Zz(Rl.e)](Xy[Zz(Rl.o) + Zz(Rl.O)]),
                            XM[Zz(Rl.T)](Xy[Zz(Rl.C)]),
                            XM[Zz(Rl.W)](Xy[Zz(Rl.P) + Zz(Rl.D) + 'n']),
                            XM[Zz(Rl.S)](Xy[Zz(Rl.U) + 'd']),
                            XM[Zz(Rl.K)](Xy[Zz(Rl.q) + Zz(Rl.B)]),
                            XM[Zz(Rl.a)](Xy[Zz(Rl.L) + 's']),
                            XM[Zz(Rl.X0)](Xy[Zz(Rl.X1) + 'e']);
                            continue;
                        case '4':
                            var Xg = -0x1b8a + 0x19 * -0x15d + 0x3d9f;
                            continue;
                        case '5':
                            XA && XA[Zz(Rl.X2) + Zz(Rl.X3)] && M['E'][Zz(Rl.V)][Zz(Rl.X4)](XA)[Zz(Rl.X5)](function(Xb) {
                                try {
                                    j.push(175);
                                    var Zx = Zz
                                      , XQ = XA[Xb];
                                    (R[Zx(RW.R)](0x1c49 + 0xc8f + -0x28d8, Xb[Zx(RW.M)](R[Zx(RW.g)])) || XQ && XQ[Zx(RW.y) + Zx(RW.A)](R[Zx(RW.h)]) && XQ[Zx(RW.m) + Zx(RW.A)](R[Zx(RW.V)]) && XQ[Zx(RW.b) + Zx(RW.A)](R[Zx(RW.Q)])) && (XV = -0x270d + 0xe16 * -0x1 + 0x313f + ME);
                                } finally {
                                    j.pop();
                                }
                            });
                            continue;
                        case '6':
                            var Xy = M['E']
                              , XA = Xy[Zz(Rl.X6)]
                              , Xh = '';
                            continue;
                        case '7':
                            for (var Xm = -0x2e * -0x10 + -0x1e69 * -0x1 + 0x1 * -0x2149; R[Zz(Rl.X7)](Xm, XM[Zz(Rl.X8)]); ++Xm)
                                XM[Xm] = XM[Xm] ? -0xefa + 0x552 + 0x5c4 + ME : 0x262f + -0x8e4 + -0x1d4b;
                            continue;
                        case '8':
                            var XV = 0x165a * 0x1 + 0x1058 + -0x2a97 * 0x1 + ME;
                            continue;
                        case '9':
                            try {
                                Xh = XA[Zz(Rl.X9) + Zz(Rl.XX)][Zz(Rl.XY) + 'te'] && XA[Zz(Rl.XZ) + Zz(Rl.XX)][Zz(Rl.XY) + 'te'](R[Zz(Rl.Xu)]);
                            } catch (Xb) {}
                            continue;
                        }
                        break;
                    }
                } finally {
                    j.pop();
                }
            }
            function X0() {
                try {
                    j.push(175);
                    var Rt = {
                        R: 0x18a,
                        M: 0x225,
                        g: 0x17d,
                        y: 0x130,
                        A: 0x28c,
                        h: 0x201
                    }
                      , ZH = Xc
                      , Xi = R[ZH(RN.R)](L);
                    return Xi[ZH(RN.M)],
                    Xi[ZH(RN.g)](R[ZH(RN.y)](R[ZH(RN.A)](H), 0x1 * 0x25a6 + -0xe75 + -0x1731 + 0.5) ? -0xd * 0x18f + 0x19cb + -0x1 * 0x587 : -0x1 * -0x6d7 + 0x55f + 0x24d * -0x7 + ME),
                    Xi[ZH(RN.h)](-0x1 * 0x214f + -0x2584 + 0x42ef + ME),
                    Xi[ZH(RN.g)](M['E'][ZH(RN.m)][ZH(RN.V)](R[ZH(RN.b)](R[ZH(RN.Q)](new M['E'][(ZH(RN.w))]()[ZH(RN.I)](), 0x1b75 + -0x11 * 0x97 + 0x31 * -0x5b + ME), 0x4b0 + 0x1b2a + -0x23bd + ME))),
                    Xi[ZH(RN.g)](R[ZH(RN.z)](R[ZH(RN.f)](H), 0x5 * 0x335 + 0x490 + -0x187e + ME + 0.5) ? 0xa24 + 0x1bf3 + -0x2616 : -0x4 * 0x51a + 0x11ff + 0x269),
                    Xi[ZH(RN.x)],
                    Xi = R[ZH(RN.H)](G, Xi[ZH(RN.v)]((function() {
                        try {
                            j.push(175);
                            var Zv = ZH;
                            for (var Xs = R[Zv(Rt.R)](z), Xj = [], XR = -0x17f + -0x16fb + 0x1495 + ME; R[Zv(Rt.M)](XR, a[Zv(Rt.g)]); ++XR)
                                Xj[Zv(Rt.y)](R[Zv(Rt.A)](Xs[Zv(Rt.h)](a[XR]), -(0x2 * -0xc5 + 0x5 * -0x55d + 0x1877 + ME)) ? 0x189d + -0x1 * 0x1199 + -0xae8 + ME : 0xe31 * 0x1 + 0x11 * -0x22c + 0xfd * 0x17);
                            return Xj;
                        } finally {
                            j.pop();
                        }
                    }()))),
                    R[ZH(RN.F)](e),
                    function(Xs) {
                        try {
                            j.push(175);
                            var ZF = ZH;
                            for (var Xj = 0xd6b + 0x1e * -0x47 + -0x519, XR = 0x2 * 0xd19 + -0x1dbd * -0x1 + -0x37ef; R[ZF(Rr.R)](XR, Xs[ZF(Rr.M)]); ++XR)
                                Xj |= R[ZF(Rr.g)](Xs[XR] ? 0xe51 + -0x7 * -0x9d + -0x1e0 * 0xc + ME : -0x4 * 0x783 + -0x20e5 + 0x3ef1, XR);
                            return Xj;
                        } finally {
                            j.pop();
                        }
                    }(Xi);
                } finally {
                    j.pop();
                }
            }
            var X1 = [R[Xc(MZ.Ms)], R[Xc(MZ.Mj)], R[Xc(MZ.MR)], R[Xc(MZ.MM)], R[Xc(MZ.Mg)], R[Xc(MZ.My)], R[Xc(MZ.MA)], R[Xc(MZ.Mh)], R[Xc(MZ.Ms)]]
              , X2 = {}
              , X3 = {};
            function X4(Xi) {
                try {
                    j.push(175);
                    var Zp = Xc
                      , Xs = Xi[Zp(Ro.R)](-0x1a8 * -0xb + 0x1383 + 0x25ab * -0x1)[Zp(Ro.M) + 'e']();
                    return R[Zp(Ro.g)](Xs[Zp(Ro.y)], -0x15e3 + -0x24f5 + 0x3ada) && (Xs = R[Zp(Ro.A)]('0', Xs)),
                    Xs = R[Zp(Ro.h)]('%', Xs);
                } finally {
                    j.pop();
                }
            }
            for (var X5 = 0x1cee + -0x5 * 0x611 + 0x167; R[Xc(MZ.Mm)](X5, -0x1 * 0x18f1 + -0x146 + -0x2 * -0xd9b); X5++) {
                var X6 = M['E'][Xc(MZ.MV)][Xc(MZ.Mb) + 'de'](X5)
                  , X7 = M['E'][Xc(MZ.MQ) + Xc(MZ.Mw)](X6);
                R[Xc(MZ.MI)](X7[Xc(MZ.Mz)], -0x1 * -0x213a + -0x2186 + -0x4f * -0x1) ? X3[X5] = R[Xc(MZ.Mf)](X4, X5) : X3[X5] = X7;
            }
            function X8(Xi) {
                try {
                    j.push(175);
                    var Ze = Xc
                      , Xs = R[Ze(RO.R)][Ze(RO.M)]('|')
                      , Xj = 0x4 * -0x505 + 0xeeb + 0x144 + ME;
                    while (!![]) {
                        switch (Xs[Xj++]) {
                        case '0':
                            return M['E'][Ze(RO.g)][Ze(RO.y)](),
                            XM;
                        case '1':
                            var XR;
                            continue;
                        case '2':
                            M['E'][Ze(RO.g)][Ze(RO.y)]();
                            continue;
                        case '3':
                            for (var XM = [], Xg = 0x1c19 * -0x1 + -0x3c5 * -0x5 + 0x565 + ME; R[Ze(RO.A)](Xg, 0x22ee + 0x1 * 0xe81 + 0x353a * -0x1 + ME); ++Xg)
                                XM[Ze(RO.h)](XR[R[Ze(RO.m)](Xg, XR[Ze(RO.V)])]);
                            continue;
                        case '4':
                            XR = R[Ze(RO.b)](q, Xi),
                            M['E'][Ze(RO.g)][Ze(RO.Q)]();
                            continue;
                        }
                        break;
                    }
                } finally {
                    j.pop();
                }
            }
            function X9(Xi) {
                try {
                    j.push(175);
                    var Zk = Xc;
                    if (X2[Xi])
                        return X2[Xi];
                    for (var Xs = -0x7cf * -0x4 + -0x7 * -0x83 + -0x26b6 + ME, Xj = 0xf54 + -0xa60 + -0x4f4; R[Zk(RT.R)](Xj, Xi[Zk(RT.M)]); Xj++)
                        Xs += Xi[Xj][Zk(RT.g)]();
                    var XR = R[Zk(RT.y)](X1[R[Zk(RT.A)](Xs, X1[Zk(RT.M)])], R[Zk(RT.h)](Xs, 0x2055 * 0x2 + -0x7f5 * -0x5 + -0x4163));
                    return X2[Xi] = XR,
                    XR;
                } finally {
                    j.pop();
                }
            }
            function XX(Xi) {
                try {
                    j.push(175);
                    var ZG = Xc;
                    return M['E'][ZG(RC.R)][ZG(RC.M)](),
                    Xi = R[ZG(RC.g)](B, Xi),
                    (M['E'][ZG(RC.R)][ZG(RC.M)](),
                    Xi[ZG(RC.y)]('')[ZG(RC.A) + 'e']());
                } finally {
                    j.pop();
                }
            }
            function XY(Xi, Xs, Xj, XR) {
                try {
                    j.push(175);
                    var M1 = {
                        R: 0x18d
                    }
                      , M0 = {
                        R: 0x15b
                    }
                      , RL = {
                        R: 0x2a3
                    }
                      , Rq = {
                        R: 0x174
                    }
                      , RU = {
                        R: 0x1b4
                    }
                      , RP = {
                        R: 0x16e,
                        M: 0x233,
                        g: 0x25a,
                        y: 0x1c7,
                        A: 0x1d3,
                        h: 0x18c
                    }
                      , ZJ = Xc
                      , XM = R[ZJ(M4.R)][ZJ(M4.M)]('|')
                      , Xg = 0x78b * -0x1 + 0xd44 * 0x1 + 0x5b9 * -0x1;
                    while (!![]) {
                        switch (XM[Xg++]) {
                        case '0':
                            var Xy = R[ZJ(M4.g)](n, function(XH) {
                                try {
                                    j.push(175);
                                    var Zd = ZJ;
                                    return XH = R[Zd(RP.R)](c, XH, R[Zd(RP.M)]),
                                    R[Zd(RP.g)](c, XH, R[Zd(RP.y)](X9, R[Zd(RP.A)](n, XH)[Zd(RP.h)]));
                                } finally {
                                    j.pop();
                                }
                            }(Xi))
                              , XA = R[ZJ(M4.y)](S, Xy, !(-0x1131 + 0x1f1a + -0x11ce + ME), !(-0x24b2 * -0x1 + -0x1182 * 0x2 + -0x2b * 0xa))
                              , Xh = XA
                              , Xm = Xh = M['E'][ZJ(M4.A) + ZJ(M4.h)](R[ZJ(M4.m)](R[ZJ(M4.V)](R[ZJ(M4.b)](XV[ZJ(M4.Q) + ZJ(M4.w)], Xj), R[ZJ(M4.I)]), Xh));
                            continue;
                        case '1':
                            var XV = M['E'];
                            continue;
                        case '2':
                            Xj || (Xj = R[ZJ(M4.z)]),
                            Xj = Xj[ZJ(M4.f) + 'e']();
                            continue;
                        case '3':
                            R[ZJ(M4.x)](Xh, Xm) && (XQ = R[ZJ(M4.H)](X8, Xm)),
                            Xb = [R[ZJ(M4.v)](XX, Xb), R[ZJ(M4.F)](XX, XQ), R[ZJ(M4.p)](X0), R[ZJ(M4.e)](new M['E'][(ZJ(M4.k))]()[ZJ(M4.G)](), ''), XV[ZJ(M4.J) + ZJ(M4.d)], XV[ZJ(M4.n) + ZJ(M4.S)], R[ZJ(M4.c)](f)][ZJ(M4.W)]('|');
                            continue;
                        case '4':
                            return Xw[R[ZJ(M4.l)](X9, Xy[ZJ(M4.t)])] = Xx,
                            Xy[ZJ(M4.r)] = function(XH, Xv) {
                                try {
                                    j.push(175);
                                    var Zn = ZJ
                                      , XF = Xf[Zn(RD.R)][Zn(RD.M)]('|')
                                      , Xp = -0x2 * 0x37e + -0x166 * -0x1 + 0xd * 0x6e;
                                    while (!![]) {
                                        switch (XF[Xp++]) {
                                        case '0':
                                            XH || (XH = '');
                                            continue;
                                        case '1':
                                            if (XJ = XJ[Zn(RD.g)](0xd62 + 0x24e2 + -0x3629 + ME, Xf[Zn(RD.y)](XJ[Zn(RD.A)], 0x136 * 0x4 + 0x591 + -0x378 * 0x3)),
                                            Xf[Zn(RD.h)](-0x1747 + -0x2183 + 0x1 * 0x38ca, XH[Zn(RD.m)]))
                                                XH = Xf[Zn(RD.V)]('?', XJ);
                                            else {
                                                var Xe = XH[Zn(RD.b)](-0x1 * -0x2163 + -0x466 * 0x1 + -0xd4 * 0x23)[Zn(RD.M)]('&')
                                                  , Xk = [];
                                                for (Xn = 0x1b69 + -0x1f8c + 0x3e + ME; Xf[Zn(RD.Q)](Xn, Xe[Zn(RD.w)]); Xn++)
                                                    XG = M['E'][Zn(RD.I) + Zn(RD.z)](Xe[Xn][Zn(RD.f)]('=', -0x25db + 0x560 + -0x1 * -0x1c97 + ME)[0x1736 * -0x1 + -0x28 * -0xd + 0x152e * 0x1]),
                                                    Xf[Zn(RD.x)](-(-0x9e4 + -0x257a + 0x2f5f), Xd[Zn(RD.H)](XG)) && Xk[Zn(RD.v)](Xe[Xn]);
                                                XH = Xf[Zn(RD.F)](Xf[Zn(RD.F)]('?', Xf[Zn(RD.p)](0x1d1 * 0x2 + 0xb * 0x63 + 0x7e3 * -0x1, Xk[Zn(RD.w)]) ? '' : Xf[Zn(RD.e)](Xk[Zn(RD.k)]('&'), '&')), XJ);
                                            }
                                            continue;
                                        case '2':
                                            for (var XG, XJ = '', Xd = M['E'][Zn(RD.G)][Zn(RD.J)](Xv), Xn = 0xc55 + -0x19 * 0x3b + 0x39 * -0x2f + ME; Xf[Zn(RD.d)](Xn, Xd[Zn(RD.w)]); ++Xn)
                                                XG = Xd[Xn],
                                                XJ += Xf[Zn(RD.n)](Xf[Zn(RD.S)](Xf[Zn(RD.S)](M['E'][Zn(RD.c) + Zn(RD.W)](XG), '='), M['E'][Zn(RD.l) + Zn(RD.t)](Xv[XG])), '&');
                                            continue;
                                        case '3':
                                            return XH;
                                        case '4':
                                            if (Xf[Zn(RD.r)](-0xae1 + -0x2c5 * 0x5 + -0x1 * -0x14d5 + ME, M['E'][Zn(RD.N)][Zn(RD.o)](Xv)[Zn(RD.O)]))
                                                return XH;
                                            continue;
                                        }
                                        break;
                                    }
                                } finally {
                                    j.pop();
                                }
                            }(Xy[ZJ(M4.r)], Xw),
                            R[ZJ(M4.N)](S, Xy, XR);
                        case '5':
                            var Xb = R[ZJ(M4.o)](X8, Xh)
                              , XQ = Xb;
                            continue;
                        case '6':
                            var Xw = {};
                            continue;
                        case '7':
                            M['E'][ZJ(M4.O)][ZJ(M4.T)] = R[ZJ(M4.C)](p, k);
                            continue;
                        case '8':
                            if (Xs && R[ZJ(M4.P)](-(0x1774 + 0x32 * 0x85 + -0xa * 0x555 + ME), [R[ZJ(M4.D)], R[ZJ(M4.U)]][ZJ(M4.K)](Xj))) {
                                if (M['E'][ZJ(M4.q)] && R[ZJ(M4.B)](Xs, M['E'][ZJ(M4.q)])) {
                                    for (var XI = '', Xz = -0x4ed * -0x5 + -0x8af + 0x3 * -0x69d + ME; R[ZJ(M4.a)](Xz, Xs[ZJ(M4.L)]); Xz++)
                                        XI += X3[Xs[Xz]];
                                    Xh += XI;
                                } else
                                    Xh += M['E'][ZJ(M4.A) + ZJ(M4.X0)](Xs);
                            }
                            continue;
                        case '9':
                            M['E'][ZJ(M4.X1)][ZJ(M4.X2)]();
                            continue;
                        case '10':
                            var Xf = {
                                'TMrPf': R[ZJ(M4.X3)],
                                'JESKv': function(XH, Xv) {
                                    try {
                                        j.push(175);
                                        var ZS = ZJ;
                                        return R[ZS(RU.R)](XH, Xv);
                                    } finally {
                                        j.pop();
                                    }
                                },
                                'rSoBQ': function(XH, Xv) {
                                    try {
                                        j.push(175);
                                        var Zc = ZJ;
                                        return R[Zc(RK.R)](XH, Xv);
                                    } finally {
                                        j.pop();
                                    }
                                },
                                'rljgx': function(XH, Xv) {
                                    try {
                                        j.push(175);
                                        var ZW = ZJ;
                                        return R[ZW(Rq.R)](XH, Xv);
                                    } finally {
                                        j.pop();
                                    }
                                },
                                'rUZpB': function(XH, Xv) {
                                    try {
                                        j.push(175);
                                        var Zl = ZJ;
                                        return R[Zl(RB.R)](XH, Xv);
                                    } finally {
                                        j.pop();
                                    }
                                },
                                'rVlZm': function(XH, Xv) {
                                    try {
                                        j.push(175);
                                        var Zt = ZJ;
                                        return R[Zt(Ra.R)](XH, Xv);
                                    } finally {
                                        j.pop();
                                    }
                                },
                                'HAkXu': function(XH, Xv) {
                                    try {
                                        j.push(175);
                                        var Zr = ZJ;
                                        return R[Zr(RL.R)](XH, Xv);
                                    } finally {
                                        j.pop();
                                    }
                                },
                                'uELlB': function(XH, Xv) {
                                    try {
                                        j.push(175);
                                        var ZN = ZJ;
                                        return R[ZN(M0.R)](XH, Xv);
                                    } finally {
                                        j.pop();
                                    }
                                },
                                'cowcW': function(XH, Xv) {
                                    try {
                                        j.push(175);
                                        var Zo = ZJ;
                                        return R[Zo(M1.R)](XH, Xv);
                                    } finally {
                                        j.pop();
                                    }
                                },
                                'mINBw': function(XH, Xv) {
                                    try {
                                        j.push(175);
                                        var ZO = ZJ;
                                        return R[ZO(M2.R)](XH, Xv);
                                    } finally {
                                        j.pop();
                                    }
                                },
                                'HZEgh': function(XH, Xv) {
                                    try {
                                        j.push(175);
                                        var ZT = ZJ;
                                        return R[ZT(M3.R)](XH, Xv);
                                    } finally {
                                        j.pop();
                                    }
                                }
                            };
                            continue;
                        case '11':
                            var Xx = R[ZJ(M4.X4)](R[ZJ(M4.X5)], R[ZJ(M4.X6)](J, Xb));
                          console.log('md5__1038=' + Xx)
                            continue;
                        case '12':
                            M['E'][ZJ(M4.k)][ZJ(M4.X2)]();
                            continue;
                        }
                        break;
                    }
                } finally {
                    j.pop();
                }
            }
            function XZ(Xi) {
                try {
                    j.push(175);
                    var ZC = Xc, Xs, Xj, XR, XM;
                    if ((Xs = M['E'])[ZC(M5.R) + ZC(M5.M)] && (R[ZC(M5.g)](R[ZC(M5.y)](Q, R[ZC(M5.A)]), Xs[ZC(M5.R) + ZC(M5.M)]) && R[ZC(M5.h)](b, R[ZC(M5.A)], Xs[ZC(M5.R) + ZC(M5.m)], 0x2f0d973 * -0x1 + 0x35 * 0xc1d6f + 0x301ef78),
                    Xs[ZC(M5.V) + ZC(M5.b)] || (Xs[ZC(M5.V) + ZC(M5.b)] = new M['E'][(ZC(M5.Q))]()[ZC(M5.w)]()),
                    R[ZC(M5.I)](R[ZC(M5.z)](Q, R[ZC(M5.f)]), Xs[ZC(M5.x) + ZC(M5.b)]) && R[ZC(M5.H)](b, R[ZC(M5.v)], Xs[ZC(M5.F) + ZC(M5.p)], -0x249c095 + 0x1d * -0x17abf5 + 0x78b6956)),
                    Xi) {
                        if (Xi[ZC(M5.e)]) {
                            if (M['E'][ZC(M5.k) + ZC(M5.G)][ZC(M5.J)]) {
                                var Xg = Xi[ZC(M5.e)];
                                Xj = R[ZC(M5.d)](XY, Xg[0x17 * -0x151 + -0x12af + 0x2d12 + ME], Xi[ZC(M5.n)], Xg[-0x1955 + 0x268f + -0xd3a], 0x1 * -0x12eb + -0x43 * -0x2f + 0x3 * 0x235),
                                Xg[-0x1b83 + 0x257 * 0xd + -0x6cc + ME] = Xj;
                            }
                        } else {
                            if (Xi[ZC(M5.S)] && Xi[ZC(M5.c)] && M['E'][ZC(M5.W)][ZC(M5.l)])
                                return Xj = R[ZC(M5.t)](XY, Xi[ZC(M5.S)], Xi[ZC(M5.r)][ZC(M5.N)], Xi[ZC(M5.o)][ZC(M5.O)], -0x10d3 + -0x1d1d * 0x1 + 0x2df2),
                                M['E'][ZC(M5.W)][ZC(M5.T)](Xj, Xi[ZC(M5.c)]);
                        }
                    } else {
                        R[ZC(M5.C)](b, R[ZC(M5.P)](R[ZC(M5.D)](n, M['E'][ZC(M5.U)][ZC(M5.K)])[ZC(M5.q)], R[ZC(M5.B)]), R[ZC(M5.a)], 0x3689a80 + 0x3c704d0 + -0xf * 0x4eb27b + ME);
                        let Xy = R[ZC(M5.L)];
                        if (!R[ZC(M5.X0)](Q, Xy) && document[ZC(M5.X1)] && document[ZC(M5.N)][ZC(M5.X2)]) {
                            let XA = (XR = document[ZC(M5.X1)][ZC(M5.X3)],
                            (XM = /<script\sname="aliyunwaf_6a6f5ea8">([\s\S]+)?<\/script>/g[ZC(M5.X4)](XR))[-0xc4f + -0x204b + 0x28b6 + ME],
                            XM ? XM[-0x1d71 + -0x53 * -0x6e + -0x35f * 0x3 + ME] : null);
                            XA && R[ZC(M5.X5)](b, Xy, XA, 0xf46e1e + -0x346a08f + 0xb30dc7 * 0x7);
                        }
                        M['E'][ZC(M5.X6)][ZC(M5.X7)] = R[ZC(M5.X8)](XY, M['E'][ZC(M5.U)][ZC(M5.X9)], '', R[ZC(M5.XX)], -0x2912 + 0x18d2 + 0xc5b + ME);
                    }
                } finally {
                    j.pop();
                }
            }
            var Xu = {
                'iQhB1Ryc9N': function() {
                    try {
                        j.push(175);
                        var ZP = Xc;
                        R[ZP(M6.R)](XZ);
                    } finally {
                        j.pop();
                    }
                },
                'i': function() {
                    try {
                        j.push(175);
                        var ZD = Xc;
                        M['E'][ZD(M7.R)](Xu[ZD(M7.M)]);
                    } finally {
                        j.pop();
                    }
                }
            }
              , XE = {
                's': function() {
                    try {
                        j.push(175);
                        var ZU = Xc;
                        return R[ZU(M8.R)];
                    } finally {
                        j.pop();
                    }
                },
                'XyRFJ3JVlF': function() {
                    try {
                        j.push(175);
                        var M9 = {
                            R: 0xe3
                        }
                          , ZK = Xc;
                        try {
                            var Xi = M['E'];
                            const Xj = Xu['i'];
                            var Xs = Xi[ZK(MY.R) + ZK(MY.M) + 'd'] ? Xi[ZK(MY.R) + ZK(MY.M) + 'd'] : Xj;
                            !(function() {
                                try {
                                    j.push(175);
                                    var Zq = ZK
                                      , XR = R[Zq(MX.R)][Zq(MX.M)]('|')
                                      , XM = -0xb9f + 0x9 * 0x33b + -0x1174;
                                    while (!![]) {
                                        switch (XR[XM++]) {
                                        case '0':
                                            M['E'][Zq(MX.g)][Zq(MX.y)] = function(Xh) {
                                                try {
                                                    j.push(175);
                                                    var ZB = Zq;
                                                    return Xh[ZB(M9.R)](',');
                                                } finally {
                                                    j.pop();
                                                }
                                            }
                                            ;
                                            continue;
                                        case '1':
                                            var Xg = 0x14c * -0x12 + 0x1 * 0x824 + 0xb4f + ME
                                              , Xy = R[Zq(MX.A)](z);
                                            continue;
                                        case '2':
                                            for (!Xy[Zq(MX.h)] && g[Zq(MX.m)](0x167270778 + -0x62dd0 * 0x5a6 + -0x82fe4849 + ME); g[Xg]; )
                                                R[Zq(MX.V)](Xy[Zq(MX.b)](g[Xg]), -(-0x24d2 + 0x2193 + -0x37 * 0x3 + ME)) && (g[Xg],
                                                g[Xg] += Xg),
                                                Xg += 0x5ea + 0x1bd9 * -0x1 + 0x1f * 0x95 + ME;
                                            continue;
                                        case '3':
                                            var XA = R[Zq(MX.Q)](I, M['E'][Zq(MX.w)][Zq(MX.I)](g));
                                            continue;
                                        case '4':
                                            M['E'][Zq(MX.z)][Zq(MX.f)] = R[Zq(MX.x)](p, XA);
                                            continue;
                                        }
                                        break;
                                    }
                                } finally {
                                    j.pop();
                                }
                            }(this['s']())),
                            R[ZK(MY.g)](G, x),
                            k = R[ZK(MY.y)](I, M['E'][ZK(MY.A)][ZK(MY.h)](g)),
                            R[ZK(MY.m)](e),
                            R[ZK(MY.V)](Xs, XZ);
                        } catch (XR) {
                            console[ZK(MY.b)](XR);
                        }
                    } finally {
                        j.pop();
                    }
                }
            };
            XE[Xc(MZ.Mx)]();
        } finally {
            j.pop();
        }
    }()));
}())
