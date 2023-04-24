({
    mostrarLead : function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Lead inserido!",
            "message": "O lead foi inserido com sucesso.",

        });
        toastEvent.fire();
    },
    
    limparLead: function(component, event, helper) {
        component.find('field').forEach(function(f) {
            f.reset();
        });
    }
})
