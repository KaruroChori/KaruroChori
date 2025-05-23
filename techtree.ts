const vs_logger = {
    name: "vs.logger",
    desc: "A logging library for C++ forwarding on websockets",
    url: "https://github.com/lazy-eggplant/vs.logger",
    parents: []
}

const vs_xml = {
    name: "vs.xml",
    desc: "XML builder, parser, serializer and query model in modern C++",
    url: "https://github.com/lazy-eggplant/vs.xml",
    parents: []
}

const vs_sfc = {
    name: "vs.sfc",
    desc: "Agnostic XML template builder for single file components (not public yet)",
    url: "https://github.com/lazy-eggplant/vs.sfc",
    parents: [vs_xml,vs_logger]
}

const vs_templ = {
    name: "vs.templ",
    desc: "Static template builder for XML, based on ~~pugixml~~ vs.xml",
    url: "https://github.com/lazy-eggplant/vs.templ",
    parents: [vs_xml,vs_logger]
}

const comfy_bun_client = {
    name: "comfybun",
    desc: "A comfyui typescript client for the bun runtime ",
    url: "https://github.com/KaruroChori/comfyui-bun-client",
    parents: []
}

const vs_fltk = {
    name: "vs.fltk",
    desc: "Super lightweight UI framework combining FLTK, XML for components and tcc/quickjs/lua",
    url: "https://github.com/KaruroChori/vs-fltk",
    parents: [vs_templ,vs_xml,vs_sfc,vs_logger]
}

const enance_amamento = {
    name: "enance-amamento",
    desc: "Experimental C++ library for signed distance fields using OpenMP",
    url: "https://github.com/KaruroChori/enance-amamento",
    parents: [vs_templ,vs_xml,vs_sfc,vs_logger]
}