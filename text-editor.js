(function() {
    function applyStyle(editor, style) {
        const start = editor.selectionStart;
        const end = editor.selectionEnd;
        const selectedText = editor.value.substring(start, end);

        if (selectedText) {
            let newText = '';
            switch (style) {
                case 'bold':
                    newText = editor.value.substring(0, start) + 
                            '**' + selectedText + '**' + 
                            editor.value.substring(end);
                    break;
                case 'italic':
                    newText = editor.value.substring(0, start) + 
                            '*' + selectedText + '*' + 
                            editor.value.substring(end);
                    break;
                case 'underline':
                    newText = editor.value.substring(0, start) + 
                            '_' + selectedText + '_' + 
                            editor.value.substring(end);
                    break;
                case 'list':
                    const lines = selectedText.split('\n');
                    const listItems = lines.map(line => '• ' + line).join('\n');
                    newText = editor.value.substring(0, start) + 
                            listItems + 
                            editor.value.substring(end);
                    break;
                case 'strike':
                    newText = editor.value.substring(0, start) + 
                            '~~' + selectedText + '~~' + 
                            editor.value.substring(end);
                    break;
            }
            editor.value = newText;
            updatePreview(editor);
        }
    }

    function updatePreview(editor) {
        let formattedText = editor.value
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/_(.*?)_/g, '<u>$1</u>')
            .replace(/\~~(.*?)\~~/g, '<del>$1</del>')
            .replace(/^• (.*)$/gm, '<li>$1</li>')
            .replace(/\n/g, '<br>');
        document.getElementById('preview').innerHTML = formattedText;
    }

    window.initializeEditor = function(editorId) {
        const editor = document.getElementById(editorId);

        // Editor'da metin düzenlemesi için event listener ekle
        editor.addEventListener('input', function() {
            updatePreview(editor);
        });
        updatePreview(editor);

        return {
            applyStyle: function(style) {
                applyStyle(editor, style);
            }
        };
    };
})();
