/**
 * @author Shane Kearney
 *
 */
var WaitFor = {};

WaitFor.initMethodArrayMap 	= {};
WaitFor.existsMap			= {};

WaitFor.these = function(classNames, initMethod){
	classNames = classNames.replace(new RegExp(" ","g"),"");
	if(WaitFor.exists(classNames)){
		initMethod.call(this);
	}else{
		var initMethods = WaitFor.initMethodArrayMap[classNames] || [];
		WaitFor.initMethodArrayMap[classNames] = initMethods.concat(initMethod);
	}
};

WaitFor.ready = function(className){
	if(WaitFor.debug)console.log("WaitFor.ready for "+className);
	WaitFor.existsMap[className] = true;
	for(var classNames in WaitFor.initMethodArrayMap){
		if(WaitFor.exists(classNames)){
			var initMethods = WaitFor.initMethodArrayMap[classNames];
			delete WaitFor.initMethodArrayMap[classNames];
			if(!!initMethods){
				for(var i = 0; i < initMethods.length; i++){
					initMethods[i].call(this);
				}
			}
		}
	}
};

WaitFor.exists = function(classNames){
	var names = classNames.split(",");
	for(var i = 0; i < names.length; i++){
		if(WaitFor.existsMap[names[i]] != true){
			return false;
		}
	}
	return true;
};
