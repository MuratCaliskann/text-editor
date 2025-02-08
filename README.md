Kişisel amaçla oluşturulmuş amatör bir textarea edit yapısı.

kullanım şekli:

HTML alanı:

    <div class="editor-container">
        <div class="toolbar">
            <button onclick="editor.applyStyle('bold')" title="Kalın"><b>B</b></button>
            <button onclick="editor.applyStyle('italic')" title="İtalik"><i>I</i></button>
            <button onclick="editor.applyStyle('underline')" title="Altı Çizili"><u>U</u></button>
            <button onclick="editor.applyStyle('list')" title="Liste">• Liste</button>
            <button onclick="editor.applyStyle('strike')" title="Üstü Çizili">S</button>
        </div>

        <textarea id="editor"></textarea>

        <div id="preview"></div>
    </div>
JS alanı:
<script src="https://raw.githubusercontent.com/MuratCaliskann/text-editor/main/text-editor.js"></script>
    
<script>
        var editor = initializeEditor("editor");
</script>
