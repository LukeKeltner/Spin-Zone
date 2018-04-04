var identity = 3
var value = 999
$('#label').html("")


$('.button').hover(
	function(event)
	{
		if (identity > 2)
		{
			$(this).animate({'width':'100%'}, 100)
		}
	},

	function(event)
	{
		if (identity > 2)
		{
			$(this).animate({'width':'50%'}, 100)
		}
	}
)

$(document).on('click', '.button', function()
{
	identity = $(this).attr('identity')
	var color = $(this).css('backgroundColor');
	$('.button').css({'background-color':'gray'})
	$('.button').prop("disabled",true);
	$(this).css({'background-color':color})
	$('#slider').fadeIn()
	$('#value').html("")
})

var onSlider = function(event)
{
	$('#choose').css({'display': 'inline-block'}, 100);
	$('#slider').animate({'height': '60px'}, 100)
}

var offSlider = function(event)
{
	$('#choose').css({'display': 'none'}, 100);
	$('#slider').animate({'height': '60px'}, 100)
	$('#value').html("")
}

$('#slider').mousemove(function(event)
{
	var containerWidth = $('.container').width();
	var fullWidth = $(window).width()
	var margin = (fullWidth-containerWidth)/2
	value = Math.floor(Math.round((event.pageX-margin+35)/(fullWidth-2*margin)*200,2)-100)
	var place = containerWidth-60
	$('#choose').css({'left': event.clientX-30-margin})

	if (0 < value)
	{
		$('#value').html(Math.abs(value))
		$('#value').css({'color': 'red'})
	}

	else if (value < 0)
	{
		$('#value').html(Math.abs(value))
		$('#value').css({'color': 'blue'})		
	}

	else
	{
		$('#value').html(Math.abs(value))
		$('#value').css({'color': 'purple'})		
	}

	if (value<=10 && value>=-10)
	{
		$('#label').html("Pretty Neutral")
		$('#label').css({'color': 'purple'})
	}

	else if (value > 10 && value <=50)
	{
		$('#label').html("Leaning Conservative")
		$('#label').css({'color': 'red'})
	}

	else if (value > 50)
	{
		$('#label').html("Very Conservative")
		$('#label').css({'color': 'red'})
	}

	else if (value < -10 && value >= -50)
	{
		$('#label').html("Leaning Liberal")
		$('#label').css({'color': 'blue'})
	}

	else if (value < -50)
	{
		$('#label').html("Very Liberal")
		$('#label').css({'color': 'blue'})
	}
})

$(document).on('click', '#choose', function(event)
{
	$('#slider').css({'background': 'red'})
})

//event.clientX-fullWidth*0.05-35
