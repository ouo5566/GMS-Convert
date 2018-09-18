"use strict"
var ui = {
	div : x=>{return $('<div/>').attr(x);},
	anchor : x=>{return $('<a/>').attr({href : '#'}).html(x.txt);},
	ul : x=>{
		let ul = $('<ul/>').addClass('list-group');
		for(let i = 0 ; i < x.len ; i++){
			$('<li/>').addClass('list-group-item').attr({id:x.id+'-'+i}).appendTo(ul);
		}
		return ul;
	},
	input : x=>{
		return ui.div({})
				.addClass('input-group mb-3')
				.append(ui.div({})
						.addClass('input-group-prepend')
						.append($('<span/>').addClass('input-group-text').attr({id : 'input_lab'}).text(x.txt))
				).append($('<input/>')
						.attr({id : x.id, type : 'text', placeholder: x.ph_txt , 'aria-label': x.ph_txt , 'aria-describedby' : 'input_lab'})
						.addClass('form-control'));
	},
	input2 : x=>{
		let p = ui.div({}).addClass('input-group mb-3');
		ui.div({id:'test'}).addClass('input-group-prepend').appendTo(p);
		$('#test').html('<span class="input-group-text" id="basic-addon1">@</span>');// 이 메소드가 끝나기 전이라 dom객체가 만들어지지 않는다.
		$("<input/>").attr({
			id : x.input__id,
			type: 'text',
			placeholder:"입금액" ,
			"aria-label":"Username", 
			"aria-describedby":"basic-addon1"
		}).addClass("form-control").appendTo(p);
		return p;
	},
	inputGroupPrepend : x=>{
		return '<div class="input-group mb-3">'
				  '<div class="input-group-prepend">'
				    '<span class="input-group-text" id="basic-addon1">@</span>'
				  '</div>' 
				  '<input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">'
				'</div>';// append가 아닌 html로 적용시켜주어야 한다.
	},
	/*
	<div class="input-group mb-3">
	  <div class="input-group-prepend">
	    <span class="input-group-text" id="basic-addon1">@</span>
	  </div>
	  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
	</div>
	 **/
	
	label : x=>{
		return $('<label/>')
				.attr('for', x.id)
				.text(x.txt);
	},
	btn : x=>{
		return $('<button/>')
				.attr({type : 'button', id : x.id})
				.addClass('btn btn-'+x.clazz)
				.html(x.txt);
	}
}
