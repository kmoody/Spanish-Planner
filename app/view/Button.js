Ext.define('GS.view.Button', {
    extend: 'Ext.dataview.component.DataItem',
    requires: ['Ext.Button'],
    xtype: 'mylistitem',

    config: {
        nameButton: {
        	ui:'decline'
        },

        dataMap: {
            getNameButton: {
                setText: 'title'
            }
        }
    },

    applyNameButton: function(config) {
        return Ext.factory(config, Ext.Button, this.getNameButton());
    },

    updateNameButton: function(newNameButton, oldNameButton) {
        if (oldNameButton) {
            this.remove(oldNameButton);
        }

        if (newNameButton) {
            this.add(newNameButton);
        }
    },

});