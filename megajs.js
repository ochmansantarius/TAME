"Content-Type: text/javascript\n"

var Hs = Object.create;
var Fr = Object.defineProperty;
var zs = Object.getOwnPropertyDescriptor;
var Vs = Object.getOwnPropertyNames;
var Ys = Object.getPrototypeOf, Js = Object.prototype.hasOwnProperty;
var Xs = (t) => Fr(t, "__esModule", {value: true});
var Zs = (t, e) => () => (t && (e = t(t = 0)), e);
var b = (t, e) => () => (e || t((e = {exports: {}}).exports, e), e.exports);
var Qs = (t, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i of Vs(e))
      !Js.call(t, i) && (r || i !== "default") && Fr(t, i, {get: () => e[i], enumerable: !(n = zs(e, i)) || n.enumerable});
  return t;
}, J = (t, e) => Qs(Xs(Fr(t != null ? Hs(Ys(t)) : {}, "default", !e && t && t.__esModule ? {get: () => t.default, enumerable: true} : {value: t, enumerable: true})), t);
var hi = b((kt) => {
  c();
  kt.byteLength = tf;
  kt.toByteArray = nf;
  kt.fromByteArray = sf;
  var oe = [], X = [], ef = typeof Uint8Array < "u" ? Uint8Array : Array, Lr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (xe = 0, li = Lr.length; xe < li; ++xe)
    oe[xe] = Lr[xe], X[Lr.charCodeAt(xe)] = xe;
  var xe, li;
  X["-".charCodeAt(0)] = 62;
  X["_".charCodeAt(0)] = 63;
  function ci(t) {
    var e = t.length;
    if (e % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var r = t.indexOf("=");
    r === -1 && (r = e);
    var n = r === e ? 0 : 4 - r % 4;
    return [r, n];
  }
  function tf(t) {
    var e = ci(t), r = e[0], n = e[1];
    return (r + n) * 3 / 4 - n;
  }
  function rf(t, e, r) {
    return (e + r) * 3 / 4 - r;
  }
  function nf(t) {
    var e, r = ci(t), n = r[0], i = r[1], o = new ef(rf(t, n, i)), a = 0, s = i > 0 ? n - 4 : n, f;
    for (f = 0; f < s; f += 4)
      e = X[t.charCodeAt(f)] << 18 | X[t.charCodeAt(f + 1)] << 12 | X[t.charCodeAt(f + 2)] << 6 | X[t.charCodeAt(f + 3)], o[a++] = e >> 16 & 255, o[a++] = e >> 8 & 255, o[a++] = e & 255;
    return i === 2 && (e = X[t.charCodeAt(f)] << 2 | X[t.charCodeAt(f + 1)] >> 4, o[a++] = e & 255), i === 1 && (e = X[t.charCodeAt(f)] << 10 | X[t.charCodeAt(f + 1)] << 4 | X[t.charCodeAt(f + 2)] >> 2, o[a++] = e >> 8 & 255, o[a++] = e & 255), o;
  }
  function of(t) {
    return oe[t >> 18 & 63] + oe[t >> 12 & 63] + oe[t >> 6 & 63] + oe[t & 63];
  }
  function af(t, e, r) {
    for (var n, i = [], o = e; o < r; o += 3)
      n = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (t[o + 2] & 255), i.push(of(n));
    return i.join("");
  }
  function sf(t) {
    for (var e, r = t.length, n = r % 3, i = [], o = 16383, a = 0, s = r - n; a < s; a += o)
      i.push(af(t, a, a + o > s ? s : a + o));
    return n === 1 ? (e = t[r - 1], i.push(oe[e >> 2] + oe[e << 4 & 63] + "==")) : n === 2 && (e = (t[r - 2] << 8) + t[r - 1], i.push(oe[e >> 10] + oe[e >> 4 & 63] + oe[e << 2 & 63] + "=")), i.join("");
  }
});
var di = b((Mr) => {
  c();
  Mr.read = function(t, e, r, n, i) {
    var o, a, s = i * 8 - n - 1, f = (1 << s) - 1, u = f >> 1, l = -7, h = r ? i - 1 : 0, m = r ? -1 : 1, g = t[e + h];
    for (h += m, o = g & (1 << -l) - 1, g >>= -l, l += s; l > 0; o = o * 256 + t[e + h], h += m, l -= 8)
      ;
    for (a = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; a = a * 256 + t[e + h], h += m, l -= 8)
      ;
    if (o === 0)
      o = 1 - u;
    else {
      if (o === f)
        return a ? NaN : (g ? -1 : 1) * (1 / 0);
      a = a + Math.pow(2, n), o = o - u;
    }
    return (g ? -1 : 1) * a * Math.pow(2, o - n);
  };
  Mr.write = function(t, e, r, n, i, o) {
    var a, s, f, u = o * 8 - i - 1, l = (1 << u) - 1, h = l >> 1, m = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, g = n ? 0 : o - 1, E = n ? 1 : -1, v = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = l) : (a = Math.floor(Math.log(e) / Math.LN2), e * (f = Math.pow(2, -a)) < 1 && (a--, f *= 2), a + h >= 1 ? e += m / f : e += m * Math.pow(2, 1 - h), e * f >= 2 && (a++, f /= 2), a + h >= l ? (s = 0, a = l) : a + h >= 1 ? (s = (e * f - 1) * Math.pow(2, i), a = a + h) : (s = e * Math.pow(2, h - 1) * Math.pow(2, i), a = 0)); i >= 8; t[r + g] = s & 255, g += E, s /= 256, i -= 8)
      ;
    for (a = a << i | s, u += i; u > 0; t[r + g] = a & 255, g += E, a /= 256, u -= 8)
      ;
    t[r + g - E] |= v * 128;
  };
});
var Ge = b((Ke) => {
  c();
  var Ur = hi(), We = di(), pi = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  Ke.Buffer = d;
  Ke.SlowBuffer = df;
  Ke.INSPECT_MAX_BYTES = 50;
  var Ft = 2147483647;
  Ke.kMaxLength = Ft;
  d.TYPED_ARRAY_SUPPORT = ff();
  !d.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
  function ff() {
    try {
      let t = new Uint8Array(1), e = {foo: function() {
        return 42;
      }};
      return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), t.foo() === 42;
    } catch {
      return false;
    }
  }
  Object.defineProperty(d.prototype, "parent", {enumerable: true, get: function() {
    if (!!d.isBuffer(this))
      return this.buffer;
  }});
  Object.defineProperty(d.prototype, "offset", {enumerable: true, get: function() {
    if (!!d.isBuffer(this))
      return this.byteOffset;
  }});
  function le(t) {
    if (t > Ft)
      throw new RangeError('The value "' + t + '" is invalid for option "size"');
    let e = new Uint8Array(t);
    return Object.setPrototypeOf(e, d.prototype), e;
  }
  function d(t, e, r) {
    if (typeof t == "number") {
      if (typeof e == "string")
        throw new TypeError('The "string" argument must be of type string. Received type number');
      return qr(t);
    }
    return wi(t, e, r);
  }
  d.poolSize = 8192;
  function wi(t, e, r) {
    if (typeof t == "string")
      return lf(t, e);
    if (ArrayBuffer.isView(t))
      return cf(t);
    if (t == null)
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
    if (ae(t, ArrayBuffer) || t && ae(t.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (ae(t, SharedArrayBuffer) || t && ae(t.buffer, SharedArrayBuffer)))
      return jr(t, e, r);
    if (typeof t == "number")
      throw new TypeError('The "value" argument must not be of type number. Received type number');
    let n = t.valueOf && t.valueOf();
    if (n != null && n !== t)
      return d.from(n, e, r);
    let i = hf(t);
    if (i)
      return i;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof t[Symbol.toPrimitive] == "function")
      return d.from(t[Symbol.toPrimitive]("string"), e, r);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
  }
  d.from = function(t, e, r) {
    return wi(t, e, r);
  };
  Object.setPrototypeOf(d.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(d, Uint8Array);
  function bi(t) {
    if (typeof t != "number")
      throw new TypeError('"size" argument must be of type number');
    if (t < 0)
      throw new RangeError('The value "' + t + '" is invalid for option "size"');
  }
  function uf(t, e, r) {
    return bi(t), t <= 0 ? le(t) : e !== void 0 ? typeof r == "string" ? le(t).fill(e, r) : le(t).fill(e) : le(t);
  }
  d.alloc = function(t, e, r) {
    return uf(t, e, r);
  };
  function qr(t) {
    return bi(t), le(t < 0 ? 0 : Wr(t) | 0);
  }
  d.allocUnsafe = function(t) {
    return qr(t);
  };
  d.allocUnsafeSlow = function(t) {
    return qr(t);
  };
  function lf(t, e) {
    if ((typeof e != "string" || e === "") && (e = "utf8"), !d.isEncoding(e))
      throw new TypeError("Unknown encoding: " + e);
    let r = Ei(t, e) | 0, n = le(r), i = n.write(t, e);
    return i !== r && (n = n.slice(0, i)), n;
  }
  function Nr(t) {
    let e = t.length < 0 ? 0 : Wr(t.length) | 0, r = le(e);
    for (let n = 0; n < e; n += 1)
      r[n] = t[n] & 255;
    return r;
  }
  function cf(t) {
    if (ae(t, Uint8Array)) {
      let e = new Uint8Array(t);
      return jr(e.buffer, e.byteOffset, e.byteLength);
    }
    return Nr(t);
  }
  function jr(t, e, r) {
    if (e < 0 || t.byteLength < e)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (t.byteLength < e + (r || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return e === void 0 && r === void 0 ? n = new Uint8Array(t) : r === void 0 ? n = new Uint8Array(t, e) : n = new Uint8Array(t, e, r), Object.setPrototypeOf(n, d.prototype), n;
  }
  function hf(t) {
    if (d.isBuffer(t)) {
      let e = Wr(t.length) | 0, r = le(e);
      return r.length === 0 || t.copy(r, 0, 0, e), r;
    }
    if (t.length !== void 0)
      return typeof t.length != "number" || Kr(t.length) ? le(0) : Nr(t);
    if (t.type === "Buffer" && Array.isArray(t.data))
      return Nr(t.data);
  }
  function Wr(t) {
    if (t >= Ft)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + Ft.toString(16) + " bytes");
    return t | 0;
  }
  function df(t) {
    return +t != t && (t = 0), d.alloc(+t);
  }
  d.isBuffer = function(e) {
    return e != null && e._isBuffer === true && e !== d.prototype;
  };
  d.compare = function(e, r) {
    if (ae(e, Uint8Array) && (e = d.from(e, e.offset, e.byteLength)), ae(r, Uint8Array) && (r = d.from(r, r.offset, r.byteLength)), !d.isBuffer(e) || !d.isBuffer(r))
      throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (e === r)
      return 0;
    let n = e.length, i = r.length;
    for (let o = 0, a = Math.min(n, i); o < a; ++o)
      if (e[o] !== r[o]) {
        n = e[o], i = r[o];
        break;
      }
    return n < i ? -1 : i < n ? 1 : 0;
  };
  d.isEncoding = function(e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return true;
      default:
        return false;
    }
  };
  d.concat = function(e, r) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0)
      return d.alloc(0);
    let n;
    if (r === void 0)
      for (r = 0, n = 0; n < e.length; ++n)
        r += e[n].length;
    let i = d.allocUnsafe(r), o = 0;
    for (n = 0; n < e.length; ++n) {
      let a = e[n];
      if (ae(a, Uint8Array))
        o + a.length > i.length ? (d.isBuffer(a) || (a = d.from(a)), a.copy(i, o)) : Uint8Array.prototype.set.call(i, a, o);
      else if (d.isBuffer(a))
        a.copy(i, o);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      o += a.length;
    }
    return i;
  };
  function Ei(t, e) {
    if (d.isBuffer(t))
      return t.length;
    if (ArrayBuffer.isView(t) || ae(t, ArrayBuffer))
      return t.byteLength;
    if (typeof t != "string")
      throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
    let r = t.length, n = arguments.length > 2 && arguments[2] === true;
    if (!n && r === 0)
      return 0;
    let i = false;
    for (; ; )
      switch (e) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return Dr(t).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return r * 2;
        case "hex":
          return r >>> 1;
        case "base64":
          return Ti(t).length;
        default:
          if (i)
            return n ? -1 : Dr(t).length;
          e = ("" + e).toLowerCase(), i = true;
      }
  }
  d.byteLength = Ei;
  function pf(t, e, r) {
    let n = false;
    if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, e >>>= 0, r <= e))
      return "";
    for (t || (t = "utf8"); ; )
      switch (t) {
        case "hex":
          return Af(this, e, r);
        case "utf8":
        case "utf-8":
          return _i(this, e, r);
        case "ascii":
          return _f(this, e, r);
        case "latin1":
        case "binary":
          return Sf(this, e, r);
        case "base64":
          return Ef(this, e, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return xf(this, e, r);
        default:
          if (n)
            throw new TypeError("Unknown encoding: " + t);
          t = (t + "").toLowerCase(), n = true;
      }
  }
  d.prototype._isBuffer = true;
  function Re(t, e, r) {
    let n = t[e];
    t[e] = t[r], t[r] = n;
  }
  d.prototype.swap16 = function() {
    let e = this.length;
    if (e % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let r = 0; r < e; r += 2)
      Re(this, r, r + 1);
    return this;
  };
  d.prototype.swap32 = function() {
    let e = this.length;
    if (e % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let r = 0; r < e; r += 4)
      Re(this, r, r + 3), Re(this, r + 1, r + 2);
    return this;
  };
  d.prototype.swap64 = function() {
    let e = this.length;
    if (e % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let r = 0; r < e; r += 8)
      Re(this, r, r + 7), Re(this, r + 1, r + 6), Re(this, r + 2, r + 5), Re(this, r + 3, r + 4);
    return this;
  };
  d.prototype.toString = function() {
    let e = this.length;
    return e === 0 ? "" : arguments.length === 0 ? _i(this, 0, e) : pf.apply(this, arguments);
  };
  d.prototype.toLocaleString = d.prototype.toString;
  d.prototype.equals = function(e) {
    if (!d.isBuffer(e))
      throw new TypeError("Argument must be a Buffer");
    return this === e ? true : d.compare(this, e) === 0;
  };
  d.prototype.inspect = function() {
    let e = "", r = Ke.INSPECT_MAX_BYTES;
    return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">";
  };
  pi && (d.prototype[pi] = d.prototype.inspect);
  d.prototype.compare = function(e, r, n, i, o) {
    if (ae(e, Uint8Array) && (e = d.from(e, e.offset, e.byteLength)), !d.isBuffer(e))
      throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
    if (r === void 0 && (r = 0), n === void 0 && (n = e ? e.length : 0), i === void 0 && (i = 0), o === void 0 && (o = this.length), r < 0 || n > e.length || i < 0 || o > this.length)
      throw new RangeError("out of range index");
    if (i >= o && r >= n)
      return 0;
    if (i >= o)
      return -1;
    if (r >= n)
      return 1;
    if (r >>>= 0, n >>>= 0, i >>>= 0, o >>>= 0, this === e)
      return 0;
    let a = o - i, s = n - r, f = Math.min(a, s), u = this.slice(i, o), l = e.slice(r, n);
    for (let h = 0; h < f; ++h)
      if (u[h] !== l[h]) {
        a = u[h], s = l[h];
        break;
      }
    return a < s ? -1 : s < a ? 1 : 0;
  };
  function vi(t, e, r, n, i) {
    if (t.length === 0)
      return -1;
    if (typeof r == "string" ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, Kr(r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
      if (i)
        return -1;
      r = t.length - 1;
    } else if (r < 0)
      if (i)
        r = 0;
      else
        return -1;
    if (typeof e == "string" && (e = d.from(e, n)), d.isBuffer(e))
      return e.length === 0 ? -1 : yi(t, e, r, n, i);
    if (typeof e == "number")
      return e = e & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : yi(t, [e], r, n, i);
    throw new TypeError("val must be string, number or Buffer");
  }
  function yi(t, e, r, n, i) {
    let o = 1, a = t.length, s = e.length;
    if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
      if (t.length < 2 || e.length < 2)
        return -1;
      o = 2, a /= 2, s /= 2, r /= 2;
    }
    function f(l, h) {
      return o === 1 ? l[h] : l.readUInt16BE(h * o);
    }
    let u;
    if (i) {
      let l = -1;
      for (u = r; u < a; u++)
        if (f(t, u) === f(e, l === -1 ? 0 : u - l)) {
          if (l === -1 && (l = u), u - l + 1 === s)
            return l * o;
        } else
          l !== -1 && (u -= u - l), l = -1;
    } else
      for (r + s > a && (r = a - s), u = r; u >= 0; u--) {
        let l = true;
        for (let h = 0; h < s; h++)
          if (f(t, u + h) !== f(e, h)) {
            l = false;
            break;
          }
        if (l)
          return u;
      }
    return -1;
  }
  d.prototype.includes = function(e, r, n) {
    return this.indexOf(e, r, n) !== -1;
  };
  d.prototype.indexOf = function(e, r, n) {
    return vi(this, e, r, n, true);
  };
  d.prototype.lastIndexOf = function(e, r, n) {
    return vi(this, e, r, n, false);
  };
  function yf(t, e, r, n) {
    r = Number(r) || 0;
    let i = t.length - r;
    n ? (n = Number(n), n > i && (n = i)) : n = i;
    let o = e.length;
    n > o / 2 && (n = o / 2);
    let a;
    for (a = 0; a < n; ++a) {
      let s = parseInt(e.substr(a * 2, 2), 16);
      if (Kr(s))
        return a;
      t[r + a] = s;
    }
    return a;
  }
  function gf(t, e, r, n) {
    return Lt(Dr(e, t.length - r), t, r, n);
  }
  function mf(t, e, r, n) {
    return Lt(Tf(e), t, r, n);
  }
  function wf(t, e, r, n) {
    return Lt(Ti(e), t, r, n);
  }
  function bf(t, e, r, n) {
    return Lt(Of(e, t.length - r), t, r, n);
  }
  d.prototype.write = function(e, r, n, i) {
    if (r === void 0)
      i = "utf8", n = this.length, r = 0;
    else if (n === void 0 && typeof r == "string")
      i = r, n = this.length, r = 0;
    else if (isFinite(r))
      r = r >>> 0, isFinite(n) ? (n = n >>> 0, i === void 0 && (i = "utf8")) : (i = n, n = void 0);
    else
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    let o = this.length - r;
    if ((n === void 0 || n > o) && (n = o), e.length > 0 && (n < 0 || r < 0) || r > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    i || (i = "utf8");
    let a = false;
    for (; ; )
      switch (i) {
        case "hex":
          return yf(this, e, r, n);
        case "utf8":
        case "utf-8":
          return gf(this, e, r, n);
        case "ascii":
        case "latin1":
        case "binary":
          return mf(this, e, r, n);
        case "base64":
          return wf(this, e, r, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return bf(this, e, r, n);
        default:
          if (a)
            throw new TypeError("Unknown encoding: " + i);
          i = ("" + i).toLowerCase(), a = true;
      }
  };
  d.prototype.toJSON = function() {
    return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)};
  };
  function Ef(t, e, r) {
    return e === 0 && r === t.length ? Ur.fromByteArray(t) : Ur.fromByteArray(t.slice(e, r));
  }
  function _i(t, e, r) {
    r = Math.min(t.length, r);
    let n = [], i = e;
    for (; i < r; ) {
      let o = t[i], a = null, s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
      if (i + s <= r) {
        let f, u, l, h;
        switch (s) {
          case 1:
            o < 128 && (a = o);
            break;
          case 2:
            f = t[i + 1], (f & 192) === 128 && (h = (o & 31) << 6 | f & 63, h > 127 && (a = h));
            break;
          case 3:
            f = t[i + 1], u = t[i + 2], (f & 192) === 128 && (u & 192) === 128 && (h = (o & 15) << 12 | (f & 63) << 6 | u & 63, h > 2047 && (h < 55296 || h > 57343) && (a = h));
            break;
          case 4:
            f = t[i + 1], u = t[i + 2], l = t[i + 3], (f & 192) === 128 && (u & 192) === 128 && (l & 192) === 128 && (h = (o & 15) << 18 | (f & 63) << 12 | (u & 63) << 6 | l & 63, h > 65535 && h < 1114112 && (a = h));
        }
      }
      a === null ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, n.push(a >>> 10 & 1023 | 55296), a = 56320 | a & 1023), n.push(a), i += s;
    }
    return vf(n);
  }
  var gi = 4096;
  function vf(t) {
    let e = t.length;
    if (e <= gi)
      return String.fromCharCode.apply(String, t);
    let r = "", n = 0;
    for (; n < e; )
      r += String.fromCharCode.apply(String, t.slice(n, n += gi));
    return r;
  }
  function _f(t, e, r) {
    let n = "";
    r = Math.min(t.length, r);
    for (let i = e; i < r; ++i)
      n += String.fromCharCode(t[i] & 127);
    return n;
  }
  function Sf(t, e, r) {
    let n = "";
    r = Math.min(t.length, r);
    for (let i = e; i < r; ++i)
      n += String.fromCharCode(t[i]);
    return n;
  }
  function Af(t, e, r) {
    let n = t.length;
    (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
    let i = "";
    for (let o = e; o < r; ++o)
      i += Pf[t[o]];
    return i;
  }
  function xf(t, e, r) {
    let n = t.slice(e, r), i = "";
    for (let o = 0; o < n.length - 1; o += 2)
      i += String.fromCharCode(n[o] + n[o + 1] * 256);
    return i;
  }
  d.prototype.slice = function(e, r) {
    let n = this.length;
    e = ~~e, r = r === void 0 ? n : ~~r, e < 0 ? (e += n, e < 0 && (e = 0)) : e > n && (e = n), r < 0 ? (r += n, r < 0 && (r = 0)) : r > n && (r = n), r < e && (r = e);
    let i = this.subarray(e, r);
    return Object.setPrototypeOf(i, d.prototype), i;
  };
  function L(t, e, r) {
    if (t % 1 !== 0 || t < 0)
      throw new RangeError("offset is not uint");
    if (t + e > r)
      throw new RangeError("Trying to access beyond buffer length");
  }
  d.prototype.readUintLE = d.prototype.readUIntLE = function(e, r, n) {
    e = e >>> 0, r = r >>> 0, n || L(e, r, this.length);
    let i = this[e], o = 1, a = 0;
    for (; ++a < r && (o *= 256); )
      i += this[e + a] * o;
    return i;
  };
  d.prototype.readUintBE = d.prototype.readUIntBE = function(e, r, n) {
    e = e >>> 0, r = r >>> 0, n || L(e, r, this.length);
    let i = this[e + --r], o = 1;
    for (; r > 0 && (o *= 256); )
      i += this[e + --r] * o;
    return i;
  };
  d.prototype.readUint8 = d.prototype.readUInt8 = function(e, r) {
    return e = e >>> 0, r || L(e, 1, this.length), this[e];
  };
  d.prototype.readUint16LE = d.prototype.readUInt16LE = function(e, r) {
    return e = e >>> 0, r || L(e, 2, this.length), this[e] | this[e + 1] << 8;
  };
  d.prototype.readUint16BE = d.prototype.readUInt16BE = function(e, r) {
    return e = e >>> 0, r || L(e, 2, this.length), this[e] << 8 | this[e + 1];
  };
  d.prototype.readUint32LE = d.prototype.readUInt32LE = function(e, r) {
    return e = e >>> 0, r || L(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
  };
  d.prototype.readUint32BE = d.prototype.readUInt32BE = function(e, r) {
    return e = e >>> 0, r || L(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
  };
  d.prototype.readBigUInt64LE = ge(function(e) {
    e = e >>> 0, $e(e, "offset");
    let r = this[e], n = this[e + 7];
    (r === void 0 || n === void 0) && ft(e, this.length - 8);
    let i = r + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, o = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + n * 2 ** 24;
    return BigInt(i) + (BigInt(o) << BigInt(32));
  });
  d.prototype.readBigUInt64BE = ge(function(e) {
    e = e >>> 0, $e(e, "offset");
    let r = this[e], n = this[e + 7];
    (r === void 0 || n === void 0) && ft(e, this.length - 8);
    let i = r * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], o = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n;
    return (BigInt(i) << BigInt(32)) + BigInt(o);
  });
  d.prototype.readIntLE = function(e, r, n) {
    e = e >>> 0, r = r >>> 0, n || L(e, r, this.length);
    let i = this[e], o = 1, a = 0;
    for (; ++a < r && (o *= 256); )
      i += this[e + a] * o;
    return o *= 128, i >= o && (i -= Math.pow(2, 8 * r)), i;
  };
  d.prototype.readIntBE = function(e, r, n) {
    e = e >>> 0, r = r >>> 0, n || L(e, r, this.length);
    let i = r, o = 1, a = this[e + --i];
    for (; i > 0 && (o *= 256); )
      a += this[e + --i] * o;
    return o *= 128, a >= o && (a -= Math.pow(2, 8 * r)), a;
  };
  d.prototype.readInt8 = function(e, r) {
    return e = e >>> 0, r || L(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
  };
  d.prototype.readInt16LE = function(e, r) {
    e = e >>> 0, r || L(e, 2, this.length);
    let n = this[e] | this[e + 1] << 8;
    return n & 32768 ? n | 4294901760 : n;
  };
  d.prototype.readInt16BE = function(e, r) {
    e = e >>> 0, r || L(e, 2, this.length);
    let n = this[e + 1] | this[e] << 8;
    return n & 32768 ? n | 4294901760 : n;
  };
  d.prototype.readInt32LE = function(e, r) {
    return e = e >>> 0, r || L(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
  };
  d.prototype.readInt32BE = function(e, r) {
    return e = e >>> 0, r || L(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
  };
  d.prototype.readBigInt64LE = ge(function(e) {
    e = e >>> 0, $e(e, "offset");
    let r = this[e], n = this[e + 7];
    (r === void 0 || n === void 0) && ft(e, this.length - 8);
    let i = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (n << 24);
    return (BigInt(i) << BigInt(32)) + BigInt(r + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
  });
  d.prototype.readBigInt64BE = ge(function(e) {
    e = e >>> 0, $e(e, "offset");
    let r = this[e], n = this[e + 7];
    (r === void 0 || n === void 0) && ft(e, this.length - 8);
    let i = (r << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (BigInt(i) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + n);
  });
  d.prototype.readFloatLE = function(e, r) {
    return e = e >>> 0, r || L(e, 4, this.length), We.read(this, e, true, 23, 4);
  };
  d.prototype.readFloatBE = function(e, r) {
    return e = e >>> 0, r || L(e, 4, this.length), We.read(this, e, false, 23, 4);
  };
  d.prototype.readDoubleLE = function(e, r) {
    return e = e >>> 0, r || L(e, 8, this.length), We.read(this, e, true, 52, 8);
  };
  d.prototype.readDoubleBE = function(e, r) {
    return e = e >>> 0, r || L(e, 8, this.length), We.read(this, e, false, 52, 8);
  };
  function H(t, e, r, n, i, o) {
    if (!d.isBuffer(t))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e > i || e < o)
      throw new RangeError('"value" argument is out of bounds');
    if (r + n > t.length)
      throw new RangeError("Index out of range");
  }
  d.prototype.writeUintLE = d.prototype.writeUIntLE = function(e, r, n, i) {
    if (e = +e, r = r >>> 0, n = n >>> 0, !i) {
      let s = Math.pow(2, 8 * n) - 1;
      H(this, e, r, n, s, 0);
    }
    let o = 1, a = 0;
    for (this[r] = e & 255; ++a < n && (o *= 256); )
      this[r + a] = e / o & 255;
    return r + n;
  };
  d.prototype.writeUintBE = d.prototype.writeUIntBE = function(e, r, n, i) {
    if (e = +e, r = r >>> 0, n = n >>> 0, !i) {
      let s = Math.pow(2, 8 * n) - 1;
      H(this, e, r, n, s, 0);
    }
    let o = n - 1, a = 1;
    for (this[r + o] = e & 255; --o >= 0 && (a *= 256); )
      this[r + o] = e / a & 255;
    return r + n;
  };
  d.prototype.writeUint8 = d.prototype.writeUInt8 = function(e, r, n) {
    return e = +e, r = r >>> 0, n || H(this, e, r, 1, 255, 0), this[r] = e & 255, r + 1;
  };
  d.prototype.writeUint16LE = d.prototype.writeUInt16LE = function(e, r, n) {
    return e = +e, r = r >>> 0, n || H(this, e, r, 2, 65535, 0), this[r] = e & 255, this[r + 1] = e >>> 8, r + 2;
  };
  d.prototype.writeUint16BE = d.prototype.writeUInt16BE = function(e, r, n) {
    return e = +e, r = r >>> 0, n || H(this, e, r, 2, 65535, 0), this[r] = e >>> 8, this[r + 1] = e & 255, r + 2;
  };
  d.prototype.writeUint32LE = d.prototype.writeUInt32LE = function(e, r, n) {
    return e = +e, r = r >>> 0, n || H(this, e, r, 4, 4294967295, 0), this[r + 3] = e >>> 24, this[r + 2] = e >>> 16, this[r + 1] = e >>> 8, this[r] = e & 255, r + 4;
  };
  d.prototype.writeUint32BE = d.prototype.writeUInt32BE = function(e, r, n) {
    return e = +e, r = r >>> 0, n || H(this, e, r, 4, 4294967295, 0), this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = e & 255, r + 4;
  };
  function Si(t, e, r, n, i) {
    Bi(e, n, i, t, r, 7);
    let o = Number(e & BigInt(4294967295));
    t[r++] = o, o = o >> 8, t[r++] = o, o = o >> 8, t[r++] = o, o = o >> 8, t[r++] = o;
    let a = Number(e >> BigInt(32) & BigInt(4294967295));
    return t[r++] = a, a = a >> 8, t[r++] = a, a = a >> 8, t[r++] = a, a = a >> 8, t[r++] = a, r;
  }
  function Ai(t, e, r, n, i) {
    Bi(e, n, i, t, r, 7);
    let o = Number(e & BigInt(4294967295));
    t[r + 7] = o, o = o >> 8, t[r + 6] = o, o = o >> 8, t[r + 5] = o, o = o >> 8, t[r + 4] = o;
    let a = Number(e >> BigInt(32) & BigInt(4294967295));
    return t[r + 3] = a, a = a >> 8, t[r + 2] = a, a = a >> 8, t[r + 1] = a, a = a >> 8, t[r] = a, r + 8;
  }
  d.prototype.writeBigUInt64LE = ge(function(e, r = 0) {
    return Si(this, e, r, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  d.prototype.writeBigUInt64BE = ge(function(e, r = 0) {
    return Ai(this, e, r, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  d.prototype.writeIntLE = function(e, r, n, i) {
    if (e = +e, r = r >>> 0, !i) {
      let f = Math.pow(2, 8 * n - 1);
      H(this, e, r, n, f - 1, -f);
    }
    let o = 0, a = 1, s = 0;
    for (this[r] = e & 255; ++o < n && (a *= 256); )
      e < 0 && s === 0 && this[r + o - 1] !== 0 && (s = 1), this[r + o] = (e / a >> 0) - s & 255;
    return r + n;
  };
  d.prototype.writeIntBE = function(e, r, n, i) {
    if (e = +e, r = r >>> 0, !i) {
      let f = Math.pow(2, 8 * n - 1);
      H(this, e, r, n, f - 1, -f);
    }
    let o = n - 1, a = 1, s = 0;
    for (this[r + o] = e & 255; --o >= 0 && (a *= 256); )
      e < 0 && s === 0 && this[r + o + 1] !== 0 && (s = 1), this[r + o] = (e / a >> 0) - s & 255;
    return r + n;
  };
  d.prototype.writeInt8 = function(e, r, n) {
    return e = +e, r = r >>> 0, n || H(this, e, r, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[r] = e & 255, r + 1;
  };
  d.prototype.writeInt16LE = function(e, r, n) {
    return e = +e, r = r >>> 0, n || H(this, e, r, 2, 32767, -32768), this[r] = e & 255, this[r + 1] = e >>> 8, r + 2;
  };
  d.prototype.writeInt16BE = function(e, r, n) {
    return e = +e, r = r >>> 0, n || H(this, e, r, 2, 32767, -32768), this[r] = e >>> 8, this[r + 1] = e & 255, r + 2;
  };
  d.prototype.writeInt32LE = function(e, r, n) {
    return e = +e, r = r >>> 0, n || H(this, e, r, 4, 2147483647, -2147483648), this[r] = e & 255, this[r + 1] = e >>> 8, this[r + 2] = e >>> 16, this[r + 3] = e >>> 24, r + 4;
  };
  d.prototype.writeInt32BE = function(e, r, n) {
    return e = +e, r = r >>> 0, n || H(this, e, r, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[r] = e >>> 24, this[r + 1] = e >>> 16, this[r + 2] = e >>> 8, this[r + 3] = e & 255, r + 4;
  };
  d.prototype.writeBigInt64LE = ge(function(e, r = 0) {
    return Si(this, e, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  d.prototype.writeBigInt64BE = ge(function(e, r = 0) {
    return Ai(this, e, r, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function xi(t, e, r, n, i, o) {
    if (r + n > t.length)
      throw new RangeError("Index out of range");
    if (r < 0)
      throw new RangeError("Index out of range");
  }
  function Ri(t, e, r, n, i) {
    return e = +e, r = r >>> 0, i || xi(t, e, r, 4), We.write(t, e, r, n, 23, 4), r + 4;
  }
  d.prototype.writeFloatLE = function(e, r, n) {
    return Ri(this, e, r, true, n);
  };
  d.prototype.writeFloatBE = function(e, r, n) {
    return Ri(this, e, r, false, n);
  };
  function Ii(t, e, r, n, i) {
    return e = +e, r = r >>> 0, i || xi(t, e, r, 8), We.write(t, e, r, n, 52, 8), r + 8;
  }
  d.prototype.writeDoubleLE = function(e, r, n) {
    return Ii(this, e, r, true, n);
  };
  d.prototype.writeDoubleBE = function(e, r, n) {
    return Ii(this, e, r, false, n);
  };
  d.prototype.copy = function(e, r, n, i) {
    if (!d.isBuffer(e))
      throw new TypeError("argument should be a Buffer");
    if (n || (n = 0), !i && i !== 0 && (i = this.length), r >= e.length && (r = e.length), r || (r = 0), i > 0 && i < n && (i = n), i === n || e.length === 0 || this.length === 0)
      return 0;
    if (r < 0)
      throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= this.length)
      throw new RangeError("Index out of range");
    if (i < 0)
      throw new RangeError("sourceEnd out of bounds");
    i > this.length && (i = this.length), e.length - r < i - n && (i = e.length - r + n);
    let o = i - n;
    return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(r, n, i) : Uint8Array.prototype.set.call(e, this.subarray(n, i), r), o;
  };
  d.prototype.fill = function(e, r, n, i) {
    if (typeof e == "string") {
      if (typeof r == "string" ? (i = r, r = 0, n = this.length) : typeof n == "string" && (i = n, n = this.length), i !== void 0 && typeof i != "string")
        throw new TypeError("encoding must be a string");
      if (typeof i == "string" && !d.isEncoding(i))
        throw new TypeError("Unknown encoding: " + i);
      if (e.length === 1) {
        let a = e.charCodeAt(0);
        (i === "utf8" && a < 128 || i === "latin1") && (e = a);
      }
    } else
      typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
    if (r < 0 || this.length < r || this.length < n)
      throw new RangeError("Out of range index");
    if (n <= r)
      return this;
    r = r >>> 0, n = n === void 0 ? this.length : n >>> 0, e || (e = 0);
    let o;
    if (typeof e == "number")
      for (o = r; o < n; ++o)
        this[o] = e;
    else {
      let a = d.isBuffer(e) ? e : d.from(e, i), s = a.length;
      if (s === 0)
        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
      for (o = 0; o < n - r; ++o)
        this[o + r] = a[o % s];
    }
    return this;
  };
  var qe = {};
  function $r(t, e, r) {
    qe[t] = class extends r {
      constructor() {
        super();
        Object.defineProperty(this, "message", {value: e.apply(this, arguments), writable: true, configurable: true}), this.name = `${this.name} [${t}]`, this.stack, delete this.name;
      }
      get code() {
        return t;
      }
      set code(i) {
        Object.defineProperty(this, "code", {configurable: true, enumerable: true, value: i, writable: true});
      }
      toString() {
        return `${this.name} [${t}]: ${this.message}`;
      }
    };
  }
  $r("ERR_BUFFER_OUT_OF_BOUNDS", function(t) {
    return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
  }, RangeError);
  $r("ERR_INVALID_ARG_TYPE", function(t, e) {
    return `The "${t}" argument must be of type number. Received type ${typeof e}`;
  }, TypeError);
  $r("ERR_OUT_OF_RANGE", function(t, e, r) {
    let n = `The value of "${t}" is out of range.`, i = r;
    return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = mi(String(r)) : typeof r == "bigint" && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = mi(i)), i += "n"), n += ` It must be ${e}. Received ${i}`, n;
  }, RangeError);
  function mi(t) {
    let e = "", r = t.length, n = t[0] === "-" ? 1 : 0;
    for (; r >= n + 4; r -= 3)
      e = `_${t.slice(r - 3, r)}${e}`;
    return `${t.slice(0, r)}${e}`;
  }
  function Rf(t, e, r) {
    $e(e, "offset"), (t[e] === void 0 || t[e + r] === void 0) && ft(e, t.length - (r + 1));
  }
  function Bi(t, e, r, n, i, o) {
    if (t > r || t < e) {
      let a = typeof e == "bigint" ? "n" : "", s;
      throw o > 3 ? e === 0 || e === BigInt(0) ? s = `>= 0${a} and < 2${a} ** ${(o + 1) * 8}${a}` : s = `>= -(2${a} ** ${(o + 1) * 8 - 1}${a}) and < 2 ** ${(o + 1) * 8 - 1}${a}` : s = `>= ${e}${a} and <= ${r}${a}`, new qe.ERR_OUT_OF_RANGE("value", s, t);
    }
    Rf(n, i, o);
  }
  function $e(t, e) {
    if (typeof t != "number")
      throw new qe.ERR_INVALID_ARG_TYPE(e, "number", t);
  }
  function ft(t, e, r) {
    throw Math.floor(t) !== t ? ($e(t, r), new qe.ERR_OUT_OF_RANGE(r || "offset", "an integer", t)) : e < 0 ? new qe.ERR_BUFFER_OUT_OF_BOUNDS() : new qe.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${e}`, t);
  }
  var If = /[^+/0-9A-Za-z-_]/g;
  function Bf(t) {
    if (t = t.split("=")[0], t = t.trim().replace(If, ""), t.length < 2)
      return "";
    for (; t.length % 4 !== 0; )
      t = t + "=";
    return t;
  }
  function Dr(t, e) {
    e = e || 1 / 0;
    let r, n = t.length, i = null, o = [];
    for (let a = 0; a < n; ++a) {
      if (r = t.charCodeAt(a), r > 55295 && r < 57344) {
        if (!i) {
          if (r > 56319) {
            (e -= 3) > -1 && o.push(239, 191, 189);
            continue;
          } else if (a + 1 === n) {
            (e -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          i = r;
          continue;
        }
        if (r < 56320) {
          (e -= 3) > -1 && o.push(239, 191, 189), i = r;
          continue;
        }
        r = (i - 55296 << 10 | r - 56320) + 65536;
      } else
        i && (e -= 3) > -1 && o.push(239, 191, 189);
      if (i = null, r < 128) {
        if ((e -= 1) < 0)
          break;
        o.push(r);
      } else if (r < 2048) {
        if ((e -= 2) < 0)
          break;
        o.push(r >> 6 | 192, r & 63 | 128);
      } else if (r < 65536) {
        if ((e -= 3) < 0)
          break;
        o.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
      } else if (r < 1114112) {
        if ((e -= 4) < 0)
          break;
        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
      } else
        throw new Error("Invalid code point");
    }
    return o;
  }
  function Tf(t) {
    let e = [];
    for (let r = 0; r < t.length; ++r)
      e.push(t.charCodeAt(r) & 255);
    return e;
  }
  function Of(t, e) {
    let r, n, i, o = [];
    for (let a = 0; a < t.length && !((e -= 2) < 0); ++a)
      r = t.charCodeAt(a), n = r >> 8, i = r % 256, o.push(i), o.push(n);
    return o;
  }
  function Ti(t) {
    return Ur.toByteArray(Bf(t));
  }
  function Lt(t, e, r, n) {
    let i;
    for (i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
      e[i + r] = t[i];
    return i;
  }
  function ae(t, e) {
    return t instanceof e || t != null && t.constructor != null && t.constructor.name != null && t.constructor.name === e.name;
  }
  function Kr(t) {
    return t !== t;
  }
  var Pf = function() {
    let t = "0123456789abcdef", e = new Array(256);
    for (let r = 0; r < 16; ++r) {
      let n = r * 16;
      for (let i = 0; i < 16; ++i)
        e[n + i] = t[r] + t[i];
    }
    return e;
  }();
  function ge(t) {
    return typeof BigInt > "u" ? Cf : t;
  }
  function Cf() {
    throw new Error("BigInt not supported");
  }
});
var p, y, w, c = Zs(() => {
  p = J(Ge(), 1), y = {env: {}, nextTick: (t, ...e) => {
    globalThis.setTimeout(t, 0, ...e);
  }}, w = globalThis;
});
var ze = b((sd, Gr) => {
  c();
  var He = typeof Reflect == "object" ? Reflect : null, Oi = He && typeof He.apply == "function" ? He.apply : function(e, r, n) {
    return Function.prototype.apply.call(e, r, n);
  }, Mt;
  He && typeof He.ownKeys == "function" ? Mt = He.ownKeys : Object.getOwnPropertySymbols ? Mt = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
  } : Mt = function(e) {
    return Object.getOwnPropertyNames(e);
  };
  function kf(t) {
    console && console.warn && console.warn(t);
  }
  var Ci = Number.isNaN || function(e) {
    return e !== e;
  };
  function T() {
    T.init.call(this);
  }
  Gr.exports = T;
  Gr.exports.once = Uf;
  T.EventEmitter = T;
  T.prototype._events = void 0;
  T.prototype._eventsCount = 0;
  T.prototype._maxListeners = void 0;
  var Pi = 10;
  function Ut(t) {
    if (typeof t != "function")
      throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
  }
  Object.defineProperty(T, "defaultMaxListeners", {enumerable: true, get: function() {
    return Pi;
  }, set: function(t) {
    if (typeof t != "number" || t < 0 || Ci(t))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
    Pi = t;
  }});
  T.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
  };
  T.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || Ci(e))
      throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this;
  };
  function ki(t) {
    return t._maxListeners === void 0 ? T.defaultMaxListeners : t._maxListeners;
  }
  T.prototype.getMaxListeners = function() {
    return ki(this);
  };
  T.prototype.emit = function(e) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r.push(arguments[n]);
    var i = e === "error", o = this._events;
    if (o !== void 0)
      i = i && o.error === void 0;
    else if (!i)
      return false;
    if (i) {
      var a;
      if (r.length > 0 && (a = r[0]), a instanceof Error)
        throw a;
      var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
      throw s.context = a, s;
    }
    var f = o[e];
    if (f === void 0)
      return false;
    if (typeof f == "function")
      Oi(f, this, r);
    else
      for (var u = f.length, l = Ni(f, u), n = 0; n < u; ++n)
        Oi(l[n], this, r);
    return true;
  };
  function Fi(t, e, r, n) {
    var i, o, a;
    if (Ut(r), o = t._events, o === void 0 ? (o = t._events = Object.create(null), t._eventsCount = 0) : (o.newListener !== void 0 && (t.emit("newListener", e, r.listener ? r.listener : r), o = t._events), a = o[e]), a === void 0)
      a = o[e] = r, ++t._eventsCount;
    else if (typeof a == "function" ? a = o[e] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), i = ki(t), i > 0 && a.length > i && !a.warned) {
      a.warned = true;
      var s = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
      s.name = "MaxListenersExceededWarning", s.emitter = t, s.type = e, s.count = a.length, kf(s);
    }
    return t;
  }
  T.prototype.addListener = function(e, r) {
    return Fi(this, e, r, false);
  };
  T.prototype.on = T.prototype.addListener;
  T.prototype.prependListener = function(e, r) {
    return Fi(this, e, r, true);
  };
  function Ff() {
    if (!this.fired)
      return this.target.removeListener(this.type, this.wrapFn), this.fired = true, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
  }
  function Li(t, e, r) {
    var n = {fired: false, wrapFn: void 0, target: t, type: e, listener: r}, i = Ff.bind(n);
    return i.listener = r, n.wrapFn = i, i;
  }
  T.prototype.once = function(e, r) {
    return Ut(r), this.on(e, Li(this, e, r)), this;
  };
  T.prototype.prependOnceListener = function(e, r) {
    return Ut(r), this.prependListener(e, Li(this, e, r)), this;
  };
  T.prototype.removeListener = function(e, r) {
    var n, i, o, a, s;
    if (Ut(r), i = this._events, i === void 0)
      return this;
    if (n = i[e], n === void 0)
      return this;
    if (n === r || n.listener === r)
      --this._eventsCount === 0 ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || r));
    else if (typeof n != "function") {
      for (o = -1, a = n.length - 1; a >= 0; a--)
        if (n[a] === r || n[a].listener === r) {
          s = n[a].listener, o = a;
          break;
        }
      if (o < 0)
        return this;
      o === 0 ? n.shift() : Lf(n, o), n.length === 1 && (i[e] = n[0]), i.removeListener !== void 0 && this.emit("removeListener", e, s || r);
    }
    return this;
  };
  T.prototype.off = T.prototype.removeListener;
  T.prototype.removeAllListeners = function(e) {
    var r, n, i;
    if (n = this._events, n === void 0)
      return this;
    if (n.removeListener === void 0)
      return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : n[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete n[e]), this;
    if (arguments.length === 0) {
      var o = Object.keys(n), a;
      for (i = 0; i < o.length; ++i)
        a = o[i], a !== "removeListener" && this.removeAllListeners(a);
      return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
    }
    if (r = n[e], typeof r == "function")
      this.removeListener(e, r);
    else if (r !== void 0)
      for (i = r.length - 1; i >= 0; i--)
        this.removeListener(e, r[i]);
    return this;
  };
  function Mi(t, e, r) {
    var n = t._events;
    if (n === void 0)
      return [];
    var i = n[e];
    return i === void 0 ? [] : typeof i == "function" ? r ? [i.listener || i] : [i] : r ? Mf(i) : Ni(i, i.length);
  }
  T.prototype.listeners = function(e) {
    return Mi(this, e, true);
  };
  T.prototype.rawListeners = function(e) {
    return Mi(this, e, false);
  };
  T.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : Ui.call(t, e);
  };
  T.prototype.listenerCount = Ui;
  function Ui(t) {
    var e = this._events;
    if (e !== void 0) {
      var r = e[t];
      if (typeof r == "function")
        return 1;
      if (r !== void 0)
        return r.length;
    }
    return 0;
  }
  T.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Mt(this._events) : [];
  };
  function Ni(t, e) {
    for (var r = new Array(e), n = 0; n < e; ++n)
      r[n] = t[n];
    return r;
  }
  function Lf(t, e) {
    for (; e + 1 < t.length; e++)
      t[e] = t[e + 1];
    t.pop();
  }
  function Mf(t) {
    for (var e = new Array(t.length), r = 0; r < e.length; ++r)
      e[r] = t[r].listener || t[r];
    return e;
  }
  function Uf(t, e) {
    return new Promise(function(r, n) {
      function i(a) {
        t.removeListener(e, o), n(a);
      }
      function o() {
        typeof t.removeListener == "function" && t.removeListener("error", i), r([].slice.call(arguments));
      }
      ji(t, e, o, {once: true}), e !== "error" && Nf(t, i, {once: true});
    });
  }
  function Nf(t, e, r) {
    typeof t.on == "function" && ji(t, "error", e, r);
  }
  function ji(t, e, r, n) {
    if (typeof t.on == "function")
      n.once ? t.once(e, r) : t.on(e, r);
    else if (typeof t.addEventListener == "function")
      t.addEventListener(e, function i(o) {
        n.once && t.removeEventListener(e, i), r(o);
      });
    else
      throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
  }
});
var Hr = b((fd, Di) => {
  c();
  Di.exports = ze().EventEmitter;
});
var zr = b(() => {
  c();
});
var Ki = b((cd, $i) => {
  c();
  function qi(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter(function(i) {
        return Object.getOwnPropertyDescriptor(t, i).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function jf(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e] != null ? arguments[e] : {};
      e % 2 ? qi(Object(r), true).forEach(function(n) {
        Df(t, n, r[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : qi(Object(r)).forEach(function(n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
      });
    }
    return t;
  }
  function Df(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {value: r, enumerable: true, configurable: true, writable: true}) : t[e] = r, t;
  }
  function qf(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function Wi(t, e) {
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(t, n.key, n);
    }
  }
  function Wf(t, e, r) {
    return e && Wi(t.prototype, e), r && Wi(t, r), t;
  }
  var $f = Ge(), Nt = $f.Buffer, Kf = zr(), Vr = Kf.inspect, Gf = Vr && Vr.custom || "inspect";
  function Hf(t, e, r) {
    Nt.prototype.copy.call(t, e, r);
  }
  $i.exports = function() {
    function t() {
      qf(this, t), this.head = null, this.tail = null, this.length = 0;
    }
    return Wf(t, [{key: "push", value: function(r) {
      var n = {data: r, next: null};
      this.length > 0 ? this.tail.next = n : this.head = n, this.tail = n, ++this.length;
    }}, {key: "unshift", value: function(r) {
      var n = {data: r, next: this.head};
      this.length === 0 && (this.tail = n), this.head = n, ++this.length;
    }}, {key: "shift", value: function() {
      if (this.length !== 0) {
        var r = this.head.data;
        return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, r;
      }
    }}, {key: "clear", value: function() {
      this.head = this.tail = null, this.length = 0;
    }}, {key: "join", value: function(r) {
      if (this.length === 0)
        return "";
      for (var n = this.head, i = "" + n.data; n = n.next; )
        i += r + n.data;
      return i;
    }}, {key: "concat", value: function(r) {
      if (this.length === 0)
        return Nt.alloc(0);
      for (var n = Nt.allocUnsafe(r >>> 0), i = this.head, o = 0; i; )
        Hf(i.data, n, o), o += i.data.length, i = i.next;
      return n;
    }}, {key: "consume", value: function(r, n) {
      var i;
      return r < this.head.data.length ? (i = this.head.data.slice(0, r), this.head.data = this.head.data.slice(r)) : r === this.head.data.length ? i = this.shift() : i = n ? this._getString(r) : this._getBuffer(r), i;
    }}, {key: "first", value: function() {
      return this.head.data;
    }}, {key: "_getString", value: function(r) {
      var n = this.head, i = 1, o = n.data;
      for (r -= o.length; n = n.next; ) {
        var a = n.data, s = r > a.length ? a.length : r;
        if (s === a.length ? o += a : o += a.slice(0, r), r -= s, r === 0) {
          s === a.length ? (++i, n.next ? this.head = n.next : this.head = this.tail = null) : (this.head = n, n.data = a.slice(s));
          break;
        }
        ++i;
      }
      return this.length -= i, o;
    }}, {key: "_getBuffer", value: function(r) {
      var n = Nt.allocUnsafe(r), i = this.head, o = 1;
      for (i.data.copy(n), r -= i.data.length; i = i.next; ) {
        var a = i.data, s = r > a.length ? a.length : r;
        if (a.copy(n, n.length - r, 0, s), r -= s, r === 0) {
          s === a.length ? (++o, i.next ? this.head = i.next : this.head = this.tail = null) : (this.head = i, i.data = a.slice(s));
          break;
        }
        ++o;
      }
      return this.length -= o, n;
    }}, {key: Gf, value: function(r, n) {
      return Vr(this, jf({}, n, {depth: 0, customInspect: false}));
    }}]), t;
  }();
});
var Jr = b((hd, Hi) => {
  c();
  function zf(t, e) {
    var r = this, n = this._readableState && this._readableState.destroyed, i = this._writableState && this._writableState.destroyed;
    return n || i ? (e ? e(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = true, y.nextTick(Yr, this, t)) : y.nextTick(Yr, this, t)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(t || null, function(o) {
      !e && o ? r._writableState ? r._writableState.errorEmitted ? y.nextTick(jt, r) : (r._writableState.errorEmitted = true, y.nextTick(Gi, r, o)) : y.nextTick(Gi, r, o) : e ? (y.nextTick(jt, r), e(o)) : y.nextTick(jt, r);
    }), this);
  }
  function Gi(t, e) {
    Yr(t, e), jt(t);
  }
  function jt(t) {
    t._writableState && !t._writableState.emitClose || t._readableState && !t._readableState.emitClose || t.emit("close");
  }
  function Vf() {
    this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
  }
  function Yr(t, e) {
    t.emit("error", e);
  }
  function Yf(t, e) {
    var r = t._readableState, n = t._writableState;
    r && r.autoDestroy || n && n.autoDestroy ? t.destroy(e) : t.emit("error", e);
  }
  Hi.exports = {destroy: zf, undestroy: Vf, errorOrDestroy: Yf};
});
var Ie = b((dd, Yi) => {
  c();
  function Jf(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
  }
  var Vi = {};
  function Z(t, e, r) {
    r || (r = Error);
    function n(o, a, s) {
      return typeof e == "string" ? e : e(o, a, s);
    }
    var i = function(o) {
      Jf(a, o);
      function a(s, f, u) {
        return o.call(this, n(s, f, u)) || this;
      }
      return a;
    }(r);
    i.prototype.name = r.name, i.prototype.code = t, Vi[t] = i;
  }
  function zi(t, e) {
    if (Array.isArray(t)) {
      var r = t.length;
      return t = t.map(function(n) {
        return String(n);
      }), r > 2 ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1] : r === 2 ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0]);
    } else
      return "of ".concat(e, " ").concat(String(t));
  }
  function Xf(t, e, r) {
    return t.substr(!r || r < 0 ? 0 : +r, e.length) === e;
  }
  function Zf(t, e, r) {
    return (r === void 0 || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e;
  }
  function Qf(t, e, r) {
    return typeof r != "number" && (r = 0), r + e.length > t.length ? false : t.indexOf(e, r) !== -1;
  }
  Z("ERR_INVALID_OPT_VALUE", function(t, e) {
    return 'The value "' + e + '" is invalid for option "' + t + '"';
  }, TypeError);
  Z("ERR_INVALID_ARG_TYPE", function(t, e, r) {
    var n;
    typeof e == "string" && Xf(e, "not ") ? (n = "must not be", e = e.replace(/^not /, "")) : n = "must be";
    var i;
    if (Zf(t, " argument"))
      i = "The ".concat(t, " ").concat(n, " ").concat(zi(e, "type"));
    else {
      var o = Qf(t, ".") ? "property" : "argument";
      i = 'The "'.concat(t, '" ').concat(o, " ").concat(n, " ").concat(zi(e, "type"));
    }
    return i += ". Received type ".concat(typeof r), i;
  }, TypeError);
  Z("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
  Z("ERR_METHOD_NOT_IMPLEMENTED", function(t) {
    return "The " + t + " method is not implemented";
  });
  Z("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
  Z("ERR_STREAM_DESTROYED", function(t) {
    return "Cannot call " + t + " after a stream was destroyed";
  });
  Z("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
  Z("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
  Z("ERR_STREAM_WRITE_AFTER_END", "write after end");
  Z("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
  Z("ERR_UNKNOWN_ENCODING", function(t) {
    return "Unknown encoding: " + t;
  }, TypeError);
  Z("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
  Yi.exports.codes = Vi;
});
var Xr = b((pd, Ji) => {
  c();
  var eu = Ie().codes.ERR_INVALID_OPT_VALUE;
  function tu(t, e, r) {
    return t.highWaterMark != null ? t.highWaterMark : e ? t[r] : null;
  }
  function ru(t, e, r, n) {
    var i = tu(e, n, r);
    if (i != null) {
      if (!(isFinite(i) && Math.floor(i) === i) || i < 0) {
        var o = n ? r : "highWaterMark";
        throw new eu(o, i);
      }
      return Math.floor(i);
    }
    return t.objectMode ? 16 : 16 * 1024;
  }
  Ji.exports = {getHighWaterMark: ru};
});
var ce = b((yd, Zr) => {
  c();
  typeof Object.create == "function" ? Zr.exports = function(e, r) {
    r && (e.super_ = r, e.prototype = Object.create(r.prototype, {constructor: {value: e, enumerable: false, writable: true, configurable: true}}));
  } : Zr.exports = function(e, r) {
    if (r) {
      e.super_ = r;
      var n = function() {
      };
      n.prototype = r.prototype, e.prototype = new n(), e.prototype.constructor = e;
    }
  };
});
var Zi = b((gd, Xi) => {
  c();
  Xi.exports = nu;
  function nu(t, e) {
    if (Qr("noDeprecation"))
      return t;
    var r = false;
    function n() {
      if (!r) {
        if (Qr("throwDeprecation"))
          throw new Error(e);
        Qr("traceDeprecation") ? console.trace(e) : console.warn(e), r = true;
      }
      return t.apply(this, arguments);
    }
    return n;
  }
  function Qr(t) {
    try {
      if (!w.localStorage)
        return false;
    } catch {
      return false;
    }
    var e = w.localStorage[t];
    return e == null ? false : String(e).toLowerCase() === "true";
  }
});
var rn = b((md, io) => {
  c();
  io.exports = C;
  function eo(t) {
    var e = this;
    this.next = null, this.entry = null, this.finish = function() {
      Ou(e, t);
    };
  }
  var Ve;
  C.WritableState = lt;
  var iu = {deprecate: Zi()}, to = Hr(), qt = Ge().Buffer, ou = w.Uint8Array || function() {
  };
  function au(t) {
    return qt.from(t);
  }
  function su(t) {
    return qt.isBuffer(t) || t instanceof ou;
  }
  var tn = Jr(), fu = Xr(), uu = fu.getHighWaterMark, me = Ie().codes, lu = me.ERR_INVALID_ARG_TYPE, cu = me.ERR_METHOD_NOT_IMPLEMENTED, hu = me.ERR_MULTIPLE_CALLBACK, du = me.ERR_STREAM_CANNOT_PIPE, pu = me.ERR_STREAM_DESTROYED, yu = me.ERR_STREAM_NULL_VALUES, gu = me.ERR_STREAM_WRITE_AFTER_END, mu = me.ERR_UNKNOWN_ENCODING, Ye = tn.errorOrDestroy;
  ce()(C, to);
  function wu() {
  }
  function lt(t, e, r) {
    Ve = Ve || Be(), t = t || {}, typeof r != "boolean" && (r = e instanceof Ve), this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = uu(this, t, "writableHighWaterMark", r), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
    var n = t.decodeStrings === false;
    this.decodeStrings = !n, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(i) {
      xu(e, i);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.emitClose = t.emitClose !== false, this.autoDestroy = !!t.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new eo(this);
  }
  lt.prototype.getBuffer = function() {
    for (var e = this.bufferedRequest, r = []; e; )
      r.push(e), e = e.next;
    return r;
  };
  (function() {
    try {
      Object.defineProperty(lt.prototype, "buffer", {get: iu.deprecate(function() {
        return this.getBuffer();
      }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")});
    } catch {
    }
  })();
  var Dt;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (Dt = Function.prototype[Symbol.hasInstance], Object.defineProperty(C, Symbol.hasInstance, {value: function(e) {
    return Dt.call(this, e) ? true : this !== C ? false : e && e._writableState instanceof lt;
  }})) : Dt = function(e) {
    return e instanceof this;
  };
  function C(t) {
    Ve = Ve || Be();
    var e = this instanceof Ve;
    if (!e && !Dt.call(C, this))
      return new C(t);
    this._writableState = new lt(t, this, e), this.writable = true, t && (typeof t.write == "function" && (this._write = t.write), typeof t.writev == "function" && (this._writev = t.writev), typeof t.destroy == "function" && (this._destroy = t.destroy), typeof t.final == "function" && (this._final = t.final)), to.call(this);
  }
  C.prototype.pipe = function() {
    Ye(this, new du());
  };
  function bu(t, e) {
    var r = new gu();
    Ye(t, r), y.nextTick(e, r);
  }
  function Eu(t, e, r, n) {
    var i;
    return r === null ? i = new yu() : typeof r != "string" && !e.objectMode && (i = new lu("chunk", ["string", "Buffer"], r)), i ? (Ye(t, i), y.nextTick(n, i), false) : true;
  }
  C.prototype.write = function(t, e, r) {
    var n = this._writableState, i = false, o = !n.objectMode && su(t);
    return o && !qt.isBuffer(t) && (t = au(t)), typeof e == "function" && (r = e, e = null), o ? e = "buffer" : e || (e = n.defaultEncoding), typeof r != "function" && (r = wu), n.ending ? bu(this, r) : (o || Eu(this, n, t, r)) && (n.pendingcb++, i = _u(this, n, o, t, e, r)), i;
  };
  C.prototype.cork = function() {
    this._writableState.corked++;
  };
  C.prototype.uncork = function() {
    var t = this._writableState;
    t.corked && (t.corked--, !t.writing && !t.corked && !t.bufferProcessing && t.bufferedRequest && ro(this, t));
  };
  C.prototype.setDefaultEncoding = function(e) {
    if (typeof e == "string" && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
      throw new mu(e);
    return this._writableState.defaultEncoding = e, this;
  };
  Object.defineProperty(C.prototype, "writableBuffer", {enumerable: false, get: function() {
    return this._writableState && this._writableState.getBuffer();
  }});
  function vu(t, e, r) {
    return !t.objectMode && t.decodeStrings !== false && typeof e == "string" && (e = qt.from(e, r)), e;
  }
  Object.defineProperty(C.prototype, "writableHighWaterMark", {enumerable: false, get: function() {
    return this._writableState.highWaterMark;
  }});
  function _u(t, e, r, n, i, o) {
    if (!r) {
      var a = vu(e, n, i);
      n !== a && (r = true, i = "buffer", n = a);
    }
    var s = e.objectMode ? 1 : n.length;
    e.length += s;
    var f = e.length < e.highWaterMark;
    if (f || (e.needDrain = true), e.writing || e.corked) {
      var u = e.lastBufferedRequest;
      e.lastBufferedRequest = {chunk: n, encoding: i, isBuf: r, callback: o, next: null}, u ? u.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1;
    } else
      en(t, e, false, s, n, i, o);
    return f;
  }
  function en(t, e, r, n, i, o, a) {
    e.writelen = n, e.writecb = a, e.writing = true, e.sync = true, e.destroyed ? e.onwrite(new pu("write")) : r ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), e.sync = false;
  }
  function Su(t, e, r, n, i) {
    --e.pendingcb, r ? (y.nextTick(i, n), y.nextTick(ut, t, e), t._writableState.errorEmitted = true, Ye(t, n)) : (i(n), t._writableState.errorEmitted = true, Ye(t, n), ut(t, e));
  }
  function Au(t) {
    t.writing = false, t.writecb = null, t.length -= t.writelen, t.writelen = 0;
  }
  function xu(t, e) {
    var r = t._writableState, n = r.sync, i = r.writecb;
    if (typeof i != "function")
      throw new hu();
    if (Au(r), e)
      Su(t, r, n, e, i);
    else {
      var o = no(r) || t.destroyed;
      !o && !r.corked && !r.bufferProcessing && r.bufferedRequest && ro(t, r), n ? y.nextTick(Qi, t, r, o, i) : Qi(t, r, o, i);
    }
  }
  function Qi(t, e, r, n) {
    r || Ru(t, e), e.pendingcb--, n(), ut(t, e);
  }
  function Ru(t, e) {
    e.length === 0 && e.needDrain && (e.needDrain = false, t.emit("drain"));
  }
  function ro(t, e) {
    e.bufferProcessing = true;
    var r = e.bufferedRequest;
    if (t._writev && r && r.next) {
      var n = e.bufferedRequestCount, i = new Array(n), o = e.corkedRequestsFree;
      o.entry = r;
      for (var a = 0, s = true; r; )
        i[a] = r, r.isBuf || (s = false), r = r.next, a += 1;
      i.allBuffers = s, en(t, e, true, e.length, i, "", o.finish), e.pendingcb++, e.lastBufferedRequest = null, o.next ? (e.corkedRequestsFree = o.next, o.next = null) : e.corkedRequestsFree = new eo(e), e.bufferedRequestCount = 0;
    } else {
      for (; r; ) {
        var f = r.chunk, u = r.encoding, l = r.callback, h = e.objectMode ? 1 : f.length;
        if (en(t, e, false, h, f, u, l), r = r.next, e.bufferedRequestCount--, e.writing)
          break;
      }
      r === null && (e.lastBufferedRequest = null);
    }
    e.bufferedRequest = r, e.bufferProcessing = false;
  }
  C.prototype._write = function(t, e, r) {
    r(new cu("_write()"));
  };
  C.prototype._writev = null;
  C.prototype.end = function(t, e, r) {
    var n = this._writableState;
    return typeof t == "function" ? (r = t, t = null, e = null) : typeof e == "function" && (r = e, e = null), t != null && this.write(t, e), n.corked && (n.corked = 1, this.uncork()), n.ending || Tu(this, n, r), this;
  };
  Object.defineProperty(C.prototype, "writableLength", {enumerable: false, get: function() {
    return this._writableState.length;
  }});
  function no(t) {
    return t.ending && t.length === 0 && t.bufferedRequest === null && !t.finished && !t.writing;
  }
  function Iu(t, e) {
    t._final(function(r) {
      e.pendingcb--, r && Ye(t, r), e.prefinished = true, t.emit("prefinish"), ut(t, e);
    });
  }
  function Bu(t, e) {
    !e.prefinished && !e.finalCalled && (typeof t._final == "function" && !e.destroyed ? (e.pendingcb++, e.finalCalled = true, y.nextTick(Iu, t, e)) : (e.prefinished = true, t.emit("prefinish")));
  }
  function ut(t, e) {
    var r = no(e);
    if (r && (Bu(t, e), e.pendingcb === 0 && (e.finished = true, t.emit("finish"), e.autoDestroy))) {
      var n = t._readableState;
      (!n || n.autoDestroy && n.endEmitted) && t.destroy();
    }
    return r;
  }
  function Tu(t, e, r) {
    e.ending = true, ut(t, e), r && (e.finished ? y.nextTick(r) : t.once("finish", r)), e.ended = true, t.writable = false;
  }
  function Ou(t, e, r) {
    var n = t.entry;
    for (t.entry = null; n; ) {
      var i = n.callback;
      e.pendingcb--, i(r), n = n.next;
    }
    e.corkedRequestsFree.next = t;
  }
  Object.defineProperty(C.prototype, "destroyed", {enumerable: false, get: function() {
    return this._writableState === void 0 ? false : this._writableState.destroyed;
  }, set: function(e) {
    !this._writableState || (this._writableState.destroyed = e);
  }});
  C.prototype.destroy = tn.destroy;
  C.prototype._undestroy = tn.undestroy;
  C.prototype._destroy = function(t, e) {
    e(t);
  };
});
var Be = b((wd, ao) => {
  c();
  var Pu = Object.keys || function(t) {
    var e = [];
    for (var r in t)
      e.push(r);
    return e;
  };
  ao.exports = se;
  var oo = an(), on = rn();
  ce()(se, oo);
  for (nn = Pu(on.prototype), Wt = 0; Wt < nn.length; Wt++)
    $t = nn[Wt], se.prototype[$t] || (se.prototype[$t] = on.prototype[$t]);
  var nn, $t, Wt;
  function se(t) {
    if (!(this instanceof se))
      return new se(t);
    oo.call(this, t), on.call(this, t), this.allowHalfOpen = true, t && (t.readable === false && (this.readable = false), t.writable === false && (this.writable = false), t.allowHalfOpen === false && (this.allowHalfOpen = false, this.once("end", Cu)));
  }
  Object.defineProperty(se.prototype, "writableHighWaterMark", {enumerable: false, get: function() {
    return this._writableState.highWaterMark;
  }});
  Object.defineProperty(se.prototype, "writableBuffer", {enumerable: false, get: function() {
    return this._writableState && this._writableState.getBuffer();
  }});
  Object.defineProperty(se.prototype, "writableLength", {enumerable: false, get: function() {
    return this._writableState.length;
  }});
  function Cu() {
    this._writableState.ended || y.nextTick(ku, this);
  }
  function ku(t) {
    t.end();
  }
  Object.defineProperty(se.prototype, "destroyed", {enumerable: false, get: function() {
    return this._readableState === void 0 || this._writableState === void 0 ? false : this._readableState.destroyed && this._writableState.destroyed;
  }, set: function(e) {
    this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = e, this._writableState.destroyed = e);
  }});
});
var uo = b((sn, fo) => {
  c();
  var Kt = Ge(), fe = Kt.Buffer;
  function so(t, e) {
    for (var r in t)
      e[r] = t[r];
  }
  fe.from && fe.alloc && fe.allocUnsafe && fe.allocUnsafeSlow ? fo.exports = Kt : (so(Kt, sn), sn.Buffer = Te);
  function Te(t, e, r) {
    return fe(t, e, r);
  }
  Te.prototype = Object.create(fe.prototype);
  so(fe, Te);
  Te.from = function(t, e, r) {
    if (typeof t == "number")
      throw new TypeError("Argument must not be a number");
    return fe(t, e, r);
  };
  Te.alloc = function(t, e, r) {
    if (typeof t != "number")
      throw new TypeError("Argument must be a number");
    var n = fe(t);
    return e !== void 0 ? typeof r == "string" ? n.fill(e, r) : n.fill(e) : n.fill(0), n;
  };
  Te.allocUnsafe = function(t) {
    if (typeof t != "number")
      throw new TypeError("Argument must be a number");
    return fe(t);
  };
  Te.allocUnsafeSlow = function(t) {
    if (typeof t != "number")
      throw new TypeError("Argument must be a number");
    return Kt.SlowBuffer(t);
  };
});
var ln = b((co) => {
  c();
  var un = uo().Buffer, lo = un.isEncoding || function(t) {
    switch (t = "" + t, t && t.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return true;
      default:
        return false;
    }
  };
  function Fu(t) {
    if (!t)
      return "utf8";
    for (var e; ; )
      switch (t) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return t;
        default:
          if (e)
            return;
          t = ("" + t).toLowerCase(), e = true;
      }
  }
  function Lu(t) {
    var e = Fu(t);
    if (typeof e != "string" && (un.isEncoding === lo || !lo(t)))
      throw new Error("Unknown encoding: " + t);
    return e || t;
  }
  co.StringDecoder = ct;
  function ct(t) {
    this.encoding = Lu(t);
    var e;
    switch (this.encoding) {
      case "utf16le":
        this.text = qu, this.end = Wu, e = 4;
        break;
      case "utf8":
        this.fillLast = Nu, e = 4;
        break;
      case "base64":
        this.text = $u, this.end = Ku, e = 3;
        break;
      default:
        this.write = Gu, this.end = Hu;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = un.allocUnsafe(e);
  }
  ct.prototype.write = function(t) {
    if (t.length === 0)
      return "";
    var e, r;
    if (this.lastNeed) {
      if (e = this.fillLast(t), e === void 0)
        return "";
      r = this.lastNeed, this.lastNeed = 0;
    } else
      r = 0;
    return r < t.length ? e ? e + this.text(t, r) : this.text(t, r) : e || "";
  };
  ct.prototype.end = Du;
  ct.prototype.text = ju;
  ct.prototype.fillLast = function(t) {
    if (this.lastNeed <= t.length)
      return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length;
  };
  function fn(t) {
    return t <= 127 ? 0 : t >> 5 === 6 ? 2 : t >> 4 === 14 ? 3 : t >> 3 === 30 ? 4 : t >> 6 === 2 ? -1 : -2;
  }
  function Mu(t, e, r) {
    var n = e.length - 1;
    if (n < r)
      return 0;
    var i = fn(e[n]);
    return i >= 0 ? (i > 0 && (t.lastNeed = i - 1), i) : --n < r || i === -2 ? 0 : (i = fn(e[n]), i >= 0 ? (i > 0 && (t.lastNeed = i - 2), i) : --n < r || i === -2 ? 0 : (i = fn(e[n]), i >= 0 ? (i > 0 && (i === 2 ? i = 0 : t.lastNeed = i - 3), i) : 0));
  }
  function Uu(t, e, r) {
    if ((e[0] & 192) !== 128)
      return t.lastNeed = 0, "\uFFFD";
    if (t.lastNeed > 1 && e.length > 1) {
      if ((e[1] & 192) !== 128)
        return t.lastNeed = 1, "\uFFFD";
      if (t.lastNeed > 2 && e.length > 2 && (e[2] & 192) !== 128)
        return t.lastNeed = 2, "\uFFFD";
    }
  }
  function Nu(t) {
    var e = this.lastTotal - this.lastNeed, r = Uu(this, t);
    if (r !== void 0)
      return r;
    if (this.lastNeed <= t.length)
      return t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    t.copy(this.lastChar, e, 0, t.length), this.lastNeed -= t.length;
  }
  function ju(t, e) {
    var r = Mu(this, t, e);
    if (!this.lastNeed)
      return t.toString("utf8", e);
    this.lastTotal = r;
    var n = t.length - (r - this.lastNeed);
    return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n);
  }
  function Du(t) {
    var e = t && t.length ? this.write(t) : "";
    return this.lastNeed ? e + "\uFFFD" : e;
  }
  function qu(t, e) {
    if ((t.length - e) % 2 === 0) {
      var r = t.toString("utf16le", e);
      if (r) {
        var n = r.charCodeAt(r.length - 1);
        if (n >= 55296 && n <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], r.slice(0, -1);
      }
      return r;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1);
  }
  function Wu(t) {
    var e = t && t.length ? this.write(t) : "";
    if (this.lastNeed) {
      var r = this.lastTotal - this.lastNeed;
      return e + this.lastChar.toString("utf16le", 0, r);
    }
    return e;
  }
  function $u(t, e) {
    var r = (t.length - e) % 3;
    return r === 0 ? t.toString("base64", e) : (this.lastNeed = 3 - r, this.lastTotal = 3, r === 1 ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - r));
  }
  function Ku(t) {
    var e = t && t.length ? this.write(t) : "";
    return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
  }
  function Gu(t) {
    return t.toString(this.encoding);
  }
  function Hu(t) {
    return t && t.length ? this.write(t) : "";
  }
});
var Gt = b((Ed, yo) => {
  c();
  var ho = Ie().codes.ERR_STREAM_PREMATURE_CLOSE;
  function zu(t) {
    var e = false;
    return function() {
      if (!e) {
        e = true;
        for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
          n[i] = arguments[i];
        t.apply(this, n);
      }
    };
  }
  function Vu() {
  }
  function Yu(t) {
    return t.setHeader && typeof t.abort == "function";
  }
  function po(t, e, r) {
    if (typeof e == "function")
      return po(t, null, e);
    e || (e = {}), r = zu(r || Vu);
    var n = e.readable || e.readable !== false && t.readable, i = e.writable || e.writable !== false && t.writable, o = function() {
      t.writable || s();
    }, a = t._writableState && t._writableState.finished, s = function() {
      i = false, a = true, n || r.call(t);
    }, f = t._readableState && t._readableState.endEmitted, u = function() {
      n = false, f = true, i || r.call(t);
    }, l = function(E) {
      r.call(t, E);
    }, h = function() {
      var E;
      if (n && !f)
        return (!t._readableState || !t._readableState.ended) && (E = new ho()), r.call(t, E);
      if (i && !a)
        return (!t._writableState || !t._writableState.ended) && (E = new ho()), r.call(t, E);
    }, m = function() {
      t.req.on("finish", s);
    };
    return Yu(t) ? (t.on("complete", s), t.on("abort", h), t.req ? m() : t.on("request", m)) : i && !t._writableState && (t.on("end", o), t.on("close", o)), t.on("end", u), t.on("finish", s), e.error !== false && t.on("error", l), t.on("close", h), function() {
      t.removeListener("complete", s), t.removeListener("abort", h), t.removeListener("request", m), t.req && t.req.removeListener("finish", s), t.removeListener("end", o), t.removeListener("close", o), t.removeListener("finish", s), t.removeListener("end", u), t.removeListener("error", l), t.removeListener("close", h);
    };
  }
  yo.exports = po;
});
var mo = b((vd, go) => {
  c();
  var Ht;
  function we(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {value: r, enumerable: true, configurable: true, writable: true}) : t[e] = r, t;
  }
  var Ju = Gt(), be = Symbol("lastResolve"), Oe = Symbol("lastReject"), ht = Symbol("error"), zt = Symbol("ended"), Pe = Symbol("lastPromise"), cn = Symbol("handlePromise"), Ce = Symbol("stream");
  function Ee(t, e) {
    return {value: t, done: e};
  }
  function Xu(t) {
    var e = t[be];
    if (e !== null) {
      var r = t[Ce].read();
      r !== null && (t[Pe] = null, t[be] = null, t[Oe] = null, e(Ee(r, false)));
    }
  }
  function Zu(t) {
    y.nextTick(Xu, t);
  }
  function Qu(t, e) {
    return function(r, n) {
      t.then(function() {
        if (e[zt]) {
          r(Ee(void 0, true));
          return;
        }
        e[cn](r, n);
      }, n);
    };
  }
  var el = Object.getPrototypeOf(function() {
  }), tl = Object.setPrototypeOf((Ht = {get stream() {
    return this[Ce];
  }, next: function() {
    var e = this, r = this[ht];
    if (r !== null)
      return Promise.reject(r);
    if (this[zt])
      return Promise.resolve(Ee(void 0, true));
    if (this[Ce].destroyed)
      return new Promise(function(a, s) {
        y.nextTick(function() {
          e[ht] ? s(e[ht]) : a(Ee(void 0, true));
        });
      });
    var n = this[Pe], i;
    if (n)
      i = new Promise(Qu(n, this));
    else {
      var o = this[Ce].read();
      if (o !== null)
        return Promise.resolve(Ee(o, false));
      i = new Promise(this[cn]);
    }
    return this[Pe] = i, i;
  }}, we(Ht, Symbol.asyncIterator, function() {
    return this;
  }), we(Ht, "return", function() {
    var e = this;
    return new Promise(function(r, n) {
      e[Ce].destroy(null, function(i) {
        if (i) {
          n(i);
          return;
        }
        r(Ee(void 0, true));
      });
    });
  }), Ht), el), rl = function(e) {
    var r, n = Object.create(tl, (r = {}, we(r, Ce, {value: e, writable: true}), we(r, be, {value: null, writable: true}), we(r, Oe, {value: null, writable: true}), we(r, ht, {value: null, writable: true}), we(r, zt, {value: e._readableState.endEmitted, writable: true}), we(r, cn, {value: function(o, a) {
      var s = n[Ce].read();
      s ? (n[Pe] = null, n[be] = null, n[Oe] = null, o(Ee(s, false))) : (n[be] = o, n[Oe] = a);
    }, writable: true}), r));
    return n[Pe] = null, Ju(e, function(i) {
      if (i && i.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var o = n[Oe];
        o !== null && (n[Pe] = null, n[be] = null, n[Oe] = null, o(i)), n[ht] = i;
        return;
      }
      var a = n[be];
      a !== null && (n[Pe] = null, n[be] = null, n[Oe] = null, a(Ee(void 0, true))), n[zt] = true;
    }), e.on("readable", Zu.bind(null, n)), n;
  };
  go.exports = rl;
});
var bo = b((_d, wo) => {
  c();
  wo.exports = function() {
    throw new Error("Readable.from is not available in the browser");
  };
});
var an = b((Ad, To) => {
  c();
  To.exports = B;
  var Je;
  B.ReadableState = So;
  var Sd = ze().EventEmitter, _o = function(e, r) {
    return e.listeners(r).length;
  }, pt = Hr(), Vt = Ge().Buffer, nl = w.Uint8Array || function() {
  };
  function il(t) {
    return Vt.from(t);
  }
  function ol(t) {
    return Vt.isBuffer(t) || t instanceof nl;
  }
  var hn = zr(), _;
  hn && hn.debuglog ? _ = hn.debuglog("stream") : _ = function() {
  };
  var al = Ki(), bn = Jr(), sl = Xr(), fl = sl.getHighWaterMark, Yt = Ie().codes, ul = Yt.ERR_INVALID_ARG_TYPE, ll = Yt.ERR_STREAM_PUSH_AFTER_EOF, cl = Yt.ERR_METHOD_NOT_IMPLEMENTED, hl = Yt.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, Xe, dn, pn;
  ce()(B, pt);
  var dt = bn.errorOrDestroy, yn = ["error", "close", "destroy", "pause", "resume"];
  function dl(t, e, r) {
    if (typeof t.prependListener == "function")
      return t.prependListener(e, r);
    !t._events || !t._events[e] ? t.on(e, r) : Array.isArray(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]];
  }
  function So(t, e, r) {
    Je = Je || Be(), t = t || {}, typeof r != "boolean" && (r = e instanceof Je), this.objectMode = !!t.objectMode, r && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.highWaterMark = fl(this, t, "readableHighWaterMark", r), this.buffer = new al(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.paused = true, this.emitClose = t.emitClose !== false, this.autoDestroy = !!t.autoDestroy, this.destroyed = false, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, t.encoding && (Xe || (Xe = ln().StringDecoder), this.decoder = new Xe(t.encoding), this.encoding = t.encoding);
  }
  function B(t) {
    if (Je = Je || Be(), !(this instanceof B))
      return new B(t);
    var e = this instanceof Je;
    this._readableState = new So(t, this, e), this.readable = true, t && (typeof t.read == "function" && (this._read = t.read), typeof t.destroy == "function" && (this._destroy = t.destroy)), pt.call(this);
  }
  Object.defineProperty(B.prototype, "destroyed", {enumerable: false, get: function() {
    return this._readableState === void 0 ? false : this._readableState.destroyed;
  }, set: function(e) {
    !this._readableState || (this._readableState.destroyed = e);
  }});
  B.prototype.destroy = bn.destroy;
  B.prototype._undestroy = bn.undestroy;
  B.prototype._destroy = function(t, e) {
    e(t);
  };
  B.prototype.push = function(t, e) {
    var r = this._readableState, n;
    return r.objectMode ? n = true : typeof t == "string" && (e = e || r.defaultEncoding, e !== r.encoding && (t = Vt.from(t, e), e = ""), n = true), Ao(this, t, e, false, n);
  };
  B.prototype.unshift = function(t) {
    return Ao(this, t, null, true, false);
  };
  function Ao(t, e, r, n, i) {
    _("readableAddChunk", e);
    var o = t._readableState;
    if (e === null)
      o.reading = false, gl(t, o);
    else {
      var a;
      if (i || (a = pl(o, e)), a)
        dt(t, a);
      else if (o.objectMode || e && e.length > 0)
        if (typeof e != "string" && !o.objectMode && Object.getPrototypeOf(e) !== Vt.prototype && (e = il(e)), n)
          o.endEmitted ? dt(t, new hl()) : gn(t, o, e, true);
        else if (o.ended)
          dt(t, new ll());
        else {
          if (o.destroyed)
            return false;
          o.reading = false, o.decoder && !r ? (e = o.decoder.write(e), o.objectMode || e.length !== 0 ? gn(t, o, e, false) : wn(t, o)) : gn(t, o, e, false);
        }
      else
        n || (o.reading = false, wn(t, o));
    }
    return !o.ended && (o.length < o.highWaterMark || o.length === 0);
  }
  function gn(t, e, r, n) {
    e.flowing && e.length === 0 && !e.sync ? (e.awaitDrain = 0, t.emit("data", r)) : (e.length += e.objectMode ? 1 : r.length, n ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && Jt(t)), wn(t, e);
  }
  function pl(t, e) {
    var r;
    return !ol(e) && typeof e != "string" && e !== void 0 && !t.objectMode && (r = new ul("chunk", ["string", "Buffer", "Uint8Array"], e)), r;
  }
  B.prototype.isPaused = function() {
    return this._readableState.flowing === false;
  };
  B.prototype.setEncoding = function(t) {
    Xe || (Xe = ln().StringDecoder);
    var e = new Xe(t);
    this._readableState.decoder = e, this._readableState.encoding = this._readableState.decoder.encoding;
    for (var r = this._readableState.buffer.head, n = ""; r !== null; )
      n += e.write(r.data), r = r.next;
    return this._readableState.buffer.clear(), n !== "" && this._readableState.buffer.push(n), this._readableState.length = n.length, this;
  };
  var Eo = 1073741824;
  function yl(t) {
    return t >= Eo ? t = Eo : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t;
  }
  function vo(t, e) {
    return t <= 0 || e.length === 0 && e.ended ? 0 : e.objectMode ? 1 : t !== t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = yl(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = true, 0));
  }
  B.prototype.read = function(t) {
    _("read", t), t = parseInt(t, 10);
    var e = this._readableState, r = t;
    if (t !== 0 && (e.emittedReadable = false), t === 0 && e.needReadable && ((e.highWaterMark !== 0 ? e.length >= e.highWaterMark : e.length > 0) || e.ended))
      return _("read: emitReadable", e.length, e.ended), e.length === 0 && e.ended ? mn(this) : Jt(this), null;
    if (t = vo(t, e), t === 0 && e.ended)
      return e.length === 0 && mn(this), null;
    var n = e.needReadable;
    _("need readable", n), (e.length === 0 || e.length - t < e.highWaterMark) && (n = true, _("length less than watermark", n)), e.ended || e.reading ? (n = false, _("reading or ended", n)) : n && (_("do read"), e.reading = true, e.sync = true, e.length === 0 && (e.needReadable = true), this._read(e.highWaterMark), e.sync = false, e.reading || (t = vo(r, e)));
    var i;
    return t > 0 ? i = Io(t, e) : i = null, i === null ? (e.needReadable = e.length <= e.highWaterMark, t = 0) : (e.length -= t, e.awaitDrain = 0), e.length === 0 && (e.ended || (e.needReadable = true), r !== t && e.ended && mn(this)), i !== null && this.emit("data", i), i;
  };
  function gl(t, e) {
    if (_("onEofChunk"), !e.ended) {
      if (e.decoder) {
        var r = e.decoder.end();
        r && r.length && (e.buffer.push(r), e.length += e.objectMode ? 1 : r.length);
      }
      e.ended = true, e.sync ? Jt(t) : (e.needReadable = false, e.emittedReadable || (e.emittedReadable = true, xo(t)));
    }
  }
  function Jt(t) {
    var e = t._readableState;
    _("emitReadable", e.needReadable, e.emittedReadable), e.needReadable = false, e.emittedReadable || (_("emitReadable", e.flowing), e.emittedReadable = true, y.nextTick(xo, t));
  }
  function xo(t) {
    var e = t._readableState;
    _("emitReadable_", e.destroyed, e.length, e.ended), !e.destroyed && (e.length || e.ended) && (t.emit("readable"), e.emittedReadable = false), e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark, En(t);
  }
  function wn(t, e) {
    e.readingMore || (e.readingMore = true, y.nextTick(ml, t, e));
  }
  function ml(t, e) {
    for (; !e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && e.length === 0); ) {
      var r = e.length;
      if (_("maybeReadMore read 0"), t.read(0), r === e.length)
        break;
    }
    e.readingMore = false;
  }
  B.prototype._read = function(t) {
    dt(this, new cl("_read()"));
  };
  B.prototype.pipe = function(t, e) {
    var r = this, n = this._readableState;
    switch (n.pipesCount) {
      case 0:
        n.pipes = t;
        break;
      case 1:
        n.pipes = [n.pipes, t];
        break;
      default:
        n.pipes.push(t);
        break;
    }
    n.pipesCount += 1, _("pipe count=%d opts=%j", n.pipesCount, e);
    var i = (!e || e.end !== false) && t !== y.stdout && t !== y.stderr, o = i ? s : v;
    n.endEmitted ? y.nextTick(o) : r.once("end", o), t.on("unpipe", a);
    function a(S, R) {
      _("onunpipe"), S === r && R && R.hasUnpiped === false && (R.hasUnpiped = true, l());
    }
    function s() {
      _("onend"), t.end();
    }
    var f = wl(r);
    t.on("drain", f);
    var u = false;
    function l() {
      _("cleanup"), t.removeListener("close", g), t.removeListener("finish", E), t.removeListener("drain", f), t.removeListener("error", m), t.removeListener("unpipe", a), r.removeListener("end", s), r.removeListener("end", v), r.removeListener("data", h), u = true, n.awaitDrain && (!t._writableState || t._writableState.needDrain) && f();
    }
    r.on("data", h);
    function h(S) {
      _("ondata");
      var R = t.write(S);
      _("dest.write", R), R === false && ((n.pipesCount === 1 && n.pipes === t || n.pipesCount > 1 && Bo(n.pipes, t) !== -1) && !u && (_("false write response, pause", n.awaitDrain), n.awaitDrain++), r.pause());
    }
    function m(S) {
      _("onerror", S), v(), t.removeListener("error", m), _o(t, "error") === 0 && dt(t, S);
    }
    dl(t, "error", m);
    function g() {
      t.removeListener("finish", E), v();
    }
    t.once("close", g);
    function E() {
      _("onfinish"), t.removeListener("close", g), v();
    }
    t.once("finish", E);
    function v() {
      _("unpipe"), r.unpipe(t);
    }
    return t.emit("pipe", r), n.flowing || (_("pipe resume"), r.resume()), t;
  };
  function wl(t) {
    return function() {
      var r = t._readableState;
      _("pipeOnDrain", r.awaitDrain), r.awaitDrain && r.awaitDrain--, r.awaitDrain === 0 && _o(t, "data") && (r.flowing = true, En(t));
    };
  }
  B.prototype.unpipe = function(t) {
    var e = this._readableState, r = {hasUnpiped: false};
    if (e.pipesCount === 0)
      return this;
    if (e.pipesCount === 1)
      return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = false, t && t.emit("unpipe", this, r), this);
    if (!t) {
      var n = e.pipes, i = e.pipesCount;
      e.pipes = null, e.pipesCount = 0, e.flowing = false;
      for (var o = 0; o < i; o++)
        n[o].emit("unpipe", this, {hasUnpiped: false});
      return this;
    }
    var a = Bo(e.pipes, t);
    return a === -1 ? this : (e.pipes.splice(a, 1), e.pipesCount -= 1, e.pipesCount === 1 && (e.pipes = e.pipes[0]), t.emit("unpipe", this, r), this);
  };
  B.prototype.on = function(t, e) {
    var r = pt.prototype.on.call(this, t, e), n = this._readableState;
    return t === "data" ? (n.readableListening = this.listenerCount("readable") > 0, n.flowing !== false && this.resume()) : t === "readable" && !n.endEmitted && !n.readableListening && (n.readableListening = n.needReadable = true, n.flowing = false, n.emittedReadable = false, _("on readable", n.length, n.reading), n.length ? Jt(this) : n.reading || y.nextTick(bl, this)), r;
  };
  B.prototype.addListener = B.prototype.on;
  B.prototype.removeListener = function(t, e) {
    var r = pt.prototype.removeListener.call(this, t, e);
    return t === "readable" && y.nextTick(Ro, this), r;
  };
  B.prototype.removeAllListeners = function(t) {
    var e = pt.prototype.removeAllListeners.apply(this, arguments);
    return (t === "readable" || t === void 0) && y.nextTick(Ro, this), e;
  };
  function Ro(t) {
    var e = t._readableState;
    e.readableListening = t.listenerCount("readable") > 0, e.resumeScheduled && !e.paused ? e.flowing = true : t.listenerCount("data") > 0 && t.resume();
  }
  function bl(t) {
    _("readable nexttick read 0"), t.read(0);
  }
  B.prototype.resume = function() {
    var t = this._readableState;
    return t.flowing || (_("resume"), t.flowing = !t.readableListening, El(this, t)), t.paused = false, this;
  };
  function El(t, e) {
    e.resumeScheduled || (e.resumeScheduled = true, y.nextTick(vl, t, e));
  }
  function vl(t, e) {
    _("resume", e.reading), e.reading || t.read(0), e.resumeScheduled = false, t.emit("resume"), En(t), e.flowing && !e.reading && t.read(0);
  }
  B.prototype.pause = function() {
    return _("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== false && (_("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState.paused = true, this;
  };
  function En(t) {
    var e = t._readableState;
    for (_("flow", e.flowing); e.flowing && t.read() !== null; )
      ;
  }
  B.prototype.wrap = function(t) {
    var e = this, r = this._readableState, n = false;
    t.on("end", function() {
      if (_("wrapped end"), r.decoder && !r.ended) {
        var a = r.decoder.end();
        a && a.length && e.push(a);
      }
      e.push(null);
    }), t.on("data", function(a) {
      if (_("wrapped data"), r.decoder && (a = r.decoder.write(a)), !(r.objectMode && a == null) && !(!r.objectMode && (!a || !a.length))) {
        var s = e.push(a);
        s || (n = true, t.pause());
      }
    });
    for (var i in t)
      this[i] === void 0 && typeof t[i] == "function" && (this[i] = function(s) {
        return function() {
          return t[s].apply(t, arguments);
        };
      }(i));
    for (var o = 0; o < yn.length; o++)
      t.on(yn[o], this.emit.bind(this, yn[o]));
    return this._read = function(a) {
      _("wrapped _read", a), n && (n = false, t.resume());
    }, this;
  };
  typeof Symbol == "function" && (B.prototype[Symbol.asyncIterator] = function() {
    return dn === void 0 && (dn = mo()), dn(this);
  });
  Object.defineProperty(B.prototype, "readableHighWaterMark", {enumerable: false, get: function() {
    return this._readableState.highWaterMark;
  }});
  Object.defineProperty(B.prototype, "readableBuffer", {enumerable: false, get: function() {
    return this._readableState && this._readableState.buffer;
  }});
  Object.defineProperty(B.prototype, "readableFlowing", {enumerable: false, get: function() {
    return this._readableState.flowing;
  }, set: function(e) {
    this._readableState && (this._readableState.flowing = e);
  }});
  B._fromList = Io;
  Object.defineProperty(B.prototype, "readableLength", {enumerable: false, get: function() {
    return this._readableState.length;
  }});
  function Io(t, e) {
    if (e.length === 0)
      return null;
    var r;
    return e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (e.decoder ? r = e.buffer.join("") : e.buffer.length === 1 ? r = e.buffer.first() : r = e.buffer.concat(e.length), e.buffer.clear()) : r = e.buffer.consume(t, e.decoder), r;
  }
  function mn(t) {
    var e = t._readableState;
    _("endReadable", e.endEmitted), e.endEmitted || (e.ended = true, y.nextTick(_l, e, t));
  }
  function _l(t, e) {
    if (_("endReadableNT", t.endEmitted, t.length), !t.endEmitted && t.length === 0 && (t.endEmitted = true, e.readable = false, e.emit("end"), t.autoDestroy)) {
      var r = e._writableState;
      (!r || r.autoDestroy && r.finished) && e.destroy();
    }
  }
  typeof Symbol == "function" && (B.from = function(t, e) {
    return pn === void 0 && (pn = bo()), pn(B, t, e);
  });
  function Bo(t, e) {
    for (var r = 0, n = t.length; r < n; r++)
      if (t[r] === e)
        return r;
    return -1;
  }
});
var vn = b((xd, Po) => {
  c();
  Po.exports = he;
  var Xt = Ie().codes, Sl = Xt.ERR_METHOD_NOT_IMPLEMENTED, Al = Xt.ERR_MULTIPLE_CALLBACK, xl = Xt.ERR_TRANSFORM_ALREADY_TRANSFORMING, Rl = Xt.ERR_TRANSFORM_WITH_LENGTH_0, Zt = Be();
  ce()(he, Zt);
  function Il(t, e) {
    var r = this._transformState;
    r.transforming = false;
    var n = r.writecb;
    if (n === null)
      return this.emit("error", new Al());
    r.writechunk = null, r.writecb = null, e != null && this.push(e), n(t);
    var i = this._readableState;
    i.reading = false, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
  }
  function he(t) {
    if (!(this instanceof he))
      return new he(t);
    Zt.call(this, t), this._transformState = {afterTransform: Il.bind(this), needTransform: false, transforming: false, writecb: null, writechunk: null, writeencoding: null}, this._readableState.needReadable = true, this._readableState.sync = false, t && (typeof t.transform == "function" && (this._transform = t.transform), typeof t.flush == "function" && (this._flush = t.flush)), this.on("prefinish", Bl);
  }
  function Bl() {
    var t = this;
    typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(e, r) {
      Oo(t, e, r);
    }) : Oo(this, null, null);
  }
  he.prototype.push = function(t, e) {
    return this._transformState.needTransform = false, Zt.prototype.push.call(this, t, e);
  };
  he.prototype._transform = function(t, e, r) {
    r(new Sl("_transform()"));
  };
  he.prototype._write = function(t, e, r) {
    var n = this._transformState;
    if (n.writecb = r, n.writechunk = t, n.writeencoding = e, !n.transforming) {
      var i = this._readableState;
      (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
    }
  };
  he.prototype._read = function(t) {
    var e = this._transformState;
    e.writechunk !== null && !e.transforming ? (e.transforming = true, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = true;
  };
  he.prototype._destroy = function(t, e) {
    Zt.prototype._destroy.call(this, t, function(r) {
      e(r);
    });
  };
  function Oo(t, e, r) {
    if (e)
      return t.emit("error", e);
    if (r != null && t.push(r), t._writableState.length)
      throw new Rl();
    if (t._transformState.transforming)
      throw new xl();
    return t.push(null);
  }
});
var Fo = b((Rd, ko) => {
  c();
  ko.exports = yt;
  var Co = vn();
  ce()(yt, Co);
  function yt(t) {
    if (!(this instanceof yt))
      return new yt(t);
    Co.call(this, t);
  }
  yt.prototype._transform = function(t, e, r) {
    r(null, t);
  };
});
var jo = b((Id, No) => {
  c();
  var _n;
  function Tl(t) {
    var e = false;
    return function() {
      e || (e = true, t.apply(void 0, arguments));
    };
  }
  var Uo = Ie().codes, Ol = Uo.ERR_MISSING_ARGS, Pl = Uo.ERR_STREAM_DESTROYED;
  function Lo(t) {
    if (t)
      throw t;
  }
  function Cl(t) {
    return t.setHeader && typeof t.abort == "function";
  }
  function kl(t, e, r, n) {
    n = Tl(n);
    var i = false;
    t.on("close", function() {
      i = true;
    }), _n === void 0 && (_n = Gt()), _n(t, {readable: e, writable: r}, function(a) {
      if (a)
        return n(a);
      i = true, n();
    });
    var o = false;
    return function(a) {
      if (!i && !o) {
        if (o = true, Cl(t))
          return t.abort();
        if (typeof t.destroy == "function")
          return t.destroy();
        n(a || new Pl("pipe"));
      }
    };
  }
  function Mo(t) {
    t();
  }
  function Fl(t, e) {
    return t.pipe(e);
  }
  function Ll(t) {
    return !t.length || typeof t[t.length - 1] != "function" ? Lo : t.pop();
  }
  function Ml() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    var n = Ll(e);
    if (Array.isArray(e[0]) && (e = e[0]), e.length < 2)
      throw new Ol("streams");
    var i, o = e.map(function(a, s) {
      var f = s < e.length - 1, u = s > 0;
      return kl(a, f, u, function(l) {
        i || (i = l), l && o.forEach(Mo), !f && (o.forEach(Mo), n(i));
      });
    });
    return e.reduce(Fl);
  }
  No.exports = Ml;
});
var ke = b((Q, Do) => {
  c();
  Q = Do.exports = an();
  Q.Stream = Q;
  Q.Readable = Q;
  Q.Writable = rn();
  Q.Duplex = Be();
  Q.Transform = vn();
  Q.PassThrough = Fo();
  Q.finished = Gt();
  Q.pipeline = jo();
});
var $o = b((Bd, Wo) => {
  c();
  Wo.exports = qo;
  function qo(t, e) {
    if (t && e)
      return qo(t)(e);
    if (typeof t != "function")
      throw new TypeError("need wrapper function");
    return Object.keys(t).forEach(function(n) {
      r[n] = t[n];
    }), r;
    function r() {
      for (var n = new Array(arguments.length), i = 0; i < n.length; i++)
        n[i] = arguments[i];
      var o = t.apply(this, n), a = n[n.length - 1];
      return typeof o == "function" && o !== a && Object.keys(a).forEach(function(s) {
        o[s] = a[s];
      }), o;
    }
  }
});
var An = b((Td, Sn) => {
  c();
  var Ko = $o();
  Sn.exports = Ko(Qt);
  Sn.exports.strict = Ko(Go);
  Qt.proto = Qt(function() {
    Object.defineProperty(Function.prototype, "once", {value: function() {
      return Qt(this);
    }, configurable: true}), Object.defineProperty(Function.prototype, "onceStrict", {value: function() {
      return Go(this);
    }, configurable: true});
  });
  function Qt(t) {
    var e = function() {
      return e.called ? e.value : (e.called = true, e.value = t.apply(this, arguments));
    };
    return e.called = false, e;
  }
  function Go(t) {
    var e = function() {
      if (e.called)
        throw new Error(e.onceError);
      return e.called = true, e.value = t.apply(this, arguments);
    }, r = t.name || "Function wrapped with `once`";
    return e.onceError = r + " shouldn't be called more than once", e.called = false, e;
  }
});
var xn = b((Od, zo) => {
  c();
  var Ul = An(), Nl = function() {
  }, jl = function(t) {
    return t.setHeader && typeof t.abort == "function";
  }, Dl = function(t) {
    return t.stdio && Array.isArray(t.stdio) && t.stdio.length === 3;
  }, Ho = function(t, e, r) {
    if (typeof e == "function")
      return Ho(t, null, e);
    e || (e = {}), r = Ul(r || Nl);
    var n = t._writableState, i = t._readableState, o = e.readable || e.readable !== false && t.readable, a = e.writable || e.writable !== false && t.writable, s = false, f = function() {
      t.writable || u();
    }, u = function() {
      a = false, o || r.call(t);
    }, l = function() {
      o = false, a || r.call(t);
    }, h = function(S) {
      r.call(t, S ? new Error("exited with error code: " + S) : null);
    }, m = function(S) {
      r.call(t, S);
    }, g = function() {
      y.nextTick(E);
    }, E = function() {
      if (!s) {
        if (o && !(i && i.ended && !i.destroyed))
          return r.call(t, new Error("premature close"));
        if (a && !(n && n.ended && !n.destroyed))
          return r.call(t, new Error("premature close"));
      }
    }, v = function() {
      t.req.on("finish", u);
    };
    return jl(t) ? (t.on("complete", u), t.on("abort", g), t.req ? v() : t.on("request", v)) : a && !n && (t.on("end", f), t.on("close", f)), Dl(t) && t.on("exit", h), t.on("end", l), t.on("finish", u), e.error !== false && t.on("error", m), t.on("close", g), function() {
      s = true, t.removeListener("complete", u), t.removeListener("abort", g), t.removeListener("request", v), t.req && t.req.removeListener("finish", u), t.removeListener("end", f), t.removeListener("close", f), t.removeListener("finish", u), t.removeListener("exit", h), t.removeListener("end", l), t.removeListener("error", m), t.removeListener("close", g);
    };
  };
  zo.exports = Ho;
});
var Vo = b(() => {
  c();
});
var Xo = b((kd, Jo) => {
  c();
  var ql = An(), Wl = xn(), Rn = Vo(), gt = function() {
  }, $l = /^v?\.0/.test(y.version), er = function(t) {
    return typeof t == "function";
  }, Kl = function(t) {
    return !$l || !Rn ? false : (t instanceof (Rn.ReadStream || gt) || t instanceof (Rn.WriteStream || gt)) && er(t.close);
  }, Gl = function(t) {
    return t.setHeader && er(t.abort);
  }, Hl = function(t, e, r, n) {
    n = ql(n);
    var i = false;
    t.on("close", function() {
      i = true;
    }), Wl(t, {readable: e, writable: r}, function(a) {
      if (a)
        return n(a);
      i = true, n();
    });
    var o = false;
    return function(a) {
      if (!i && !o) {
        if (o = true, Kl(t))
          return t.close(gt);
        if (Gl(t))
          return t.abort();
        if (er(t.destroy))
          return t.destroy();
        n(a || new Error("stream was destroyed"));
      }
    };
  }, Yo = function(t) {
    t();
  }, zl = function(t, e) {
    return t.pipe(e);
  }, Vl = function() {
    var t = Array.prototype.slice.call(arguments), e = er(t[t.length - 1] || gt) && t.pop() || gt;
    if (Array.isArray(t[0]) && (t = t[0]), t.length < 2)
      throw new Error("pump requires two streams per minimum");
    var r, n = t.map(function(i, o) {
      var a = o < t.length - 1, s = o > 0;
      return Hl(i, a, s, function(f) {
        r || (r = f), f && n.forEach(Yo), !a && (n.forEach(Yo), e(r));
      });
    });
    return t.reduce(zl);
  };
  Jo.exports = Vl;
});
var Qo = b((Fd, Zo) => {
  c();
  Zo.exports = Yl;
  function Yl(t) {
    var e = t._readableState;
    return e ? e.objectMode || typeof t._duplexState == "number" ? t.read() : t.read(Jl(e)) : null;
  }
  function Jl(t) {
    return t.buffer.length ? t.buffer.head ? t.buffer.head.data.length : t.buffer[0].length : t.length;
  }
});
var ia = b((Ld, na) => {
  c();
  var tr = ke(), ea = xn(), Xl = ce(), Zl = Qo(), ta = p.Buffer.from && p.Buffer.from !== Uint8Array.from ? p.Buffer.from([0]) : new p.Buffer([0]), In = function(t, e) {
    t._corked ? t.once("uncork", e) : e();
  }, Ql = function(t, e) {
    t._autoDestroy && t.destroy(e);
  }, ra = function(t, e) {
    return function(r) {
      r ? Ql(t, r.message === "premature close" ? null : r) : e && !t._ended && t.end();
    };
  }, ec = function(t, e) {
    if (!t || t._writableState && t._writableState.finished)
      return e();
    if (t._writableState)
      return t.end(e);
    t.end(), e();
  }, tc = function() {
  }, rc = function(t) {
    return new tr.Readable({objectMode: true, highWaterMark: 16}).wrap(t);
  }, U = function(t, e, r) {
    if (!(this instanceof U))
      return new U(t, e, r);
    tr.Duplex.call(this, r), this._writable = null, this._readable = null, this._readable2 = null, this._autoDestroy = !r || r.autoDestroy !== false, this._forwardDestroy = !r || r.destroy !== false, this._forwardEnd = !r || r.end !== false, this._corked = 1, this._ondrain = null, this._drained = false, this._forwarding = false, this._unwrite = null, this._unread = null, this._ended = false, this.destroyed = false, t && this.setWritable(t), e && this.setReadable(e);
  };
  Xl(U, tr.Duplex);
  U.obj = function(t, e, r) {
    return r || (r = {}), r.objectMode = true, r.highWaterMark = 16, new U(t, e, r);
  };
  U.prototype.cork = function() {
    ++this._corked === 1 && this.emit("cork");
  };
  U.prototype.uncork = function() {
    this._corked && --this._corked === 0 && this.emit("uncork");
  };
  U.prototype.setWritable = function(t) {
    if (this._unwrite && this._unwrite(), this.destroyed) {
      t && t.destroy && t.destroy();
      return;
    }
    if (t === null || t === false) {
      this.end();
      return;
    }
    var e = this, r = ea(t, {writable: true, readable: false}, ra(this, this._forwardEnd)), n = function() {
      var o = e._ondrain;
      e._ondrain = null, o && o();
    }, i = function() {
      e._writable.removeListener("drain", n), r();
    };
    this._unwrite && y.nextTick(n), this._writable = t, this._writable.on("drain", n), this._unwrite = i, this.uncork();
  };
  U.prototype.setReadable = function(t) {
    if (this._unread && this._unread(), this.destroyed) {
      t && t.destroy && t.destroy();
      return;
    }
    if (t === null || t === false) {
      this.push(null), this.resume();
      return;
    }
    var e = this, r = ea(t, {writable: false, readable: true}, ra(this)), n = function() {
      e._forward();
    }, i = function() {
      e.push(null);
    }, o = function() {
      e._readable2.removeListener("readable", n), e._readable2.removeListener("end", i), r();
    };
    this._drained = true, this._readable = t, this._readable2 = t._readableState ? t : rc(t), this._readable2.on("readable", n), this._readable2.on("end", i), this._unread = o, this._forward();
  };
  U.prototype._read = function() {
    this._drained = true, this._forward();
  };
  U.prototype._forward = function() {
    if (!(this._forwarding || !this._readable2 || !this._drained)) {
      this._forwarding = true;
      for (var t; this._drained && (t = Zl(this._readable2)) !== null; )
        this.destroyed || (this._drained = this.push(t));
      this._forwarding = false;
    }
  };
  U.prototype.destroy = function(t, e) {
    if (e || (e = tc), this.destroyed)
      return e(null);
    this.destroyed = true;
    var r = this;
    y.nextTick(function() {
      r._destroy(t), e(null);
    });
  };
  U.prototype._destroy = function(t) {
    if (t) {
      var e = this._ondrain;
      this._ondrain = null, e ? e(t) : this.emit("error", t);
    }
    this._forwardDestroy && (this._readable && this._readable.destroy && this._readable.destroy(), this._writable && this._writable.destroy && this._writable.destroy()), this.emit("close");
  };
  U.prototype._write = function(t, e, r) {
    if (!this.destroyed) {
      if (this._corked)
        return In(this, this._write.bind(this, t, e, r));
      if (t === ta)
        return this._finish(r);
      if (!this._writable)
        return r();
      this._writable.write(t) === false ? this._ondrain = r : this.destroyed || r();
    }
  };
  U.prototype._finish = function(t) {
    var e = this;
    this.emit("preend"), In(this, function() {
      ec(e._forwardEnd && e._writable, function() {
        e._writableState.prefinished === false && (e._writableState.prefinished = true), e.emit("prefinish"), In(e, t);
      });
    });
  };
  U.prototype.end = function(t, e, r) {
    return typeof t == "function" ? this.end(null, null, t) : typeof e == "function" ? this.end(t, null, e) : (this._ended = true, t && this.write(t), !this._writableState.ending && !this._writableState.destroyed && this.write(ta), tr.Writable.prototype.end.call(this, r));
  };
  na.exports = U;
});
var sa = b((Md, rr) => {
  c();
  var nc = Xo(), ic = ce(), oa = ia(), aa = function(t) {
    return t.length ? Array.isArray(t[0]) ? t[0] : Array.prototype.slice.call(t) : [];
  }, Bn = function(t) {
    var e = function() {
      var r = aa(arguments);
      if (!(this instanceof e))
        return new e(r);
      oa.call(this, null, null, t), r.length && this.setPipeline(r);
    };
    return ic(e, oa), e.prototype.setPipeline = function() {
      var r = aa(arguments), n = this, i = false, o = r[0], a = r[r.length - 1];
      a = a.readable ? a : null, o = o.writable ? o : null;
      var s = function() {
        r[0].emit("error", new Error("stream was destroyed"));
      };
      if (this.on("close", s), this.on("prefinish", function() {
        i || n.cork();
      }), nc(r, function(f) {
        if (n.removeListener("close", s), f)
          return n.destroy(f.message === "premature close" ? null : f);
        i = true, n._autoDestroy === false && (n._autoDestroy = true), n.uncork();
      }), this.destroyed)
        return s();
      this.setWritable(o), this.setReadable(a);
    }, e;
  };
  rr.exports = Bn({autoDestroy: false, destroy: false});
  rr.exports.obj = Bn({autoDestroy: false, destroy: false, objectMode: true, highWaterMark: 16});
  rr.exports.ctor = Bn;
});
var ua = b(() => {
  c();
});
var On = b((la, or) => {
  c();
  (function(t) {
    typeof define < "u" && define.amd ? define([], function() {
      return e;
    }) : typeof or < "u" && or.exports ? or.exports = e : t.secureRandom = e;
    function e(i, o) {
      if (o = o || {type: "Array"}, typeof y < "u" && typeof y.pid == "number" && y.versions && y.versions.node)
        return r(i, o);
      var a = window.crypto || window.msCrypto;
      if (!a)
        throw new Error("Your browser does not support window.crypto.");
      return n(i, o);
    }
    function r(i, o) {
      var a = ua(), s = a.randomBytes(i);
      switch (o.type) {
        case "Array":
          return [].slice.call(s);
        case "Buffer":
          return s;
        case "Uint8Array":
          for (var f = new Uint8Array(i), u = 0; u < i; ++u)
            f[u] = s.readUInt8(u);
          return f;
        default:
          throw new Error(o.type + " is unsupported.");
      }
    }
    function n(i, o) {
      var a = new Uint8Array(i), s = window.crypto || window.msCrypto;
      switch (s.getRandomValues(a), o.type) {
        case "Array":
          return [].slice.call(a);
        case "Buffer":
          try {
            var f = new p.Buffer(1);
          } catch {
            throw new Error("Buffer not supported in this environment. Use Node.js or Browserify for browser support.");
          }
          return new p.Buffer(a);
        case "Uint8Array":
          return a;
        default:
          throw new Error(o.type + " is unsupported.");
      }
    }
    e.randomArray = function(i) {
      return e(i, {type: "Array"});
    }, e.randomUint8Array = function(i) {
      return e(i, {type: "Uint8Array"});
    }, e.randomBuffer = function(i) {
      return e(i, {type: "Buffer"});
    };
  })(la);
});
var Nn = b((op, Aa) => {
  c();
  Aa.exports = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return false;
    if (typeof Symbol.iterator == "symbol")
      return true;
    var e = {}, r = Symbol("test"), n = Object(r);
    if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
      return false;
    var i = 42;
    e[r] = i;
    for (r in e)
      return false;
    if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
      return false;
    var o = Object.getOwnPropertySymbols(e);
    if (o.length !== 1 || o[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
      return false;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var a = Object.getOwnPropertyDescriptor(e, r);
      if (a.value !== i || a.enumerable !== true)
        return false;
    }
    return true;
  };
});
var xt = b((ap, xa) => {
  c();
  var bc = Nn();
  xa.exports = function() {
    return bc() && !!Symbol.toStringTag;
  };
});
var Ba = b((sp, Ia) => {
  c();
  var Ra = typeof Symbol < "u" && Symbol, Ec = Nn();
  Ia.exports = function() {
    return typeof Ra != "function" || typeof Symbol != "function" || typeof Ra("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : Ec();
  };
});
var Oa = b((fp, Ta) => {
  c();
  var vc = "Function.prototype.bind called on incompatible ", jn = Array.prototype.slice, _c = Object.prototype.toString, Sc = "[object Function]";
  Ta.exports = function(e) {
    var r = this;
    if (typeof r != "function" || _c.call(r) !== Sc)
      throw new TypeError(vc + r);
    for (var n = jn.call(arguments, 1), i, o = function() {
      if (this instanceof i) {
        var l = r.apply(this, n.concat(jn.call(arguments)));
        return Object(l) === l ? l : this;
      } else
        return r.apply(e, n.concat(jn.call(arguments)));
    }, a = Math.max(0, r.length - n.length), s = [], f = 0; f < a; f++)
      s.push("$" + f);
    if (i = Function("binder", "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }")(o), r.prototype) {
      var u = function() {
      };
      u.prototype = r.prototype, i.prototype = new u(), u.prototype = null;
    }
    return i;
  };
});
var ur = b((up, Pa) => {
  c();
  var Ac = Oa();
  Pa.exports = Function.prototype.bind || Ac;
});
var ka = b((lp, Ca) => {
  c();
  var xc = ur();
  Ca.exports = xc.call(Function.call, Object.prototype.hasOwnProperty);
});
var dr = b((cp, Ua) => {
  c();
  var I, Rt = SyntaxError, Ma = Function, rt = TypeError, Dn = function(t) {
    try {
      return Ma('"use strict"; return (' + t + ").constructor;")();
    } catch {
    }
  }, Le = Object.getOwnPropertyDescriptor;
  if (Le)
    try {
      Le({}, "");
    } catch {
      Le = null;
    }
  var qn = function() {
    throw new rt();
  }, Rc = Le ? function() {
    try {
      return arguments.callee, qn;
    } catch {
      try {
        return Le(arguments, "callee").get;
      } catch {
        return qn;
      }
    }
  }() : qn, et = Ba()(), _e = Object.getPrototypeOf || function(t) {
    return t.__proto__;
  }, tt = {}, Ic = typeof Uint8Array > "u" ? I : _e(Uint8Array), nt = {"%AggregateError%": typeof AggregateError > "u" ? I : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? I : ArrayBuffer, "%ArrayIteratorPrototype%": et ? _e([][Symbol.iterator]()) : I, "%AsyncFromSyncIteratorPrototype%": I, "%AsyncFunction%": tt, "%AsyncGenerator%": tt, "%AsyncGeneratorFunction%": tt, "%AsyncIteratorPrototype%": tt, "%Atomics%": typeof Atomics > "u" ? I : Atomics, "%BigInt%": typeof BigInt > "u" ? I : BigInt, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? I : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": typeof Float32Array > "u" ? I : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? I : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? I : FinalizationRegistry, "%Function%": Ma, "%GeneratorFunction%": tt, "%Int8Array%": typeof Int8Array > "u" ? I : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? I : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? I : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": et ? _e(_e([][Symbol.iterator]())) : I, "%JSON%": typeof JSON == "object" ? JSON : I, "%Map%": typeof Map > "u" ? I : Map, "%MapIteratorPrototype%": typeof Map > "u" || !et ? I : _e(new Map()[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? I : Promise, "%Proxy%": typeof Proxy > "u" ? I : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": typeof Reflect > "u" ? I : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? I : Set, "%SetIteratorPrototype%": typeof Set > "u" || !et ? I : _e(new Set()[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? I : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": et ? _e(""[Symbol.iterator]()) : I, "%Symbol%": et ? Symbol : I, "%SyntaxError%": Rt, "%ThrowTypeError%": Rc, "%TypedArray%": Ic, "%TypeError%": rt, "%Uint8Array%": typeof Uint8Array > "u" ? I : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? I : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? I : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? I : Uint32Array, "%URIError%": URIError, "%WeakMap%": typeof WeakMap > "u" ? I : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? I : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? I : WeakSet}, Bc = function t(e) {
    var r;
    if (e === "%AsyncFunction%")
      r = Dn("async function () {}");
    else if (e === "%GeneratorFunction%")
      r = Dn("function* () {}");
    else if (e === "%AsyncGeneratorFunction%")
      r = Dn("async function* () {}");
    else if (e === "%AsyncGenerator%") {
      var n = t("%AsyncGeneratorFunction%");
      n && (r = n.prototype);
    } else if (e === "%AsyncIteratorPrototype%") {
      var i = t("%AsyncGenerator%");
      i && (r = _e(i.prototype));
    }
    return nt[e] = r, r;
  }, Fa = {"%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"]}, hr = ur(), lr = ka(), Tc = hr.call(Function.call, Array.prototype.concat), Oc = hr.call(Function.apply, Array.prototype.splice), La = hr.call(Function.call, String.prototype.replace), cr = hr.call(Function.call, String.prototype.slice), Pc = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Cc = /\\(\\)?/g, kc = function(e) {
    var r = cr(e, 0, 1), n = cr(e, -1);
    if (r === "%" && n !== "%")
      throw new Rt("invalid intrinsic syntax, expected closing `%`");
    if (n === "%" && r !== "%")
      throw new Rt("invalid intrinsic syntax, expected opening `%`");
    var i = [];
    return La(e, Pc, function(o, a, s, f) {
      i[i.length] = s ? La(f, Cc, "$1") : a || o;
    }), i;
  }, Fc = function(e, r) {
    var n = e, i;
    if (lr(Fa, n) && (i = Fa[n], n = "%" + i[0] + "%"), lr(nt, n)) {
      var o = nt[n];
      if (o === tt && (o = Bc(n)), typeof o > "u" && !r)
        throw new rt("intrinsic " + e + " exists, but is not available. Please file an issue!");
      return {alias: i, name: n, value: o};
    }
    throw new Rt("intrinsic " + e + " does not exist!");
  };
  Ua.exports = function(e, r) {
    if (typeof e != "string" || e.length === 0)
      throw new rt("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof r != "boolean")
      throw new rt('"allowMissing" argument must be a boolean');
    var n = kc(e), i = n.length > 0 ? n[0] : "", o = Fc("%" + i + "%", r), a = o.name, s = o.value, f = false, u = o.alias;
    u && (i = u[0], Oc(n, Tc([0, 1], u)));
    for (var l = 1, h = true; l < n.length; l += 1) {
      var m = n[l], g = cr(m, 0, 1), E = cr(m, -1);
      if ((g === '"' || g === "'" || g === "`" || E === '"' || E === "'" || E === "`") && g !== E)
        throw new Rt("property names with quotes must have matching quotes");
      if ((m === "constructor" || !h) && (f = true), i += "." + m, a = "%" + i + "%", lr(nt, a))
        s = nt[a];
      else if (s != null) {
        if (!(m in s)) {
          if (!r)
            throw new rt("base intrinsic for " + e + " exists, but the property is not available.");
          return;
        }
        if (Le && l + 1 >= n.length) {
          var v = Le(s, m);
          h = !!v, h && "get" in v && !("originalValue" in v.get) ? s = v.get : s = s[m];
        } else
          h = lr(s, m), s = s[m];
        h && !f && (nt[a] = s);
      }
    }
    return s;
  };
});
var $a = b((hp, pr) => {
  c();
  var Wn = ur(), it = dr(), Da = it("%Function.prototype.apply%"), qa = it("%Function.prototype.call%"), Wa = it("%Reflect.apply%", true) || Wn.call(qa, Da), Na = it("%Object.getOwnPropertyDescriptor%", true), Me = it("%Object.defineProperty%", true), Lc = it("%Math.max%");
  if (Me)
    try {
      Me({}, "a", {value: 1});
    } catch {
      Me = null;
    }
  pr.exports = function(e) {
    var r = Wa(Wn, qa, arguments);
    if (Na && Me) {
      var n = Na(r, "length");
      n.configurable && Me(r, "length", {value: 1 + Lc(0, e.length - (arguments.length - 1))});
    }
    return r;
  };
  var ja = function() {
    return Wa(Wn, Da, arguments);
  };
  Me ? Me(pr.exports, "apply", {value: ja}) : pr.exports.apply = ja;
});
var yr = b((dp, Ha) => {
  c();
  var Ka = dr(), Ga = $a(), Mc = Ga(Ka("String.prototype.indexOf"));
  Ha.exports = function(e, r) {
    var n = Ka(e, !!r);
    return typeof n == "function" && Mc(e, ".prototype.") > -1 ? Ga(n) : n;
  };
});
var Ya = b((pp, Va) => {
  c();
  var Uc = xt()(), Nc = yr(), $n = Nc("Object.prototype.toString"), gr = function(e) {
    return Uc && e && typeof e == "object" && Symbol.toStringTag in e ? false : $n(e) === "[object Arguments]";
  }, za = function(e) {
    return gr(e) ? true : e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && $n(e) !== "[object Array]" && $n(e.callee) === "[object Function]";
  }, jc = function() {
    return gr(arguments);
  }();
  gr.isLegacyArguments = za;
  Va.exports = jc ? gr : za;
});
var Za = b((yp, Xa) => {
  c();
  var Dc = Object.prototype.toString, qc = Function.prototype.toString, Wc = /^\s*(?:function)?\*/, Ja = xt()(), Kn = Object.getPrototypeOf, $c = function() {
    if (!Ja)
      return false;
    try {
      return Function("return function*() {}")();
    } catch {
    }
  }, Gn;
  Xa.exports = function(e) {
    if (typeof e != "function")
      return false;
    if (Wc.test(qc.call(e)))
      return true;
    if (!Ja) {
      var r = Dc.call(e);
      return r === "[object GeneratorFunction]";
    }
    if (!Kn)
      return false;
    if (typeof Gn > "u") {
      var n = $c();
      Gn = n ? Kn(n) : false;
    }
    return Kn(e) === Gn;
  };
});
var Hn = b((gp, Qa) => {
  c();
  var Kc = Object.prototype.hasOwnProperty, Gc = Object.prototype.toString;
  Qa.exports = function(e, r, n) {
    if (Gc.call(r) !== "[object Function]")
      throw new TypeError("iterator must be a function");
    var i = e.length;
    if (i === +i)
      for (var o = 0; o < i; o++)
        r.call(n, e[o], o, e);
    else
      for (var a in e)
        Kc.call(e, a) && r.call(n, e[a], a, e);
  };
});
var Vn = b((mp, es) => {
  c();
  var zn = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"], Hc = typeof globalThis > "u" ? w : globalThis;
  es.exports = function() {
    for (var e = [], r = 0; r < zn.length; r++)
      typeof Hc[zn[r]] == "function" && (e[e.length] = zn[r]);
    return e;
  };
});
var Yn = b((wp, ts) => {
  c();
  var zc = dr(), mr = zc("%Object.getOwnPropertyDescriptor%", true);
  if (mr)
    try {
      mr([], "length");
    } catch {
      mr = null;
    }
  ts.exports = mr;
});
var Zn = b((bp, as) => {
  c();
  var rs = Hn(), Vc = Vn(), Xn = yr(), Yc = Xn("Object.prototype.toString"), ns = xt()(), Jc = typeof globalThis > "u" ? w : globalThis, is = Vc(), Xc = Xn("Array.prototype.indexOf", true) || function(e, r) {
    for (var n = 0; n < e.length; n += 1)
      if (e[n] === r)
        return n;
    return -1;
  }, Zc = Xn("String.prototype.slice"), os = {}, wr = Yn(), Jn = Object.getPrototypeOf;
  ns && wr && Jn && rs(is, function(t) {
    var e = new Jc[t]();
    if (Symbol.toStringTag in e) {
      var r = Jn(e), n = wr(r, Symbol.toStringTag);
      if (!n) {
        var i = Jn(r);
        n = wr(i, Symbol.toStringTag);
      }
      os[t] = n.get;
    }
  });
  var Qc = function(e) {
    var r = false;
    return rs(os, function(n, i) {
      if (!r)
        try {
          r = n.call(e) === i;
        } catch {
        }
    }), r;
  };
  as.exports = function(e) {
    if (!e || typeof e != "object")
      return false;
    if (!ns || !(Symbol.toStringTag in e)) {
      var r = Zc(Yc(e), 8, -1);
      return Xc(is, r) > -1;
    }
    return wr ? Qc(e) : false;
  };
});
var ds = b((Ep, hs) => {
  c();
  var fs = Hn(), eh = Vn(), us = yr(), th = us("Object.prototype.toString"), ls = xt()(), ss = typeof globalThis > "u" ? w : globalThis, rh = eh(), nh = us("String.prototype.slice"), cs = {}, Qn = Yn(), ei = Object.getPrototypeOf;
  ls && Qn && ei && fs(rh, function(t) {
    if (typeof ss[t] == "function") {
      var e = new ss[t]();
      if (Symbol.toStringTag in e) {
        var r = ei(e), n = Qn(r, Symbol.toStringTag);
        if (!n) {
          var i = ei(r);
          n = Qn(i, Symbol.toStringTag);
        }
        cs[t] = n.get;
      }
    }
  });
  var ih = function(e) {
    var r = false;
    return fs(cs, function(n, i) {
      if (!r)
        try {
          var o = n.call(e);
          o === i && (r = o);
        } catch {
        }
    }), r;
  }, oh = Zn();
  hs.exports = function(e) {
    return oh(e) ? !ls || !(Symbol.toStringTag in e) ? nh(th(e), 8, -1) : ih(e) : false;
  };
});
var Is = b((A) => {
  c();
  var ah = Ya(), sh = Za(), ne = ds(), ps = Zn();
  function ot(t) {
    return t.call.bind(t);
  }
  var ys = typeof BigInt < "u", gs = typeof Symbol < "u", te = ot(Object.prototype.toString), fh = ot(Number.prototype.valueOf), uh = ot(String.prototype.valueOf), lh = ot(Boolean.prototype.valueOf);
  ys && (ms = ot(BigInt.prototype.valueOf));
  var ms;
  gs && (ws = ot(Symbol.prototype.valueOf));
  var ws;
  function Bt(t, e) {
    if (typeof t != "object")
      return false;
    try {
      return e(t), true;
    } catch {
      return false;
    }
  }
  A.isArgumentsObject = ah;
  A.isGeneratorFunction = sh;
  A.isTypedArray = ps;
  function ch(t) {
    return typeof Promise < "u" && t instanceof Promise || t !== null && typeof t == "object" && typeof t.then == "function" && typeof t.catch == "function";
  }
  A.isPromise = ch;
  function hh(t) {
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(t) : ps(t) || Es(t);
  }
  A.isArrayBufferView = hh;
  function dh(t) {
    return ne(t) === "Uint8Array";
  }
  A.isUint8Array = dh;
  function ph(t) {
    return ne(t) === "Uint8ClampedArray";
  }
  A.isUint8ClampedArray = ph;
  function yh(t) {
    return ne(t) === "Uint16Array";
  }
  A.isUint16Array = yh;
  function gh(t) {
    return ne(t) === "Uint32Array";
  }
  A.isUint32Array = gh;
  function mh(t) {
    return ne(t) === "Int8Array";
  }
  A.isInt8Array = mh;
  function wh(t) {
    return ne(t) === "Int16Array";
  }
  A.isInt16Array = wh;
  function bh(t) {
    return ne(t) === "Int32Array";
  }
  A.isInt32Array = bh;
  function Eh(t) {
    return ne(t) === "Float32Array";
  }
  A.isFloat32Array = Eh;
  function vh(t) {
    return ne(t) === "Float64Array";
  }
  A.isFloat64Array = vh;
  function _h(t) {
    return ne(t) === "BigInt64Array";
  }
  A.isBigInt64Array = _h;
  function Sh(t) {
    return ne(t) === "BigUint64Array";
  }
  A.isBigUint64Array = Sh;
  function br(t) {
    return te(t) === "[object Map]";
  }
  br.working = typeof Map < "u" && br(new Map());
  function Ah(t) {
    return typeof Map > "u" ? false : br.working ? br(t) : t instanceof Map;
  }
  A.isMap = Ah;
  function Er(t) {
    return te(t) === "[object Set]";
  }
  Er.working = typeof Set < "u" && Er(new Set());
  function xh(t) {
    return typeof Set > "u" ? false : Er.working ? Er(t) : t instanceof Set;
  }
  A.isSet = xh;
  function vr(t) {
    return te(t) === "[object WeakMap]";
  }
  vr.working = typeof WeakMap < "u" && vr(new WeakMap());
  function Rh(t) {
    return typeof WeakMap > "u" ? false : vr.working ? vr(t) : t instanceof WeakMap;
  }
  A.isWeakMap = Rh;
  function ri(t) {
    return te(t) === "[object WeakSet]";
  }
  ri.working = typeof WeakSet < "u" && ri(new WeakSet());
  function Ih(t) {
    return ri(t);
  }
  A.isWeakSet = Ih;
  function _r(t) {
    return te(t) === "[object ArrayBuffer]";
  }
  _r.working = typeof ArrayBuffer < "u" && _r(new ArrayBuffer());
  function bs(t) {
    return typeof ArrayBuffer > "u" ? false : _r.working ? _r(t) : t instanceof ArrayBuffer;
  }
  A.isArrayBuffer = bs;
  function Sr(t) {
    return te(t) === "[object DataView]";
  }
  Sr.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && Sr(new DataView(new ArrayBuffer(1), 0, 1));
  function Es(t) {
    return typeof DataView > "u" ? false : Sr.working ? Sr(t) : t instanceof DataView;
  }
  A.isDataView = Es;
  var ti = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
  function It(t) {
    return te(t) === "[object SharedArrayBuffer]";
  }
  function vs(t) {
    return typeof ti > "u" ? false : (typeof It.working > "u" && (It.working = It(new ti())), It.working ? It(t) : t instanceof ti);
  }
  A.isSharedArrayBuffer = vs;
  function Bh(t) {
    return te(t) === "[object AsyncFunction]";
  }
  A.isAsyncFunction = Bh;
  function Th(t) {
    return te(t) === "[object Map Iterator]";
  }
  A.isMapIterator = Th;
  function Oh(t) {
    return te(t) === "[object Set Iterator]";
  }
  A.isSetIterator = Oh;
  function Ph(t) {
    return te(t) === "[object Generator]";
  }
  A.isGeneratorObject = Ph;
  function Ch(t) {
    return te(t) === "[object WebAssembly.Module]";
  }
  A.isWebAssemblyCompiledModule = Ch;
  function _s(t) {
    return Bt(t, fh);
  }
  A.isNumberObject = _s;
  function Ss(t) {
    return Bt(t, uh);
  }
  A.isStringObject = Ss;
  function As(t) {
    return Bt(t, lh);
  }
  A.isBooleanObject = As;
  function xs(t) {
    return ys && Bt(t, ms);
  }
  A.isBigIntObject = xs;
  function Rs(t) {
    return gs && Bt(t, ws);
  }
  A.isSymbolObject = Rs;
  function kh(t) {
    return _s(t) || Ss(t) || As(t) || xs(t) || Rs(t);
  }
  A.isBoxedPrimitive = kh;
  function Fh(t) {
    return typeof Uint8Array < "u" && (bs(t) || vs(t));
  }
  A.isAnyArrayBuffer = Fh;
  ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(t) {
    Object.defineProperty(A, t, {enumerable: false, value: function() {
      throw new Error(t + " is not supported in userland");
    }});
  });
});
var Ts = b((_p, Bs) => {
  c();
  Bs.exports = function(e) {
    return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
  };
});
var Ls = b((x) => {
  c();
  var Os = Object.getOwnPropertyDescriptors || function(e) {
    for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++)
      n[r[i]] = Object.getOwnPropertyDescriptor(e, r[i]);
    return n;
  }, Lh = /%[sdj%]/g;
  x.format = function(t) {
    if (!Or(t)) {
      for (var e = [], r = 0; r < arguments.length; r++)
        e.push(Se(arguments[r]));
      return e.join(" ");
    }
    for (var r = 1, n = arguments, i = n.length, o = String(t).replace(Lh, function(s) {
      if (s === "%%")
        return "%";
      if (r >= i)
        return s;
      switch (s) {
        case "%s":
          return String(n[r++]);
        case "%d":
          return Number(n[r++]);
        case "%j":
          try {
            return JSON.stringify(n[r++]);
          } catch {
            return "[Circular]";
          }
        default:
          return s;
      }
    }), a = n[r]; r < i; a = n[++r])
      Tr(a) || !at(a) ? o += " " + a : o += " " + Se(a);
    return o;
  };
  x.deprecate = function(t, e) {
    if (typeof y < "u" && y.noDeprecation === true)
      return t;
    if (typeof y > "u")
      return function() {
        return x.deprecate(t, e).apply(this, arguments);
      };
    var r = false;
    function n() {
      if (!r) {
        if (y.throwDeprecation)
          throw new Error(e);
        y.traceDeprecation ? console.trace(e) : console.error(e), r = true;
      }
      return t.apply(this, arguments);
    }
    return n;
  };
  var Ar = {}, Ps = /^$/;
  y.env.NODE_DEBUG && (xr = y.env.NODE_DEBUG, xr = xr.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), Ps = new RegExp("^" + xr + "$", "i"));
  var xr;
  x.debuglog = function(t) {
    if (t = t.toUpperCase(), !Ar[t])
      if (Ps.test(t)) {
        var e = y.pid;
        Ar[t] = function() {
          var r = x.format.apply(x, arguments);
          console.error("%s %d: %s", t, e, r);
        };
      } else
        Ar[t] = function() {
        };
    return Ar[t];
  };
  function Se(t, e) {
    var r = {seen: [], stylize: Uh};
    return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), ai(e) ? r.showHidden = e : e && x._extend(r, e), Ne(r.showHidden) && (r.showHidden = false), Ne(r.depth) && (r.depth = 2), Ne(r.colors) && (r.colors = false), Ne(r.customInspect) && (r.customInspect = true), r.colors && (r.stylize = Mh), Ir(r, t, r.depth);
  }
  x.inspect = Se;
  Se.colors = {bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39]};
  Se.styles = {special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red"};
  function Mh(t, e) {
    var r = Se.styles[e];
    return r ? "[" + Se.colors[r][0] + "m" + t + "[" + Se.colors[r][1] + "m" : t;
  }
  function Uh(t, e) {
    return t;
  }
  function Nh(t) {
    var e = {};
    return t.forEach(function(r, n) {
      e[r] = true;
    }), e;
  }
  function Ir(t, e, r) {
    if (t.customInspect && e && Rr(e.inspect) && e.inspect !== x.inspect && !(e.constructor && e.constructor.prototype === e)) {
      var n = e.inspect(r, t);
      return Or(n) || (n = Ir(t, n, r)), n;
    }
    var i = jh(t, e);
    if (i)
      return i;
    var o = Object.keys(e), a = Nh(o);
    if (t.showHidden && (o = Object.getOwnPropertyNames(e)), Ot(e) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0))
      return ni(e);
    if (o.length === 0) {
      if (Rr(e)) {
        var s = e.name ? ": " + e.name : "";
        return t.stylize("[Function" + s + "]", "special");
      }
      if (Tt(e))
        return t.stylize(RegExp.prototype.toString.call(e), "regexp");
      if (Br(e))
        return t.stylize(Date.prototype.toString.call(e), "date");
      if (Ot(e))
        return ni(e);
    }
    var f = "", u = false, l = ["{", "}"];
    if (Cs(e) && (u = true, l = ["[", "]"]), Rr(e)) {
      var h = e.name ? ": " + e.name : "";
      f = " [Function" + h + "]";
    }
    if (Tt(e) && (f = " " + RegExp.prototype.toString.call(e)), Br(e) && (f = " " + Date.prototype.toUTCString.call(e)), Ot(e) && (f = " " + ni(e)), o.length === 0 && (!u || e.length == 0))
      return l[0] + f + l[1];
    if (r < 0)
      return Tt(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special");
    t.seen.push(e);
    var m;
    return u ? m = Dh(t, e, r, a, o) : m = o.map(function(g) {
      return oi(t, e, r, a, g, u);
    }), t.seen.pop(), qh(m, f, l);
  }
  function jh(t, e) {
    if (Ne(e))
      return t.stylize("undefined", "undefined");
    if (Or(e)) {
      var r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return t.stylize(r, "string");
    }
    if (ks(e))
      return t.stylize("" + e, "number");
    if (ai(e))
      return t.stylize("" + e, "boolean");
    if (Tr(e))
      return t.stylize("null", "null");
  }
  function ni(t) {
    return "[" + Error.prototype.toString.call(t) + "]";
  }
  function Dh(t, e, r, n, i) {
    for (var o = [], a = 0, s = e.length; a < s; ++a)
      Fs(e, String(a)) ? o.push(oi(t, e, r, n, String(a), true)) : o.push("");
    return i.forEach(function(f) {
      f.match(/^\d+$/) || o.push(oi(t, e, r, n, f, true));
    }), o;
  }
  function oi(t, e, r, n, i, o) {
    var a, s, f;
    if (f = Object.getOwnPropertyDescriptor(e, i) || {value: e[i]}, f.get ? f.set ? s = t.stylize("[Getter/Setter]", "special") : s = t.stylize("[Getter]", "special") : f.set && (s = t.stylize("[Setter]", "special")), Fs(n, i) || (a = "[" + i + "]"), s || (t.seen.indexOf(f.value) < 0 ? (Tr(r) ? s = Ir(t, f.value, null) : s = Ir(t, f.value, r - 1), s.indexOf(`
`) > -1 && (o ? s = s.split(`
`).map(function(u) {
      return "  " + u;
    }).join(`
`).substr(2) : s = `
` + s.split(`
`).map(function(u) {
      return "   " + u;
    }).join(`
`))) : s = t.stylize("[Circular]", "special")), Ne(a)) {
      if (o && i.match(/^\d+$/))
        return s;
      a = JSON.stringify("" + i), a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.substr(1, a.length - 2), a = t.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = t.stylize(a, "string"));
    }
    return a + ": " + s;
  }
  function qh(t, e, r) {
    var n = 0, i = t.reduce(function(o, a) {
      return n++, a.indexOf(`
`) >= 0 && n++, o + a.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    return i > 60 ? r[0] + (e === "" ? "" : e + `
 `) + " " + t.join(`,
  `) + " " + r[1] : r[0] + e + " " + t.join(", ") + " " + r[1];
  }
  x.types = Is();
  function Cs(t) {
    return Array.isArray(t);
  }
  x.isArray = Cs;
  function ai(t) {
    return typeof t == "boolean";
  }
  x.isBoolean = ai;
  function Tr(t) {
    return t === null;
  }
  x.isNull = Tr;
  function Wh(t) {
    return t == null;
  }
  x.isNullOrUndefined = Wh;
  function ks(t) {
    return typeof t == "number";
  }
  x.isNumber = ks;
  function Or(t) {
    return typeof t == "string";
  }
  x.isString = Or;
  function $h(t) {
    return typeof t == "symbol";
  }
  x.isSymbol = $h;
  function Ne(t) {
    return t === void 0;
  }
  x.isUndefined = Ne;
  function Tt(t) {
    return at(t) && si(t) === "[object RegExp]";
  }
  x.isRegExp = Tt;
  x.types.isRegExp = Tt;
  function at(t) {
    return typeof t == "object" && t !== null;
  }
  x.isObject = at;
  function Br(t) {
    return at(t) && si(t) === "[object Date]";
  }
  x.isDate = Br;
  x.types.isDate = Br;
  function Ot(t) {
    return at(t) && (si(t) === "[object Error]" || t instanceof Error);
  }
  x.isError = Ot;
  x.types.isNativeError = Ot;
  function Rr(t) {
    return typeof t == "function";
  }
  x.isFunction = Rr;
  function Kh(t) {
    return t === null || typeof t == "boolean" || typeof t == "number" || typeof t == "string" || typeof t == "symbol" || typeof t > "u";
  }
  x.isPrimitive = Kh;
  x.isBuffer = Ts();
  function si(t) {
    return Object.prototype.toString.call(t);
  }
  function ii(t) {
    return t < 10 ? "0" + t.toString(10) : t.toString(10);
  }
  var Gh = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function Hh() {
    var t = new Date(), e = [ii(t.getHours()), ii(t.getMinutes()), ii(t.getSeconds())].join(":");
    return [t.getDate(), Gh[t.getMonth()], e].join(" ");
  }
  x.log = function() {
    console.log("%s - %s", Hh(), x.format.apply(x, arguments));
  };
  x.inherits = ce();
  x._extend = function(t, e) {
    if (!e || !at(e))
      return t;
    for (var r = Object.keys(e), n = r.length; n--; )
      t[r[n]] = e[r[n]];
    return t;
  };
  function Fs(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  var Ue = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
  x.promisify = function(e) {
    if (typeof e != "function")
      throw new TypeError('The "original" argument must be of type Function');
    if (Ue && e[Ue]) {
      var r = e[Ue];
      if (typeof r != "function")
        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
      return Object.defineProperty(r, Ue, {value: r, enumerable: false, writable: false, configurable: true}), r;
    }
    function r() {
      for (var n, i, o = new Promise(function(f, u) {
        n = f, i = u;
      }), a = [], s = 0; s < arguments.length; s++)
        a.push(arguments[s]);
      a.push(function(f, u) {
        f ? i(f) : n(u);
      });
      try {
        e.apply(this, a);
      } catch (f) {
        i(f);
      }
      return o;
    }
    return Object.setPrototypeOf(r, Object.getPrototypeOf(e)), Ue && Object.defineProperty(r, Ue, {value: r, enumerable: false, writable: false, configurable: true}), Object.defineProperties(r, Os(e));
  };
  x.promisify.custom = Ue;
  function zh(t, e) {
    if (!t) {
      var r = new Error("Promise was rejected with a falsy value");
      r.reason = t, t = r;
    }
    return e(t);
  }
  function Vh(t) {
    if (typeof t != "function")
      throw new TypeError('The "original" argument must be of type Function');
    function e() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r.push(arguments[n]);
      var i = r.pop();
      if (typeof i != "function")
        throw new TypeError("The last argument must be of type Function");
      var o = this, a = function() {
        return i.apply(o, arguments);
      };
      t.apply(this, r).then(function(s) {
        y.nextTick(a.bind(null, null, s));
      }, function(s) {
        y.nextTick(zh.bind(null, s, a));
      });
    }
    return Object.setPrototypeOf(e, Object.getPrototypeOf(t)), Object.defineProperties(e, Os(t)), e;
  }
  x.callbackify = Vh;
});
var Ns = b((Ap, Us) => {
  c();
  var Yh = ke(), Jh = Ls(), Ms = Yh.Transform;
  function Pt(t) {
    if (!(this instanceof Pt))
      return new Pt(t);
    this._toSkip = t.skip, Ms.call(this, t);
  }
  Jh.inherits(Pt, Ms);
  Pt.prototype._transform = function(t, e, r) {
    this._toSkip == 0 ? this.push(t) : this._toSkip > t.length ? this._toSkip -= t.length : (this._toSkip !== t.length && this.push(t.slice(this._toSkip)), this._toSkip = 0), r();
  };
  Us.exports = Pt;
});
c();
c();
var sr = J(ke(), 1), fr = J(sa(), 1);
c();
var Tn = J(ke(), 1);
function nr(t, e) {
  let r = [], n;
  t.on("data", (i) => r.push(i)), t.on("end", () => {
    n || (n = true, e(null, p.Buffer.concat(r)));
  }), t.on("error", (i) => {
    n || (n = true, e(i));
  });
}
function ir(t) {
  let e;
  return new Tn.Transform({transform(r, n, i) {
    e && (r = p.Buffer.concat([e, r]));
    let o = Math.floor(r.length / t) * t;
    o ? r.length > o ? (e = r.slice(o), this.push(r.slice(0, o))) : (e = void 0, this.push(r)) : e = e ? p.Buffer.concat([e, r]) : r, i();
  }, flush(r) {
    e && this.push(e), r();
  }});
}
function fa(t, e) {
  let r = [], n = 0;
  return new Tn.Transform({transform(i, o, a) {
    r.push(i), n += i.length, a();
  }, flush(i) {
    e(n);
    function o() {
      for (; r.length; )
        if (!t.write(r.shift()))
          return t.once("drain", o);
      t.end(), i();
    }
    o();
  }});
}
function F(t) {
  let e, r = new Promise((n, i) => {
    e = (o, a) => {
      o ? i(o) : n(a);
    };
  });
  return t && r.then((n) => t(null, n), t), [e, r];
}
var ca = J(On(), 1);
c();
c();
var mt = class {
  constructor(e) {
    this._tables[0][0][0] || this._precompute();
    let r, n, i, o, a, s = this._tables[0][4], f = this._tables[1], u = e.length, l = 1;
    if (u !== 4 && u !== 6 && u !== 8)
      throw new Error("invalid aes key size");
    for (this._key = [o = e.slice(0), a = []], r = u; r < 4 * u + 28; r++)
      i = o[r - 1], (r % u === 0 || u === 8 && r % u === 4) && (i = s[i >>> 24] << 24 ^ s[i >> 16 & 255] << 16 ^ s[i >> 8 & 255] << 8 ^ s[i & 255], r % u === 0 && (i = i << 8 ^ i >>> 24 ^ l << 24, l = l << 1 ^ (l >> 7) * 283)), o[r] = o[r - u] ^ i;
    for (n = 0; r; n++, r--)
      i = o[n & 3 ? r : r - 4], r <= 4 || n < 4 ? a[n] = i : a[n] = f[0][s[i >>> 24]] ^ f[1][s[i >> 16 & 255]] ^ f[2][s[i >> 8 & 255]] ^ f[3][s[i & 255]];
  }
  encrypt(e) {
    return this._crypt(e, 0);
  }
  decrypt(e) {
    return this._crypt(e, 1);
  }
  _precompute() {
    let e = this._tables[0], r = this._tables[1], n = e[4], i = r[4], o, a, s, f = [], u = [], l, h, m, g, E, v;
    for (o = 0; o < 256; o++)
      u[(f[o] = o << 1 ^ (o >> 7) * 283) ^ o] = o;
    for (a = s = 0; !n[a]; a ^= l || 1, s = u[s] || 1)
      for (g = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4, g = g >> 8 ^ g & 255 ^ 99, n[a] = g, i[g] = a, m = f[h = f[l = f[a]]], v = m * 16843009 ^ h * 65537 ^ l * 257 ^ a * 16843008, E = f[g] * 257 ^ g * 16843008, o = 0; o < 4; o++)
        e[o][a] = E = E << 24 ^ E >>> 8, r[o][g] = v = v << 24 ^ v >>> 8;
    for (o = 0; o < 5; o++)
      e[o] = e[o].slice(0), r[o] = r[o].slice(0);
  }
  _crypt(e, r) {
    if (e.length !== 4)
      throw new Error("invalid aes block size");
    let n = this._key[r], i = e[0] ^ n[0], o = e[r ? 3 : 1] ^ n[1], a = e[2] ^ n[2], s = e[r ? 1 : 3] ^ n[3], f, u, l, h = n.length / 4 - 2, m, g = 4, E = [0, 0, 0, 0], v = this._tables[r], S = v[0], R = v[1], k = v[2], N = v[3], D = v[4];
    for (m = 0; m < h; m++)
      f = S[i >>> 24] ^ R[o >> 16 & 255] ^ k[a >> 8 & 255] ^ N[s & 255] ^ n[g], u = S[o >>> 24] ^ R[a >> 16 & 255] ^ k[s >> 8 & 255] ^ N[i & 255] ^ n[g + 1], l = S[a >>> 24] ^ R[s >> 16 & 255] ^ k[i >> 8 & 255] ^ N[o & 255] ^ n[g + 2], s = S[s >>> 24] ^ R[i >> 16 & 255] ^ k[o >> 8 & 255] ^ N[a & 255] ^ n[g + 3], g += 4, i = f, o = u, a = l;
    for (m = 0; m < 4; m++)
      E[r ? 3 & -m : m] = D[i >>> 24] << 24 ^ D[o >> 16 & 255] << 16 ^ D[a >> 8 & 255] << 8 ^ D[s & 255] ^ n[g++], f = i, i = o, o = a, a = s, s = f;
    return E;
  }
};
mt.prototype._tables = [[[], [], [], [], []], [[], [], [], [], []]];
function Pn(t) {
  let e, r, n, i = [2479122403, 2108737444, 3518906241, 22203222], o = p.Buffer.alloc(Math.ceil(t.length / 4) * 4);
  for (o.set(t, 0), n = 65536; n--; )
    for (r = 0; r < t.length; r += 16) {
      let s = [0, 0, 0, 0];
      for (e = 0; e < 16; e += 4)
        e + r < t.length && (s[e / 4] = o.readInt32BE(e + r));
      i = new mt(s).encrypt(i);
    }
  let a = p.Buffer.allocUnsafe(16);
  for (e = 0; e < 4; e++)
    a.writeInt32BE(i[e], e * 4);
  return a;
}
function Cn(t, e, r) {
  let n = p.Buffer.from(e.s, "base64"), i = 1e5, o = "SHA-512";
  window.crypto.subtle.importKey("raw", t, "PBKDF2", false, ["deriveKey", "deriveBits"]).then((a) => window.crypto.subtle.deriveBits({name: "PBKDF2", salt: n, iterations: i, hash: {name: o}}, a, 256)).then((a) => {
    r(null, p.Buffer.from(a));
  }).catch(r);
}
var $ = class {
  constructor(e) {
    if (e.length !== 16)
      throw Error("Wrong key length. Key must be 128bit.");
    let r = [];
    for (let n = 0; n < 4; n++)
      r[n] = e.readInt32BE(n * 4);
    this.aes = new mt(r);
  }
  encryptCBC(e) {
    let r = [0, 0, 0, 0], n = Array(4), i, o;
    for (i = 0; i < e.length; i += 16) {
      for (o = 0; o < 4; o++)
        n[o] = e.readUInt32BE(i + o * 4) ^ r[o];
      for (r = this.aes.encrypt(n), o = 0; o < 4; o++)
        e.writeInt32BE(r[o], i + o * 4);
    }
  }
  decryptCBC(e) {
    let r = [0, 0, 0, 0], n = Array(4), i = Array(4), o, a;
    for (o = 0; o < e.length; o += 16) {
      for (a = 0; a < 4; a++)
        n[a] = e.readUInt32BE(o + a * 4);
      for (i = n, n = this.aes.decrypt(n), a = 0; a < 4; a++)
        e.writeInt32BE(n[a] ^ r[a], o + a * 4);
      r = i;
    }
  }
  stringhash(e) {
    let r = [0, 0, 0, 0];
    for (let i = 0; i < e.length; i += 4)
      if (e.length - i < 4) {
        let o = e.length - i;
        r[i / 4 & 3] ^= e.readIntBE(i, o) << (4 - o) * 8;
      } else
        r[i / 4 & 3] ^= e.readInt32BE(i);
    for (let i = 16384; i--; )
      r = this.aes.encrypt(r);
    let n = p.Buffer.allocUnsafe(8);
    return n.writeInt32BE(r[0], 0), n.writeInt32BE(r[2], 4), n;
  }
  encryptECB(e) {
    let r = [];
    for (let n = 0; n < e.length; n += 16)
      r[0] = e.readInt32BE(n), r[1] = e.readInt32BE(n + 4), r[2] = e.readInt32BE(n + 8), r[3] = e.readInt32BE(n + 12), r = this.aes.encrypt(r), e.writeInt32BE(r[0], n), e.writeInt32BE(r[1], n + 4), e.writeInt32BE(r[2], n + 8), e.writeInt32BE(r[3], n + 12);
    return e;
  }
  decryptECB(e) {
    let r = [];
    for (let n = 0; n < e.length; n += 16)
      r[0] = e.readInt32BE(n), r[1] = e.readInt32BE(n + 4), r[2] = e.readInt32BE(n + 8), r[3] = e.readInt32BE(n + 12), r = this.aes.decrypt(r), e.writeInt32BE(r[0], n), e.writeInt32BE(r[1], n + 4), e.writeInt32BE(r[2], n + 8), e.writeInt32BE(r[3], n + 12);
    return e;
  }
}, ar = class {
  constructor(e, r, n = 0) {
    this.aes = e, this.nonce = r.slice(0, 8), this.increment = 131072, this.posNext = this.increment, this.pos = 0, this.ctr = p.Buffer.alloc(16), this.nonce.copy(this.ctr, 0), this.incrementCTR(n / 16);
  }
  encrypt(e) {
    for (let r = 0; r < e.length; r += 16) {
      let n = this.aes.encryptECB(p.Buffer.from(this.ctr));
      for (let i = 0; i < 16; i++)
        e[r + i] ^= n[i];
      this.incrementCTR();
    }
    return e;
  }
  decrypt(e) {
    for (let r = 0; r < e.length; r += 16) {
      let n = this.aes.encryptECB(p.Buffer.from(this.ctr));
      for (let i = 0; i < 16; i++)
        e[r + i] ^= n[i];
      this.incrementCTR();
    }
    return e;
  }
  incrementCTR(e = 1) {
    let r = this.ctr, n = 15, i;
    for (; e !== 0; )
      i = (e + r[n]) % 256, e = Math.floor((e + r[n]) / 256), r[n] = i, n -= 1, n < 0 && (n = 15);
  }
}, wt = class {
  constructor(e, r, n = 0) {
    this.aes = e, this.nonce = r.slice(0, 8), this.increment = 131072, this.posNext = this.increment, this.pos = 0, this.mac = p.Buffer.alloc(16), this.nonce.copy(this.mac, 0), this.nonce.copy(this.mac, 8), this.macs = [];
  }
  condense() {
    this.mac && (this.macs.push(this.mac), this.mac = void 0);
    let e = p.Buffer.alloc(16);
    for (let n = 0; n < this.macs.length; n++) {
      for (let i = 0; i < 16; i++)
        e[i] ^= this.macs[n][i];
      this.aes.encryptECB(e);
    }
    let r = p.Buffer.allocUnsafe(8);
    return r.writeInt32BE(e.readInt32BE(0) ^ e.readInt32BE(4), 0), r.writeInt32BE(e.readInt32BE(8) ^ e.readInt32BE(12), 4), r;
  }
  update(e) {
    for (let r = 0; r < e.length; r += 16) {
      for (let n = 0; n < 16; n++)
        this.mac[n] ^= e[r + n];
      this.aes.encryptECB(this.mac), this.checkBounding();
    }
  }
  checkBounding() {
    this.pos += 16, this.pos >= this.posNext && (this.macs.push(p.Buffer.from(this.mac)), this.nonce.copy(this.mac, 0), this.nonce.copy(this.mac, 8), this.increment < 1048576 && (this.increment += 131072), this.posNext += this.increment);
  }
};
function K(t) {
  return typeof t == "string" ? bt(t) : t;
}
function P(t) {
  return t.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function bt(t) {
  return p.Buffer.from(t, "base64");
}
function ue(t) {
  return new $(Ln(t).slice(0, 16));
}
function kn(t, e = {}) {
  let r = e.start || 0;
  if (r !== 0)
    throw Error("Encryption cannot start midstream otherwise MAC verification will fail.");
  t = K(t), t || (t = (0, ca.default)(24)), t instanceof p.Buffer || (t = p.Buffer.from(t));
  let n = new sr.Transform({transform(s, f, u) {
    a.update(s);
    let l = o.encrypt(s);
    u(null, p.Buffer.from(l));
  }, flush(s) {
    n.mac = a.condense(), n.key = ac(t, n.mac), s();
  }});
  if (t.length !== 24)
    throw Error("Wrong key length. Key must be 192bit.");
  let i = new $(t.slice(0, 16)), o = new ar(i, t.slice(16), r), a = new wt(i, t.slice(16));
  return n = (0, fr.default)(ir(16), n), n;
}
function Fn(t, e = {}) {
  let r = e.start || 0;
  if (r !== 0 && (e.disableVerification = true), r % 16 !== 0)
    throw Error("start argument of megaDecrypt must be a multiple of 16");
  t = K(t), t instanceof p.Buffer || (t = p.Buffer.from(t));
  let n = ue(t), i = new ar(n, t.slice(16), r), o = !e.disableVerification && new wt(n, t.slice(16)), a = new sr.Transform({transform(s, f, u) {
    let l = i.decrypt(s);
    o && o.update(l), u(null, p.Buffer.from(l));
  }, flush(s) {
    if (o && (a.mac = o.condense()), !e.disableVerification && !a.mac.equals(t.slice(24))) {
      s(Error("MAC verification failed"));
      return;
    }
    s();
  }});
  return a = (0, fr.default)(ir(16), a), a;
}
function oc(t) {
  t = K(t), t instanceof p.Buffer || (t = p.Buffer.from(t));
  let e = new sr.Transform({transform(i, o, a) {
    n.update(i), a(null, i);
  }, flush(i) {
    if (e.mac = n.condense(), !e.mac.equals(t.slice(24))) {
      i(Error("MAC verification failed"));
      return;
    }
    i();
  }});
  if (t.length !== 32)
    throw Error("Wrong key length. Key must be 256bit.");
  let r = ue(t), n = new wt(r, t.slice(16));
  return e = (0, fr.default)(ir(16), e), e;
}
function Ln(t) {
  let e = p.Buffer.alloc(32);
  t.copy(e);
  for (let r = 0; r < 16; r++)
    e.writeUInt8(e.readUInt8(r) ^ e.readUInt8(16 + r, true), r);
  return e;
}
function ac(t, e) {
  let r = p.Buffer.alloc(32);
  t.copy(r), e.copy(r, 24);
  for (let n = 0; n < 16; n++)
    r.writeUInt8(r.readUInt8(n) ^ r.readUInt8(16 + n), n);
  return r;
}
function ha(t, e) {
  if (t.length !== e.length)
    return false;
  let r = t.length, n = 0;
  for (let i = 0; i < r; i++)
    n |= t[i] ^ e[i];
  return n === 0;
}
c();
c();
var de = {};
var sc = Math.log(2);
function _t(t) {
  let e = [];
  for (; t-- > 0; )
    e[t] = 0;
  return e;
}
function St(t) {
  let e = t.length;
  if (t[e - 1])
    return t;
  for (; e > 1 && t[e - 1] === 0; )
    e--;
  return t.slice(0, e);
}
function fc(t) {
  let e = 1, r;
  return (r = t >>> 16) !== 0 && (t = r, e += 16), (r = t >> 8) !== 0 && (t = r, e += 8), (r = t >> 4) !== 0 && (t = r, e += 4), (r = t >> 2) !== 0 && (t = r, e += 2), (r = t >> 1) !== 0 && (t = r, e += 1), e;
}
function pa(t, e) {
  let r = t.length, n = e.length;
  if (r < n)
    return pa(e, t);
  let i = [], o = 0, a = 0;
  for (; a < n; a++)
    o += t[a] + e[a], i[a] = o & 268435455, o >>>= 28;
  for (; a < r; a++)
    o += t[a], i[a] = o & 268435455, o >>>= 28;
  return o && (i[a] = o), i;
}
function ee(t, e) {
  let r = t.length, n = e.length;
  if (n > r)
    return [];
  if (n === r) {
    if (e[n - 1] > t[n - 1])
      return [];
    if (n === 1)
      return [t[0] - e[0]];
  }
  let i = [], o = 0, a;
  for (a = 0; a < n; a++)
    o += t[a] - e[a], i[a] = o & 268435455, o >>= 28;
  for (; a < r; a++)
    o += t[a], i[a] = o & 268435455, o >>= 28;
  return o ? [] : St(i);
}
function Mn(t, e, r, n, i) {
  let o = r & 16383, a = r >> 14, s = n & 16383, f = n >> 14, u = a * s + f * o, l = o * s + ((u & 16383) << 14) + t[e] + i;
  return t[e] = l & 268435455, i = a * f + (u >> 14) + (l >> 28), i;
}
function uc(t) {
  let e = t.length, r = 2 * e, n = _t(r), i = 0, o, a;
  for (o = 0; o < e; o++) {
    for (i = Mn(n, 2 * o, t[o], t[o], 0), a = o + 1; a < e; a++)
      i = Mn(n, o + a, 2 * t[a], t[o], i);
    n[o + e] = i;
  }
  return St(n);
}
function ve(t, e) {
  let r = t.length, n = e.length, i = _t(r + n - 1), o, a, s;
  for (a = 0; a < n; a++) {
    for (o = 0, s = 0; s < r; s++)
      o = Mn(i, a + s, t[s], e[a], o);
    i[a + r] = o;
  }
  return St(i);
}
function Et(t, e, r) {
  let n = 0;
  for (; e >= 0 && r-- > 0; )
    n = n * 268435456 + t[e--];
  return n;
}
function ya(t, e) {
  let r = t.length - 1, n = e.length - 1, i = r - n, o, a, s, f;
  if (r < n || r === n && (t[r] < e[r] || r > 0 && t[r] === e[r] && t[r - 1] < e[r - 1]))
    return de.q = [0], de.mod = t, de;
  if (r === n && Et(t, n, 2) / Et(e, n, 2) < 4) {
    for (o = t.concat(), a = 0; s = ee(o, e), s.length !== 0; )
      o = s, a++;
    return de.q = [a], de.mod = o, de;
  }
  let u = Math.floor(Math.log(e[n]) / sc) + 1, l = 28 - u;
  o = t.concat();
  let h = e.concat();
  if (l) {
    for (f = n; f > 0; f--)
      h[f] = h[f] << l & 268435455 | h[f - 1] >> u;
    for (h[0] = h[0] << l & 268435455, o[r] & (268435455 << u & 268435455) && (o[++r] = 0, i++), f = r; f > 0; f--)
      o[f] = o[f] << l & 268435455 | o[f - 1] >> u;
    o[0] = o[0] << l & 268435455;
  }
  let m, g = _t(i + 1), E = _t(i).concat(h);
  for (; m = ee(o, E), m.length !== 0; )
    g[i]++, o = m;
  let v = h[n], S = Et(h, n, 2), R;
  for (f = r; f > n; f--) {
    R = f - n - 1, f >= o.length ? g[R] = 1 : o[f] === v ? g[R] = 268435455 : g[R] = Math.floor(Et(o, f, 2) / v);
    let k = Et(o, f, 3);
    for (; g[R] * S > k; )
      g[R]--;
    E = E.slice(1), m = ee(o, ve([g[R]], E)), m.length === 0 && (g[R]--, m = ee(o, ve([g[R]], E))), o = m;
  }
  if (l) {
    for (f = 0; f < o.length - 1; f++)
      o[f] = o[f] >> l | o[f + 1] << u & 268435455;
    o[o.length - 1] >>= l;
  }
  return de.q = St(g), de.mod = St(o), de;
}
function lc(t, e) {
  let r = 0, n;
  for (let i = t.length - 1; i >= 0; i--)
    n = t[i], r = ((n >> 14) + (r << 14)) % e, r = ((n & 16383) + (r << 14)) % e;
  return r;
}
function Ze(t, e) {
  if (e.length === 1) {
    if (t.length === 1)
      return [t[0] % e[0]];
    if (e[0] < 16383)
      return [lc(t, e[0])];
  }
  return ya(t, e).mod;
}
function vt(t, e, r) {
  let n = t.length - (e.length << 1);
  if (n > 0)
    return vt(t.slice(0, n).concat(vt(t.slice(n), e, r)), e, r);
  let i = e.length + 1, o = e.length - 1, a, s = ve(t.slice(o), r).slice(i), f = t.slice(0, i), u = ve(s, e).slice(0, i), l = ee(f, u);
  l.length === 0 && (f[i] = 1, l = ee(f, u));
  for (let h = 0; a = ee(l, e), a.length !== 0; h++)
    if (l = a, h >= 3)
      return vt(l, e, r);
  return l;
}
function da(t, e, r) {
  let n = t.concat(), i = e.length - 1, o = r.length * 2, a = _t(o + 1);
  for (a[o] = 1, a = ya(a, r).q, o = fc(e[i]) - 2; i >= 0; i--) {
    for (; o >= 0; o -= 1)
      n = vt(uc(n), r, a), e[i] & 1 << o && (n = vt(ve(n, t), r, a));
    o = 28 - 1;
  }
  return n;
}
function cc(t, e, r, n, i) {
  let o = da(Ze(t, r), Ze(e, ee(r, [1])), r), a = da(Ze(t, n), Ze(e, ee(n, [1])), n), s = ee(a, o);
  return s.length === 0 ? (s = ee(o, a), s = Ze(ve(s, i), n), s = ee(n, s)) : s = Ze(ve(s, i), n), pa(ve(s, r), o);
}
function ga(t) {
  let e = 1, r = [0], n = 0, i = 256, o = t.length, a;
  if (o < 2)
    return 0;
  let s = (o - 2) * 8, f = t.charCodeAt(0) * 256 + t.charCodeAt(1);
  if (f > s || f < s - 8)
    return 0;
  for (let u = 0; u < s; u++)
    (i <<= 1) > 255 && (i = 1, a = t.charCodeAt(--o)), e > 268435455 && (e = 1, r[++n] = 0), a & i && (r[n] |= e), e <<= 1;
  return r;
}
function hc(t) {
  let e = 1, r = 0, n = [0], i = 1, o = 0, a = t.length * 28, s = "", f;
  for (f = 0; f < a; f++)
    t[r] & e && (n[o] |= i), (i <<= 1) > 255 && (i = 1, n[++o] = 0), (e <<= 1) > 268435455 && (e = 1, r++);
  for (; o >= 0 && n[o] === 0; )
    o--;
  for (f = 0; f <= o; f++)
    s = String.fromCharCode(n[f]) + s;
  return s;
}
function ma(t) {
  let e = [];
  for (let r = 0; r < 4; r++) {
    let n = (t[0] * 256 + t[1] + 7 >> 3) + 2;
    if (e[r] = ga(t.toString("binary").substr(0, n)), typeof e[r] == "number") {
      if (r !== 4 || t.length >= 16)
        return false;
      break;
    }
    t = t.slice(n);
  }
  return e;
}
function wa(t, e) {
  let r = ga(t.toString("binary")), n = hc(cc(r, e[2], e[0], e[1], e[3]));
  return p.Buffer.from(n, "binary");
}
c();
var Sa = J(ze(), 1);
c();
var ba = null;
c();
var dc = globalThis.fetch, Ea = dc;
c();
var pc = globalThis.AbortController || ba, At = pc;
var Un = 4, va = {1: "EINTERNAL (-1): An internal error has occurred. Please submit a bug report, detailing the exact circumstances in which this error occurred.", 2: "EARGS (-2): You have passed invalid arguments to this command.", 3: "EAGAIN (-3): A temporary congestion or server malfunction prevented your request from being processed. No data was altered. Retried " + Un + " times.", 4: "ERATELIMIT (-4): You have exceeded your command weight per time quota. Please wait a few seconds, then try again (this should never happen in sane real-life applications).", 5: "EFAILED (-5): The upload failed. Please restart it from scratch.", 6: "ETOOMANY (-6): Too many concurrent IP addresses are accessing this upload target URL.", 7: "ERANGE (-7): The upload file packet is out of range or not starting and ending on a chunk boundary.", 8: "EEXPIRED (-8): The upload target URL you are trying to access has expired. Please request a fresh one.", 9: "ENOENT (-9): Object (typically, node or user) not found. Wrong password?", 10: "ECIRCULAR (-10): Circular linkage attempted", 11: "EACCESS (-11): Access violation (e.g., trying to write to a read-only share)", 12: "EEXIST (-12): Trying to create an object that already exists", 13: "EINCOMPLETE (-13): Trying to access an incomplete resource", 14: "EKEY (-14): A decryption operation failed (never returned by the API)", 15: "ESID (-15): Invalid or expired user session, please relogin", 16: "EBLOCKED (-16): User blocked", 17: "EOVERQUOTA (-17): Request over quota", 18: "ETEMPUNAVAIL (-18): Resource temporarily not available, please try again later"}, yc = "https://g.api.mega.co.nz/", gc = null, mc = null, Fe = class extends Sa.EventEmitter {
  constructor(e, r = {}) {
    super();
    this.keepalive = e, this.counterId = Math.random().toString().substr(2, 10), this.gateway = r.gateway || yc;
    let n = "1.0.6";
    this.httpAgent = r.httpAgent || gc, this.httpsAgent = r.httpsAgent || mc, this.fetch = r.fetch || this.defaultFetch.bind(this), this.closed = false;
  }
  defaultFetch(e, r) {
    return r || (r = {}), r.agent || (r.agent = (n) => n.protocol === "http:" ? this.httpAgent : this.httpsAgent), this.userAgent && (r.headers || (r.headers = {}), r.headers["user-agent"] || (r.headers["user-agent"] = this.userAgent)), Ea(e, r);
  }
  request(e, r, n = 0) {
    let i = e.a === "sml";
    if (this.closed && !i)
      throw Error("API is closed");
    let [o, a] = F(r), s = {id: (this.counterId++).toString()};
    return this.sid && (s.sid = this.sid), typeof e._querystring == "object" && (Object.assign(s, e._querystring), delete e._querystring), this.fetch(`${this.gateway}cs?${new URLSearchParams(s)}`, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify([e])}).then(_a).then((f) => {
      if (this.closed && !i)
        return;
      if (!f)
        return o(Error("Empty response"));
      f.length && (f = f[0]);
      let u;
      if (typeof f == "number" && f < 0) {
        if (f === -3 && n < Un)
          return setTimeout(() => {
            this.request(e, o, n + 1);
          }, Math.pow(2, n + 1) * 1e3);
        u = Error(va[-f]);
      } else
        this.keepalive && f && f.sn && this.pull(f.sn);
      o(u, f);
    }).catch((f) => {
      o(f);
    }), a;
  }
  pull(e, r = 0) {
    let n = new At();
    this.sn = n, this.fetch(`${this.gateway}sc?${new URLSearchParams({sn: e, sid: this.sid})}`, {method: "POST", signal: n.signal}).then(_a).then((i) => {
      if (this.sn = void 0, !this.closed) {
        if (typeof i == "number" && i < 0) {
          if (i === -3 && r < Un)
            return setTimeout(() => {
              this.pull(e, r + 1);
            }, Math.pow(2, r + 1) * 1e3);
          this.emit("error", Error(va[-i]));
        }
        i.w ? this.wait(i.w, e) : i.sn && (i.a && this.emit("sc", i.a), this.pull(i.sn));
      }
    }).catch(wc).catch((i) => {
      this.emit("error", i);
    });
  }
  wait(e, r) {
    let n = new At();
    this.sn = n, this.fetch(e, {method: "POST", signal: n.signal}).catch(() => {
    }).then(() => {
      this.sn = void 0, this.pull(r);
    });
  }
  close() {
    this.sn && this.sn.abort(), this.closed = true;
  }
  static getGlobalApi() {
    return Fe.globalApi || (Fe.globalApi = new Fe()), Fe.globalApi;
  }
};
function _a(t) {
  if (t.statusText === "Server Too Busy")
    return -3;
  if (!t.ok)
    throw Error(`Server returned error: ${t.statusText}`);
  return t.json();
}
function wc(t) {
  if (t.name !== "AbortError")
    throw t;
}
var Qe = Fe;
var Gs = J(ze(), 1);
c();
c();
var js = J(ze(), 1);
var Ds = J(ke(), 1), qs = J(Ns(), 1);
var pe = class extends js.EventEmitter {
  constructor(e) {
    super();
    if (this.checkConstructorArgument(e.downloadId), this.checkConstructorArgument(e.key), this.checkConstructorArgument(e.loadedFile), this.downloadId = e.downloadId, this.key = e.key ? K(e.key) : null, this.type = e.directory ? 1 : 0, this.directory = !!e.directory, this.api = e.api || Qe.getGlobalApi(), !(this.api instanceof Qe))
      throw Error("api must be a instance of API");
    this.loadedFile = e.loadedFile;
  }
  get createdAt() {
    if (typeof this.timestamp < "u")
      return this.timestamp * 1e3;
  }
  checkConstructorArgument(e) {
    if (typeof e == "string" && !/^[\w-]+$/.test(e))
      throw Error(`Invalid argument: "${e}"`);
  }
  loadMetadata(e, r) {
    if (this.size = r.s || 0, this.timestamp = r.ts || 0, this.type = r.t, this.directory = !!r.t, this.owner = r.u, this.name = null, !e || !r.k)
      return;
    let n = r.k.split(":");
    this.key = K(n[n.length - 1]), e.decryptECB(this.key), r.a && this.decryptAttributes(r.a);
  }
  decryptAttributes(e) {
    if (!this.key)
      return this;
    e = bt(e), ue(this.key).decryptCBC(e);
    let r = pe.unpackAttributes(e);
    r && this.parseAttributes(r);
  }
  parseAttributes(e) {
    this.attributes = e, this.name = e.n, this.label = fi[e.lbl || 0], this.favorited = !!e.fav;
  }
  loadAttributes(e) {
    let [r, n] = F(e), i = this.directory ? {a: "f", c: 1, ca: 1, r: 1, _querystring: {n: this.downloadId}} : {a: "g", p: this.downloadId};
    return this.api.request(i, (o, a) => {
      if (o)
        return r(o);
      if (this.directory) {
        let s = Object.create(null), f = a.f, u = f.find((h) => h.k && h.h === h.k.split(":")[0]), l = this.key ? new $(this.key) : null;
        this.nodeId = u.h, this.timestamp = u.ts, s[u.h] = this;
        for (let h of f) {
          if (h === u)
            continue;
          let m = new pe(h, this.storage);
          m.loadMetadata(l, h), m.downloadId = [this.downloadId, h.h], s[h.h] = m;
        }
        for (let h of f) {
          let m = s[h.p];
          if (m) {
            let g = s[h.h];
            m.children || (m.children = []), m.children.push(g), g.parent = m;
          }
        }
        if (this.loadMetadata(l, u), this.key && !this.attributes)
          return r(Error("Attributes could not be decrypted with provided key."));
        if (this.loadedFile) {
          let h = s[this.loadedFile];
          typeof h > "u" ? r(Error("Node (file or folder) not found in folder")) : r(null, h);
        } else
          r(null, this);
      } else {
        if (this.size = a.s, this.decryptAttributes(a.at), this.key && !this.attributes)
          return r(Error("Attributes could not be decrypted with provided key."));
        r(null, this);
      }
    }), n;
  }
  download(e, r) {
    var _a2;
    typeof e == "function" && (r = e, e = {}), e || (e = {});
    let n = e.start || 0, i = e.returnCiphertext ? n : n - n % 16, o = e.end || null, a = e.maxConnections || 4, s = e.initialChunkSize || 128 * 1024, f = e.chunkSizeIncrement || 128 * 1024, u = e.maxChunkSize || 1024 * 1024, l = ((_a2 = e.forceHttps) != null ? _a2 : true) ? 2 : 0, h = {a: "g", g: 1, ssl: l};
    if (this.nodeId ? h.n = this.nodeId : Array.isArray(this.downloadId) ? (h._querystring = {n: this.downloadId[0]}, h.n = this.downloadId[1]) : h.p = this.downloadId, this.directory)
      throw Error("Can't download: folder download isn't supported");
    if (!this.key && !e.returnCiphertext)
      throw Error("Can't download: key isn't defined");
    let m = this.key && !e.returnCiphertext ? Fn(this.key, {start: i, disableVerification: i !== 0 || o !== null}) : new Ds.PassThrough(), g = i === n ? m : m.pipe(new qs.default({skip: n - i})), E = e.handleRetries || pe.defaultHandleRetries;
    return this.api.request(h, (v, S) => {
      if (v)
        return g.emit("error", v);
      if (typeof S.g != "string" || S.g.substr(0, 4) !== "http")
        return g.emit("error", Error("MEGA servers returned an invalid response, maybe caused by rate limit"));
      if (S.s === 0)
        return g.end();
      if (o || (o = S.s - 1), n > o)
        return g.emit("error", Error("You can't download past the end of the file."));
      function R(O) {
        if (O.status !== 200) {
          if (O.status === 509) {
            let W = O.headers.get("x-mega-time-left"), V = Error("Bandwidth limit reached: " + W + " seconds until it resets");
            V.timeLimit = W, g.emit("error", V);
            return;
          }
          g.emit("error", Error("MEGA returned a " + O.status + " status code"));
        }
      }
      function k(O) {
        g.emit("error", O);
      }
      let N = 0;
      if (g.on("data", (O) => {
        N += O.length, g.emit("progress", {bytesLoaded: N, bytesTotal: S.s});
      }), a === 1) {
        let O = new At();
        g.on("close", () => {
          O.abort();
        }), this.api.fetch(S.g + "/" + i + "-" + o, {signal: O.signal}).then((W) => {
          R(W);
          let V = W.body;
          if (V)
            if (V.pipe)
              W.body.pipe(m);
            else if (V.getReader) {
              let Y = V.getReader(), re = ({done: ye, value: De}) => {
                if (ye)
                  m.end();
                else
                  return m.write(De), Y.read().then(re);
              };
              Y.read().then(re);
            } else
              throw Error("Single connection streaming not supported by fetch");
          else
            throw Error("Missing response body");
        }).catch(k);
        return;
      }
      let D = {}, j = 0, M = 0, q = false, ie = i, z = s;
      g.on("error", () => {
        q = true;
      }), g.on("close", () => {
        q = true;
      });
      let st = () => {
        if (ie > o) {
          q = true, j === M && m.end();
          return;
        }
        let O = ie, W = Math.min(o, O + z - 1), V = j++, Y = 0, re = () => {
          Y++, this.api.fetch(S.g + "/" + O + "-" + W).then((ye) => (R(ye), ye.arrayBuffer())).then((ye) => {
            let De = p.Buffer.from(ye);
            D[V] = De, M === V && G();
          }, (ye) => {
            E(Y, ye, (De) => {
              De ? k(De) : re();
            });
          });
        };
        re(), ie = W + 1, z < u && (z = z + f);
      }, G = () => {
        let O;
        for (; ; ) {
          let W = D[M];
          if (!W || (O = !m.write(W), delete D[M], M++, O))
            break;
        }
        q && j === M && m.end(), O ? m.once("drain", G) : st();
      };
      for (let O = 0; O < a; O++)
        st();
    }), r && nr(g, r), g;
  }
  downloadBuffer(e, r) {
    let [n, i] = F(r);
    return this.download(e, n), i;
  }
  link(e, r) {
    arguments.length === 1 && typeof e == "function" && (r = e, e = {noKey: false});
    let [n, i] = F(r);
    typeof e == "boolean" && (e = {noKey: e});
    let o = `https://mega.nz/${this.directory ? "folder" : "file"}/${this.downloadId}`;
    return !e.noKey && this.key && (o += `#${P(this.key)}`), !e.noKey && this.loadedFile && (o += `/file/${this.loadedFile}`), n(null, o), i;
  }
  static fromURL(e, r = {}) {
    if (typeof e == "object")
      return new pe(e);
    let n = new URL(e);
    if (n.hostname !== "mega.nz" && n.hostname !== "mega.co.nz")
      throw Error("Invalid URL: wrong hostname");
    if (!n.hash)
      throw Error("Invalid URL: no hash");
    if (n.pathname.match(/\/(file|folder)\//) !== null) {
      let i = n.hash.substr(1).split("/file/"), o = n.pathname.substring(n.pathname.lastIndexOf("/") + 1, n.pathname.length + 1), a = i[0];
      if (o && !a || !o && a)
        throw Error("Invalid URL: too few arguments");
      return new pe({downloadId: o, key: a, directory: n.pathname.indexOf("/folder/") >= 0, loadedFile: i[1], ...r});
    } else {
      let i = n.hash.split("!");
      if (i[0] !== "#" && i[0] !== "#F")
        throw Error("Invalid URL: format not recognized");
      if (i.length <= 1)
        throw Error("Invalid URL: too few arguments");
      if (i.length >= (i[0] === "#" ? 4 : 5))
        throw Error("Invalid URL: too many arguments");
      return new pe({downloadId: i[1], key: i[2], directory: i[0] === "#F", loadedFile: i[3], ...r});
    }
  }
  static unpackAttributes(e) {
    let r = 0;
    for (; r < e.length && e.readUInt8(r); )
      r++;
    if (e = e.slice(0, r).toString(), e.substr(0, 6) === 'MEGA{"')
      try {
        return JSON.parse(e.substr(4));
      } catch {
      }
  }
  static defaultHandleRetries(e, r, n) {
    e > 8 ? n(r) : setTimeout(n, 1e3 * Math.pow(2, e));
  }
}, fi = ["", "red", "orange", "yellow", "green", "blue", "purple", "grey"], Ae = pe;
var Cr = J(On(), 1), ui = J(ke(), 1);
var Ws = {}, je = class extends Ae {
  constructor(e, r) {
    super(e);
    if (this.storage = r, this.api = r.api, this.nodeId = e.h, this.timestamp = e.ts, this.type = e.t, this.directory = !!this.type, e.k) {
      let n = e.k.split("/"), i = r.aes;
      for (let o of n) {
        let a = o.split(":")[0];
        if (a === r.user) {
          e.k = o;
          break;
        }
        let s = r.shareKeys[a];
        if (s) {
          e.k = o, i = Ws[a], i || (i = Ws[a] = new $(s));
          break;
        }
      }
      this.loadMetadata(i, e);
    }
  }
  loadAttributes() {
    throw Error("This is not needed for files loaded from logged in sessions");
  }
  mkdir(e, r) {
    if (!this.directory)
      throw Error("node isn't a directory");
    let [n, i] = F(r);
    if (typeof e == "string" && (e = {name: e}), e.attributes || (e.attributes = {}), e.name && (e.attributes.n = e.name), !e.attributes.n)
      throw Error("file name is required");
    if (e.target || (e.target = this), e.key || (e.key = p.Buffer.from((0, Cr.default)(16))), e.key.length !== 16)
      throw Error("wrong key length, must be 128bit");
    let o = e.key, a = je.packAttributes(e.attributes);
    ue(o).encryptCBC(a);
    let s = p.Buffer.from(o);
    this.storage.aes.encryptECB(s);
    let f = {a: "p", t: e.target.nodeId ? e.target.nodeId : e.target, n: [{h: "xxxxxxxx", t: 1, a: P(a), k: P(s)}]}, u = Ct(this.storage.shareKeys, this);
    return u.length > 0 && (f.cr = Pr(this.storage, [{nodeId: "xxxxxxxx", key: o}], u)), this.api.request(f, (l, h) => {
      if (l)
        return n(l);
      let m = this.storage._importFile(h.f[0]);
      this.storage.emit("add", m), n(null, m);
    }), i;
  }
  upload(e, r, n) {
    if (!this.directory)
      throw Error("node is not a directory");
    arguments.length === 2 && typeof r == "function" && ([n, r] = [r, null]);
    let [i, o] = F(n);
    if (typeof e == "string" && (e = {name: e}), e.attributes || (e.attributes = {}), e.name && (e.attributes.n = e.name), !e.attributes.n)
      throw Error("File name is required.");
    if (!(typeof e.size == "number" && e.size >= 0) && !(r && typeof r.pipe != "function" && typeof r.length == "number") && !e.allowUploadBuffering)
      throw Error("Specify a file size or set allowUploadBuffering to true");
    e.target || (e.target = this);
    let a, s = K(e.key);
    s || (s = (0, Cr.default)(24)), s instanceof p.Buffer || (s = p.Buffer.from(s));
    let f = e.uploadCiphertext ? 32 : 24;
    if (s.length !== f)
      throw Error("Wrong key length. Key must be 192bit");
    e.uploadCiphertext && (a = s, s = Ln(s).slice(0, 24)), e.key = s;
    let u = [], l = (g, E, v, S) => {
      if (g)
        return m(g);
      if (!v || v.length === 0) {
        m(Error("Server returned a invalid response while uploading"));
        return;
      }
      let R = Number(v.toString());
      if (R < 0) {
        m(Error("Server returned error " + R + " while uploading"));
        return;
      }
      if (u[E] = v, E === 0 && !a && (a = S.key), e.thumbnailImage && !u[1] || e.previewImage && !u[2] || !u[0])
        return;
      let k = je.packAttributes(e.attributes);
      ue(a).encryptCBC(k);
      let N = p.Buffer.from(a);
      this.storage.aes.encryptECB(N);
      let D = {h: P(u[0]), t: 0, a: P(k), k: P(N)};
      u.length !== 1 && (D.fa = u.slice(1).map((q, ie) => ie + "*" + P(q)).filter((q) => q).join("/"));
      let j = {a: "p", t: e.target.nodeId ? e.target.nodeId : e.target, n: [D]}, M = Ct(this.storage.shareKeys, this);
      M.length > 0 && (j.cr = Pr(this.storage, [{nodeId: D.h, key: a}], M)), this.api.request(j, (q, ie) => {
        if (q)
          return m(q);
        let z = this.storage._importFile(ie.f[0]);
        this.storage.emit("add", z), h.emit("complete", z), i && i(null, z);
      });
    };
    e.thumbnailImage && this._uploadAttribute(e, e.thumbnailImage, 1, l), e.previewImage && this._uploadAttribute(e, e.previewImage, 2, l);
    let h = this._upload(e, r, 0, l);
    function m(g) {
      h.listenerCount("error") ? h.emit("error", g) : i(g);
    }
    return h.complete = o, h;
  }
  _upload(e, r, n, i) {
    let o = e.uploadCiphertext ? new ui.PassThrough() : kn(e.key), a = o, s = e.size;
    return r && typeof r.pipe != "function" && (s = r.length, a.end(r)), s != null ? (s === 0 && o.end(), this._uploadWithSize(a, s, o, n, e, i)) : a = fa(a, (f) => {
      this._uploadWithSize(a, f, o, n, e, i);
    }), r && typeof r.pipe == "function" && r.pipe(a), a;
  }
  _uploadAttribute(e, r, n, i) {
    let o = (a, s) => {
      if (a)
        return i(a);
      let f = s.length, u = Math.ceil(f / 16) * 16 - f;
      u !== 0 && (s = p.Buffer.concat([s, p.Buffer.alloc(u)])), (e.handle ? ue(e.key) : new $(e.key.slice(0, 16))).encryptCBC(s);
      let h = new ui.PassThrough();
      h.end(s), this._uploadWithSize(h, s.length, h, n, e, i);
    };
    if (r instanceof p.Buffer) {
      o(null, r);
      return;
    }
    nr(r, o);
  }
  _uploadWithSize(e, r, n, i, o, a) {
    var _a2;
    let s = ((_a2 = o.forceHttps) != null ? _a2 : true) ? 2 : 0, f = i === 0 ? {a: "u", ssl: s, s: r, ms: 0, r: 0, e: 0, v: 2} : {a: "ufa", ssl: s, s: r};
    o.handle && (f.h = o.handle);
    let u = i === 0 ? o.initialChunkSize || 128 * 1024 : r, l = o.chunkSizeIncrement || 128 * 1024, h = o.maxChunkSize || 1024 * 1024, m = o.maxConnections || 4, g = o.handleRetries || Ae.defaultHandleRetries, E = u, v = 0, S = false, R = 0, k, N, D, j, M, q = () => {
      j = Math.min(E, r - R), N = p.Buffer.alloc(j), v++, E < h && (E += l), M = 0, k && (k.copy(N), M = Math.min(k.length, j), k = k.length > j ? k.slice(j) : null), M === j ? ie() : (S = true, st());
    }, ie = () => {
      let G = R, O = N, W = 0, V = () => {
        W++, this.api.fetch(D + "/" + (i === 0 ? G : i - 1), {method: "POST", body: O, headers: {"content-length": O.length}}).then((Y) => {
          if (Y.status !== 200)
            throw Error("MEGA returned a " + Y.status + " status code");
          return Y.arrayBuffer();
        }).then((Y) => {
          let re = p.Buffer.from(Y);
          re.length > 0 ? (n.end(), y.nextTick(() => {
            a(null, i, re, n);
          })) : R < r && !S && q();
        }, (Y) => {
          g(W, Y, (re) => {
            re ? e.emit("error", re) : V();
          });
        });
      };
      V(), N = null, R += j, R < r && !S && v < m && q();
    }, z = 0, st = () => {
      for (; ; ) {
        let G = n.read();
        if (G === null) {
          n.once("readable", st);
          break;
        }
        if (z += G.length, e.emit("progress", {bytesLoaded: z, bytesTotal: r}), G.copy(N, M), M += G.length, M >= j) {
          S = false, k = G.slice(G.length - (M - j)), ie();
          break;
        }
      }
    };
    n.on("end", () => {
      r && z !== r && e.emit("error", Error("Specified data size does not match: " + r + " !== " + z));
    }), this.api.request(f, (G, O) => {
      if (G)
        return a(G);
      D = O.p, q();
    });
  }
  uploadAttribute(e, r, n) {
    let [i, o] = F(n);
    if (typeof e == "string" && (e = ["thumbnail", "preview"].indexOf(e)), e !== 0 && e !== 1)
      throw Error("Invalid attribute type");
    return this._uploadAttribute({key: this.key, handle: this.nodeId}, r, e + 1, (a, s, f, u) => {
      if (a)
        return i(a);
      let l = {a: "pfa", n: this.nodeId, fa: e + "*" + P(f)};
      this.api.request(l, (h, m) => {
        if (h)
          return i(h);
        i(null, this);
      });
    }), o;
  }
  delete(e, r) {
    return typeof e == "function" && (r = e, e = void 0), typeof e > "u" && (e = this.parent === this.storage.trash), e ? this.api.request({a: "d", n: this.nodeId}, r) : this.moveTo(this.storage.trash, r);
  }
  moveTo(e, r) {
    if (typeof e == "string" && (e = this.storage.files[e]), !(e instanceof Ae))
      throw Error("target must be a folder or a nodeId");
    let n = {a: "m", n: this.nodeId, t: e.nodeId}, i = Ct(this.storage.shareKeys, e);
    return i.length > 0 && (n.cr = Pr(this.storage, [this], i)), this.api.request(n, r);
  }
  setAttributes(e, r) {
    let [n, i] = F(r);
    Object.assign(this.attributes, e);
    let o = je.packAttributes(this.attributes);
    return ue(this.key).encryptCBC(o), this.api.request({a: "a", n: this.nodeId, at: P(o)}, (a) => {
      this.parseAttributes(this.attributes), n(a);
    }), i;
  }
  rename(e, r) {
    return this.setAttributes({n: e}, r);
  }
  setLabel(e, r) {
    if (typeof e == "string" && (e = fi.indexOf(e)), typeof e != "number" || Math.floor(e) !== e || e < 0 || e > 7)
      throw Error("label must be a integer between 0 and 7 or a valid label name");
    return this.setAttributes({lbl: e}, r);
  }
  setFavorite(e, r) {
    return this.setAttributes({fav: e ? 1 : 0}, r);
  }
  link(e, r) {
    arguments.length === 1 && typeof e == "function" && (r = e, e = {noKey: false}), typeof e == "boolean" && (e = {noKey: e}), e || (e = {});
    let n = e.__folderKey;
    if (this.directory && !n)
      return this.shareFolder(e, r);
    let [i, o] = F(r);
    return this.api.request({a: "l", n: this.nodeId}, (a, s) => {
      if (a)
        return i(a);
      let f = `https://mega.nz/${n ? "folder" : "file"}/${s}`;
      !e.noKey && this.key && (f += `#${P(n || this.key)}`), i(null, f);
    }), o;
  }
  shareFolder(e, r) {
    if (!this.directory)
      throw Error("node isn't a folder");
    let n = this.nodeId, i = this.storage.shareKeys[n];
    if (i)
      return this.link(Object.assign({__folderKey: i}, e), r);
    let o = K(e.key);
    o || (o = (0, Cr.default)(16)), o instanceof p.Buffer || (o = p.Buffer.from(o));
    let [a, s] = F(r);
    if (o.length !== 16)
      return a(Error("share key must be 16 byte / 22 characters")), s;
    this.storage.shareKeys[n] = o;
    let f = p.Buffer.from(n + n);
    this.storage.aes.encryptECB(f);
    let u = {a: "s2", n, s: [{u: "EXP", r: 0}], ok: P(this.storage.aes.encryptECB(p.Buffer.from(o))), ha: P(f), cr: Pr(this.storage, this)};
    return this.api.request(u, (l) => {
      if (l)
        return a(l);
      this.link(Object.assign({__folderKey: o}, e), a);
    }), s;
  }
  unshare(e) {
    return this.directory ? this.unshareFolder(e) : this.api.request({a: "l", n: this.nodeId, d: 1}, e);
  }
  unshareFolder(e) {
    if (!this.directory)
      throw Error("node isn't a folder");
    return delete this.storage.shareKeys[this.nodeId], this.api.request({a: "s2", n: this.nodeId, s: [{u: "EXP", r: ""}]}, e);
  }
  importFile(e, r) {
    let [n, i] = F(r);
    if (!this.directory)
      throw Error("importFile can only be called on directories");
    if (typeof e == "string" && (e = Ae.fromURL(e)), !(e instanceof Ae))
      throw Error("First argument of importFile should be a File or a URL string");
    if (!e.key)
      return n(Error("Can't import files without encryption keys")), i;
    let o = (a, s) => {
      if (a)
        return n(a);
      let f = je.packAttributes(s.attributes);
      ue(s.key).encryptCBC(f);
      let u = Array.isArray(s.downloadId) ? s.downloadId[1] : s.downloadId, l = {a: "p", t: this.nodeId, n: [{ph: u, t: 0, a: P(f), k: P(this.storage.aes.encryptECB(s.key))}]};
      this.api.request(l, (h, m) => {
        if (h)
          return n(h);
        let g = this.storage._importFile(m.f[0]);
        this.storage.emit("add", g), n(null, g);
      });
    };
    return e.attributes ? o(null, e) : e.loadAttributes(o), i;
  }
  static packAttributes(e) {
    let r = JSON.stringify(e);
    r = p.Buffer.from(`MEGA${r}`);
    let n = p.Buffer.alloc(Math.ceil(r.length / 16) * 16);
    return r.copy(n), n;
  }
};
function Pr(t, e, r) {
  let n = t.shareKeys;
  Array.isArray(e) || (e = $s(e)), r || (r = e.map((o) => Ct(n, o)).reduce((o, a) => o.concat(a)).filter((o, a, s) => a === s.indexOf(o)));
  let i = [r, e.map((o) => o.nodeId), []];
  for (let o = r.length; o--; ) {
    let a = new $(n[r[o]]);
    for (let s = e.length; s--; ) {
      let f = p.Buffer.from(e[s].key);
      f && (f.length === 32 || f.length === 16) && i[2].push(o, s, P(a.encryptECB(f)));
    }
  }
  return i;
}
function $s(t) {
  return [t].concat((t.children || []).map($s).reduce((e, r) => e.concat(r), []));
}
function Ct(t, e) {
  let r = e.nodeId, n = e.parent, i = [];
  return t[r] && i.push(r), n ? i.concat(Ct(t, n)) : i;
}
var Ks = je;
var kr = class extends Gs.EventEmitter {
  constructor(e, r) {
    super();
    arguments.length === 1 && typeof e == "function" && (r = e, e = {});
    let [n, i] = F(r);
    this.ready = i, e.keepalive = e.keepalive === void 0 ? true : !!e.keepalive, e.autoload = e.autoload === void 0 ? true : !!e.autoload, e.autologin = e.autologin === void 0 ? true : !!e.autologin, this.api = new Qe(e.keepalive, e), this.files = {}, this.options = e, this.status = "closed", e.autologin ? this.login(n) : y.nextTick(() => {
      n(null, this);
    });
  }
  login(e) {
    let [r, n] = F(e);
    if (typeof this.options.email != "string")
      return y.nextTick(() => {
        r(Error("starting a session without credentials isn't supported"));
      }), n;
    let i = () => {
      this.status = "ready", r(null, this), this.emit("ready", this);
    }, o = (u) => {
      this.api.request({a: "ug"}, (l, h) => {
        if (l)
          return u(l);
        this.name = h.name, this.user = h.u, this.options.autoload ? this.reload(true, (m) => {
          if (m)
            return u(m);
          i();
        }) : i();
      });
    };
    this.email = this.options.email.toLowerCase();
    let a = (u) => {
      let l = Pn(p.Buffer.from(this.options.password));
      delete this.options.password;
      let h = new $(l), m = P(h.stringhash(p.Buffer.from(this.email))), g = {a: "us", user: this.email, uh: m};
      f(g, h, u);
    }, s = (u, l) => {
      Cn(p.Buffer.from(this.options.password), u, (h, m) => {
        if (h)
          return l(h);
        delete this.options.password;
        let g = new $(m.slice(0, 16)), E = P(m.slice(16)), v = {a: "us", user: this.email, uh: E};
        f(v, g, l);
      });
    }, f = (u, l, h) => {
      this.api.request(u, (m, g) => {
        if (m)
          return h(m);
        this.key = K(g.k), l.decryptECB(this.key), this.aes = new $(this.key);
        let E = K(g.csid), v = this.aes.decryptECB(K(g.privk)), S = ma(v);
        if (!S)
          throw Error("invalid credentials");
        let R = P(wa(E, S).slice(0, 43));
        this.api.sid = this.sid = R, this.RSAPrivateKey = S, o(h);
      });
    };
    return this.api.request({a: "us0", user: this.email}, (u, l) => {
      if (u)
        return r(u);
      if (l.v === 1)
        return a(r);
      if (l.v === 2)
        return s(l, r);
      r(Error("Account version not supported"));
    }), this.status = "connecting", n;
  }
  reload(e, r) {
    typeof e == "function" && ([e, r] = [r, e]);
    let [n, i] = F(r);
    return this.status === "connecting" && !e ? (this.once("ready", () => {
      this.reload(e, n);
    }), i) : (this.mounts = [], this.api.request({a: "f", c: 1}, (o, a) => {
      if (o)
        return n(o);
      this.shareKeys = a.ok.reduce((s, f) => {
        let u = f.h, l = this.aes.encryptECB(p.Buffer.from(u + u));
        return ha(K(f.ha), l) && (s[u] = this.aes.decryptECB(K(f.k))), s;
      }, {}), a.f.forEach((s) => {
        var _a2;
        s = this._importFile(s), a.ph !== void 0 && (s.shareId = (_a2 = a.ph.find((f) => f.h === s.nodeId)) == null ? void 0 : _a2.ph, s.shared = !!s.shareId, s.shared && (s.shareURL = `https://mega.nz/${s.directory ? "folder" : "file"}/${s.shareId}`, s.key && (s.shareURL += `#${P(s.directory ? this.shareKeys[s.nodeId] : s.key)}`)));
      }), n(null, this.mounts);
    }), this.api.on("sc", (o) => {
      let a = {};
      o.forEach((s) => {
        if (s.a === "u") {
          let f = this.files[s.n];
          f && (f.timestamp = s.ts, f.decryptAttributes(s.at), f.emit("update"), this.emit("update", f));
        } else
          s.a === "d" ? a[s.n] = true : s.a === "t" && s.t.f.forEach((f) => {
            let u = this.files[f.h];
            if (u) {
              delete a[f.h];
              let l = u.parent;
              if (l.nodeId === f.p)
                return;
              l.children.splice(l.children.indexOf(u), 1), u.parent = this.files[f.p], u.parent.children || (u.parent.children = []), u.parent.children.push(u), u.emit("move", l), this.emit("move", u, l);
            } else
              this.emit("add", this._importFile(f));
          });
      }), Object.keys(a).forEach((s) => {
        let f = this.files[s], u = f.parent;
        u.children.splice(u.children.indexOf(f), 1), this.emit("delete", f), f.emit("delete");
      });
    }), i);
  }
  _importFile(e) {
    if (!this.files[e.h]) {
      let r = this.files[e.h] = new Ks(e, this);
      if (e.t === Xh && (this.root = r, r.name = "Cloud Drive"), e.t === Qh && (this.trash = r, r.name = "Rubbish Bin"), e.t === Zh && (this.inbox = r, r.name = "Inbox"), e.t > 1 && this.mounts.push(r), e.p) {
        let n = this.files[e.p];
        n && (n.children || (n.children = []), n.children.push(r), r.parent = n);
      }
    }
    return this.files[e.h];
  }
  mkdir(e, r) {
    if (this.status !== "ready")
      throw Error("storage is not ready");
    return this.root.mkdir(e, r);
  }
  upload(e, r, n) {
    if (this.status !== "ready")
      throw Error("storage is not ready");
    return this.root.upload(e, r, n);
  }
  close(e) {
    return this.status = "closed", this.api.close(), this.api.request({a: "sml"}, e);
  }
  getAccountInfo(e) {
    let [r, n] = F(e);
    return this.api.request({a: "uq", strg: 1, xfer: 1, pro: 1}, (i, o) => {
      i && r(i);
      let a = {};
      a.type = o.utype, a.spaceUsed = o.cstrg, a.spaceTotal = o.mstrg, a.downloadBandwidthTotal = o.mxfer || Math.pow(1024, 5) * 10, a.downloadBandwidthUsed = o.caxfer || 0, a.sharedBandwidthUsed = o.csxfer || 0, a.sharedBandwidthLimit = o.srvratio, r(null, a);
    }), n;
  }
  toJSON() {
    return {key: P(this.key), sid: this.sid, name: this.name, user: this.user, options: this.options};
  }
  static fromJSON(e) {
    let r = new kr(Object.assign(e.options, {autoload: false, autologin: false}));
    return r.key = bt(e.key), r.aes = new $(r.key), r.api.sid = r.sid = e.sid, r.name = e.name, r.user = e.user, r;
  }
}, Xh = 2, Zh = 3, Qh = 4, ed = kr;
var Kp = Ae.fromURL;
/*!
* The buffer module from node.js, for the browser.
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
export {Qe as API, Ae as File, ed as Storage, Fn as decrypt, kn as encrypt, Kp as file, oc as verify};
export default null;
