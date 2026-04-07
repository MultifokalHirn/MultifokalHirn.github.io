<script lang="ts">
	import { resolve } from '$app/paths';

	interface Props {
		status?: number;
	}

	let { status = 404 }: Props = $props();
</script>

<div style="background: black; padding: 2%">
	<p>
		<code style="color: white; font-size: large;">
			{status}
		</code>
	</p>
	<p>
		<code style="color: white">
			ACHTUNG! ALLES TURISTEN UND NONTEKNISCHEN LOOKENPEEPERS! DAS KOMPUTERMASCHINE IST NICHT FUR
			DER GEFINGERPOKEN UND MITTENGRABEN! ODERWISE IST EASY TO SCHNAPPEN DER SPRINGENWERK,
			BLOWENFUSEN UND POPPENCORKEN MIT SPITZENSPARKEN. IST NICHT FUR GEWERKEN BEI DUMMKOPFEN. DER
			RUBBERNECKEN SIGHTSEEREN KEEPEN DAS HANDER IN DAS POCKETS MUSS. ZO RELAXEN UND WATSCHEN DER
			BLINKENLICHTEN.
		</code>
	</p>
	<p>
		<a href={resolve('/')} style="color: white">Return home</a>
	</p>
</div>
