<?php
?>
<!-- 
model footer section. using php to automatically give us the correct year
-->

</div><!-- closing of class="flex-container" tag only -->	
		<footer>
			<address> 
					Copyright © 2010-<?php echo (date("Y")); ?>
					 Sheridan College   <strong> | </strong>  
					Page updated <?php echo( date (" F Y", getlastmod())); ?>
			</address>
		</footer>     <!-- end footer -->
  </body><!-- body -->
</html>
