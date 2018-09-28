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
	btn : x=>{ //ui.btn({id : '', class : '', txt : ''})
		return $('<button/>')
				.attr({type : 'button', id : x.id})
				.addClass(x.clazz)
				.html(x.txt);
	},
	tbl : x=>{ // ui.tbl({type : '', id : '', head : '', body : '', list : []})
		let pn = ui.div({}).addClass('panel panel-' + x.type);
		ui.div({}).addClass('panel-heading').html(x.head).appendTo(pn);
		ui.div({}).addClass('panel-body').html(x.body).appendTo(pn);
		
		let t = $('<table/>').attr({id : x.id}).addClass(x.clazz);
		let thead = $('<thead/>');
		let tr = $('<tr/>');
		$.each(x.list, (i, v)=>{
			$('<th/>').html(v).appendTo(tr);
		});
		tr.appendTo(thead);
		thead.appendTo(t);
		$('<tbody/>').appendTo(t);
		t.appendTo(pn);
		
		
		/*
		 
		<div class="panel panel-default">
		  <!-- Default panel contents -->
		  <div class="panel-heading">Panel heading</div>
		  <div class="panel-body">
		    <p>...</p>
		  </div>
		
		  <!-- Table -->
		  <table class="table">
		    ...
		  </table>
		</div>
		 ==============================================
		$.each(x.d, (i, v)=>{
			let tr = $('<tr/>');
			let tag = 'td';
			if(i == 0){ tag = 'th'; }
			$.each(v,(i, v)=>{
				console.log(tag);
				$('<'+tag+'/>').html(v).appendTo(tr);
			});
			tr.appendTo(t);
		});
		*/
		return pn;
	},
	page : x=>{
		return $('<ul/>').addClass('pagination');
		
		/*$('<li/>').addClass('page-item disabled').append($('<a/>').attr({href : '#'}).addClass('page-link').html('Prev')).appendTo(ul);
		for(let i=1; i<=x.blockSize;i++){
			let act = '';
			if(i == 1) act = 'active';
			$('<li/>')
			.addClass('page-item '+act)
			.append(
					$('<a/>')
					.attr({href : '#'})
					.addClass('page-link')
					.html(i)
					)
			.appendTo(ul)
			.click(function(e){
				e.preventDefault();
				$('li').removeClass('active');
				$(this).addClass('active');
			});
		}
		$('<li/>').addClass('page-item').append($('<a/>').attr({href : '#'}).addClass('page-link').html('Next')).appendTo(ul);*/
		
		
		/*<nav aria-label="...">
		  <ul class="pagination">
		    <li class="page-item disabled">
		      <span class="page-link">Previous</span>
		    </li>
		    <li class="page-item"><a class="page-link" href="#">1</a></li>
		    <li class="page-item active">
		      <span class="page-link">
		        2
		        <span class="sr-only">(current)</span>
		      </span>
		    </li>
		    <li class="page-item"><a class="page-link" href="#">3</a></li>
		    <li class="page-item">
		      <a class="page-link" href="#">Next</a>
		    </li>
		  </ul>
		</nav>*/		
	}
}
