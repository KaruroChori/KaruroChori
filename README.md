Hi, Karurochari here! Check my [website](https://www.karurochari.com) for more information and some low-quality blogging.

List of active projects and their dependencies:

- **[comfybun](https://github.com/KaruroChori/comfyui-bun-client)** – A comfyui typescript client for the bun runtime
- **[vs.fltk](https://github.com/KaruroChori/vs-fltk)** – Super lightweight UI framework combining FLTK, XML for components and tcc/quickjs/lua
- **[enance-amamento](https://github.com/KaruroChori/enance-amamento)** – Experimental C++ library for signed distance fields using OpenMP
- **[vs-logger](https://github.com/lazy-eggplant/vs.logger)** – A logging library for C++ forwarding on websockets
- **[vs.xml](https://github.com/lazy-eggplant/vs.xml)** – XML builder, parser, serializer and query model in modern C++
- **[vs.sfc](https://github.com/lazy-eggplant/vs.sfc)** – Agnostic XML template builder for single file components (not public yet)
- **[vs.templ](https://github.com/lazy-eggplant/vs.templ)** – Static template builder for XML, based on ~~pugixml~~ vs.xml
```mermaid
graph LR
    A1[<h4>vs-logger</h4>]
    B1[<h4>vs.xml</h4>]
    C1[<h4>vs.sfc</h4>]
    D1[<h4>vs.templ</h4>]
    E1[<h4>comfybun</h4>]
    F1[<h4>vs.fltk</h4>]
    G1[<h4>enance-amamento</h4>]

    %% Dependency edges:
    C1 --> B1
    C1 --> A1

    D1 --> B1
    D1 --> A1

    F1 --> D1
    F1 --> B1
    F1 --> C1
    F1 --> A1

    G1 --> D1
    G1 --> B1
    G1 --> C1
    G1 --> A1

    %% Click actions
    click A1 "https://github.com/lazy-eggplant/vs.logger" "vs.logger repository"
    click B1 "https://github.com/lazy-eggplant/vs.xml" "vs.xml repository"
    click C1 "https://github.com/lazy-eggplant/vs.sfc" "vs.sfc repository"
    click D1 "https://github.com/lazy-eggplant/vs.templ" "vs.templ repository"
    click E1 "https://github.com/KaruroChori/comfyui-bun-client" "comfybun repository"
    click F1 "https://github.com/KaruroChori/vs-fltk" "vs.fltk repository"
    click G1 "https://github.com/KaruroChori/enance-amamento" "enance-amamento repository"

    %% Styling nodes with custom colors
    style A1 fill:#FCEBB6,stroke:#F1C40F,stroke-width:2px
    style B1 fill:#D6EAF8,stroke:#3498DB,stroke-width:2px
    style C1 fill:#D5F5E3,stroke:#27AE60,stroke-width:2px
    style D1 fill:#FADBD8,stroke:#E74C3C,stroke-width:2px
    style E1 fill:#E8DAEF,stroke:#8E44AD,stroke-width:2px
    style F1 fill:#FDEBD0,stroke:#F39C12,stroke-width:2px
    style G1 fill:#D4E6F1,stroke:#2980B9,stroke-width:2px
```