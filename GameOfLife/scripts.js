	 ///Game of Life
	 //Get base data
	 	var fild = document.getElementsByClassName('fild');
	 	var blocks = document.getElementsByClassName('block');
		var states =  new Array(blocks.length);
		var neighbors = new Array(8);
		var restart = document.getElementsByClassName('restart');
		var states_1 = new Array(blocks.length);
		var iterate = document.getElementsByClassName('iterate');
	//Start position for load page
		window.onload = function start () {
			var inner_fild = '';
			for (var i = 0; i < 100; i++) {
				inner_fild += '<div class="block" onclick="draw_black(' + i +')"></div>';
				fild[0].innerHTML =  inner_fild;
			}

			for (var i = 0; i < blocks.length; i++) {
				blocks[i].style.background = "#ccc";
				states[i] = blocks[i].style.background;
				states[i] = 'empty';
			}
		}
	 //Btn Restart
		 restart[0].onclick = function () {
		 		var count_width = document.getElementById('count_width').value;
				var inner_fild='';
				for (var i = 0; i < count_width*count_width; i++) {
					inner_fild += '<div class="block" onclick="draw_black(' + i +')"></div>';
					fild[0].innerHTML =  inner_fild;
				}
				for (var i = 0; i < blocks.length; i++) {
					blocks[i].style.width = 300/count_width + 'px';
					blocks[i].style.height = 300/count_width + 'px';
				}
			 	for (var i = 0; i < blocks.length; i++) {
					blocks[i].style.background = "#ccc";
					states[i] = blocks[i].style.background;
					states[i] = 'empty';
				}
		 }
	//Draw block
	function draw_black(nr) {
		if (states[nr] = 'empty'		) {
			blocks[nr].style.background = "#000";
			states[nr] = 'life';
		}
		for (var i = 0; i < states.length; i++) {
			states_1[i] = states[i];
		}
	}
	
	//Find neihgbors
	function near (nr) {
		var count_neighbors = new Array(2);
		if (nr % Math.sqrt(blocks.length) == 0) {
			neighbors[0] = "";
			neighbors[1] = states[nr - Math.sqrt(blocks.length)];
			neighbors[2] = states[nr - Math.sqrt(blocks.length) + 1];
			neighbors[3] = "";
			neighbors[4] = states[nr + 1];
			neighbors[5] = "";
			neighbors[6] = states[nr + Math.sqrt(blocks.length)];
			neighbors[7] = states[nr + Math.sqrt(blocks.length) + 1];
		}
		else if (nr % Math.sqrt(blocks.length) == Math.sqrt(blocks.length) - 1) {
			neighbors[0] = states[nr - Math.sqrt(blocks.length) - 1];
			neighbors[1] = states[nr - Math.sqrt(blocks.length)];
			neighbors[2] = "";
			neighbors[3] = states[nr - 1];
			neighbors[4] = "";
			neighbors[5] = states[nr + Math.sqrt(blocks.length) - 1];
			neighbors[6] = states[nr + Math.sqrt(blocks.length)];
			neighbors[7] = "";
		}
		else{
			neighbors[0] = states[nr - Math.sqrt(blocks.length) - 1];
			neighbors[1] = states[nr - Math.sqrt(blocks.length)];
			neighbors[2] = states[nr - Math.sqrt(blocks.length) + 1];
			neighbors[3] = states[nr - 1];
			neighbors[4] = states[nr + 1];
			neighbors[5] = states[nr + Math.sqrt(blocks.length) - 1];
			neighbors[6] = states[nr + Math.sqrt(blocks.length)];
			neighbors[7] = states[nr + Math.sqrt(blocks.length) + 1];
		}
		var em = 0;
		var life = 0;
		for (var i = 0; i < neighbors.length; i++) {
			if (neighbors[i] == "empty") em++;
			else if (neighbors[i] == "life") life++;
		}
		count_neighbors[0] = em;
		count_neighbors[1] = life;
		return count_neighbors
	}


	iterate[0].onclick = function () {

	for (var i = 0; i < states.length; i++) {
        if (states[i] == "empty" && near(i)[1] == 3  )
        {
             blocks[i].style.background = "#000";
             states_1[i] = "life";
        }
		if (states[i] == "life" && (near(i)[1] == 2 || near(i)[1] == 3 )) {
        	blocks[i].style.background = "#000";
            states_1[i] = "life";
        }
       	if (states[i] == "life" && (near(i)[1] < 2 || near(i)[1] > 3 )) {
        	blocks[i].style.background = "#ccc";
            states_1[i] = "empty";
		}

	}
	for (var i = 0; i < states_1.length; i++) {
		states[i] = states_1[i];
	}
}