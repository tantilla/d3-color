import rgb from "./rgb";
import hsl from "./hsl";

export function Color() {};

Color.prototype = {
  toString: function() {
    return this.rgb() + "";
  }
};

export default function(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = /^#([0-9a-f]{3})$/.exec(format)) ? (m = parseInt(m[1], 16), rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf))) // #f00
      : (m = /^#([0-9a-f]{6})$/.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/.exec(format)) ? rgb(m[1], m[2], m[3]) // rgb(255,0,0)
      : (m = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/.exec(format)) ? rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100) // rgb(100%,0%,0%)
      : (m = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/.exec(format)) ? hsl(m[1], m[2] / 100, m[3] / 100) // hsl(120,50%,50%)
      : named.has(format) ? rgbn(named.get(format))
      : rgb(NaN, NaN, NaN);
};

function rgbn(n) {
  return rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff);
}

var named = (new Map)
  .set("aliceblue", 0xf0f8ff)
  .set("antiquewhite", 0xfaebd7)
  .set("aqua", 0x00ffff)
  .set("aquamarine", 0x7fffd4)
  .set("azure", 0xf0ffff)
  .set("beige", 0xf5f5dc)
  .set("bisque", 0xffe4c4)
  .set("black", 0x000000)
  .set("blanchedalmond", 0xffebcd)
  .set("blue", 0x0000ff)
  .set("blueviolet", 0x8a2be2)
  .set("brown", 0xa52a2a)
  .set("burlywood", 0xdeb887)
  .set("cadetblue", 0x5f9ea0)
  .set("chartreuse", 0x7fff00)
  .set("chocolate", 0xd2691e)
  .set("coral", 0xff7f50)
  .set("cornflowerblue", 0x6495ed)
  .set("cornsilk", 0xfff8dc)
  .set("crimson", 0xdc143c)
  .set("cyan", 0x00ffff)
  .set("darkblue", 0x00008b)
  .set("darkcyan", 0x008b8b)
  .set("darkgoldenrod", 0xb8860b)
  .set("darkgray", 0xa9a9a9)
  .set("darkgreen", 0x006400)
  .set("darkgrey", 0xa9a9a9)
  .set("darkkhaki", 0xbdb76b)
  .set("darkmagenta", 0x8b008b)
  .set("darkolivegreen", 0x556b2f)
  .set("darkorange", 0xff8c00)
  .set("darkorchid", 0x9932cc)
  .set("darkred", 0x8b0000)
  .set("darksalmon", 0xe9967a)
  .set("darkseagreen", 0x8fbc8f)
  .set("darkslateblue", 0x483d8b)
  .set("darkslategray", 0x2f4f4f)
  .set("darkslategrey", 0x2f4f4f)
  .set("darkturquoise", 0x00ced1)
  .set("darkviolet", 0x9400d3)
  .set("deeppink", 0xff1493)
  .set("deepskyblue", 0x00bfff)
  .set("dimgray", 0x696969)
  .set("dimgrey", 0x696969)
  .set("dodgerblue", 0x1e90ff)
  .set("firebrick", 0xb22222)
  .set("floralwhite", 0xfffaf0)
  .set("forestgreen", 0x228b22)
  .set("fuchsia", 0xff00ff)
  .set("gainsboro", 0xdcdcdc)
  .set("ghostwhite", 0xf8f8ff)
  .set("gold", 0xffd700)
  .set("goldenrod", 0xdaa520)
  .set("gray", 0x808080)
  .set("green", 0x008000)
  .set("greenyellow", 0xadff2f)
  .set("grey", 0x808080)
  .set("honeydew", 0xf0fff0)
  .set("hotpink", 0xff69b4)
  .set("indianred", 0xcd5c5c)
  .set("indigo", 0x4b0082)
  .set("ivory", 0xfffff0)
  .set("khaki", 0xf0e68c)
  .set("lavender", 0xe6e6fa)
  .set("lavenderblush", 0xfff0f5)
  .set("lawngreen", 0x7cfc00)
  .set("lemonchiffon", 0xfffacd)
  .set("lightblue", 0xadd8e6)
  .set("lightcoral", 0xf08080)
  .set("lightcyan", 0xe0ffff)
  .set("lightgoldenrodyellow", 0xfafad2)
  .set("lightgray", 0xd3d3d3)
  .set("lightgreen", 0x90ee90)
  .set("lightgrey", 0xd3d3d3)
  .set("lightpink", 0xffb6c1)
  .set("lightsalmon", 0xffa07a)
  .set("lightseagreen", 0x20b2aa)
  .set("lightskyblue", 0x87cefa)
  .set("lightslategray", 0x778899)
  .set("lightslategrey", 0x778899)
  .set("lightsteelblue", 0xb0c4de)
  .set("lightyellow", 0xffffe0)
  .set("lime", 0x00ff00)
  .set("limegreen", 0x32cd32)
  .set("linen", 0xfaf0e6)
  .set("magenta", 0xff00ff)
  .set("maroon", 0x800000)
  .set("mediumaquamarine", 0x66cdaa)
  .set("mediumblue", 0x0000cd)
  .set("mediumorchid", 0xba55d3)
  .set("mediumpurple", 0x9370db)
  .set("mediumseagreen", 0x3cb371)
  .set("mediumslateblue", 0x7b68ee)
  .set("mediumspringgreen", 0x00fa9a)
  .set("mediumturquoise", 0x48d1cc)
  .set("mediumvioletred", 0xc71585)
  .set("midnightblue", 0x191970)
  .set("mintcream", 0xf5fffa)
  .set("mistyrose", 0xffe4e1)
  .set("moccasin", 0xffe4b5)
  .set("navajowhite", 0xffdead)
  .set("navy", 0x000080)
  .set("oldlace", 0xfdf5e6)
  .set("olive", 0x808000)
  .set("olivedrab", 0x6b8e23)
  .set("orange", 0xffa500)
  .set("orangered", 0xff4500)
  .set("orchid", 0xda70d6)
  .set("palegoldenrod", 0xeee8aa)
  .set("palegreen", 0x98fb98)
  .set("paleturquoise", 0xafeeee)
  .set("palevioletred", 0xdb7093)
  .set("papayawhip", 0xffefd5)
  .set("peachpuff", 0xffdab9)
  .set("peru", 0xcd853f)
  .set("pink", 0xffc0cb)
  .set("plum", 0xdda0dd)
  .set("powderblue", 0xb0e0e6)
  .set("purple", 0x800080)
  .set("rebeccapurple", 0x663399)
  .set("red", 0xff0000)
  .set("rosybrown", 0xbc8f8f)
  .set("royalblue", 0x4169e1)
  .set("saddlebrown", 0x8b4513)
  .set("salmon", 0xfa8072)
  .set("sandybrown", 0xf4a460)
  .set("seagreen", 0x2e8b57)
  .set("seashell", 0xfff5ee)
  .set("sienna", 0xa0522d)
  .set("silver", 0xc0c0c0)
  .set("skyblue", 0x87ceeb)
  .set("slateblue", 0x6a5acd)
  .set("slategray", 0x708090)
  .set("slategrey", 0x708090)
  .set("snow", 0xfffafa)
  .set("springgreen", 0x00ff7f)
  .set("steelblue", 0x4682b4)
  .set("tan", 0xd2b48c)
  .set("teal", 0x008080)
  .set("thistle", 0xd8bfd8)
  .set("tomato", 0xff6347)
  .set("turquoise", 0x40e0d0)
  .set("violet", 0xee82ee)
  .set("wheat", 0xf5deb3)
  .set("white", 0xffffff)
  .set("whitesmoke", 0xf5f5f5)
  .set("yellow", 0xffff00)
  .set("yellowgreen", 0x9acd32);
