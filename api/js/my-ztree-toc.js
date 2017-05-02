$(document).ready(function(){
	$('#tree').ztree_toc({
		is_auto_number : false,
		is_expand_all: true,		
		is_highlight_selected_line: true,
		is_posion_top:true,
				ztreeStyle: {
					width:'240px',
					height:'auto',
					overflow: 'auto',
					position: 'fixed',
					'z-index': 2147483647,
					border: '1px solid #ccc'
		 }
	});
});