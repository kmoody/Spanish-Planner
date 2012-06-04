Ext.define('GS.view.Register', {
	extend: 'Ext.form.Panel',
	requires: [
        'Ext.field.Password'       
    ],

	xtype: 'registerview',
	items: [
		{
			xtype: 'emailfield',
			label: 'Email',
			name: 'email'
		},
		{
			xtype: 'passwordfield',
			label: 'Password',
			name: 'password'
		}
	]
});