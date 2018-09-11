<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!-- Main content -->
<section class="content">
	<div class="row">
		<!-- left column -->
		<div class="col-md-12">
			<!-- general form elements -->
			<div class="box box-primary">
				<div class="box-header">
					<h3 class="box-title">READ BOARD</h3>
				</div>
				<!-- /.box-header -->

<form role="form" method="post">

	<input type='hidden' name='bno' value="${boardVO.bno}">

</form>

<div class="box-body">
	<div class="form-group">
		<label for="exampleInputEmail1">Title</label> <input type="text"
			name='title' class="form-control" value="${boardVO.title}"
			readonly="readonly">
	</div>
	<div class="form-group">
		<label for="exampleInputPassword1">Content</label>
		<textarea class="form-control" name="content" rows="3"
			readonly="readonly">${boardVO.content}</textarea>
	</div>
	<div class="form-group">
		<label for="exampleInputEmail1">Writer</label> <input type="text"
			name="writer" class="form-control" value="${boardVO.writer}"
			readonly="readonly">
	</div>
</div>
<!-- /.box-body -->

<div class="box-footer">
	<button type="submit" class="btn btn-warning">Modify</button>
	<button type="submit" class="btn btn-danger">REMOVE</button>
	<button type="submit" class="btn btn-primary">LIST ALL</button>
</div>


				<script>
				
$(document).ready(function(){
	
	var formObj = $("form[role='form']");
	
	console.log(formObj);
	
	$(".btn-warning").on("click", function(){
		formObj.attr("action", "/board/modify");
		formObj.attr("method", "get");		
		formObj.submit();
	});
	
	$(".btn-danger").on("click", function(){
		formObj.attr("action", "/board/remove");
		formObj.submit();
	});
	
	$(".btn-primary").on("click", function(){
		self.location = "/board/listAll";
	});
	
});

</script>




			</div>
			<!-- /.box -->
		</div>
		<!--/.col (left) -->

	</div>
	<!-- /.row -->
</section>
<!-- /.content -->
</div>
<!-- /.content-wrapper -->

