({
    adicionarItem : function(componente, evento, auxiliar) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "título": "Boaaa!",
            "message": "Item adicionado com sucesso!"
        });
        toastEvent.fire();
    }

})
