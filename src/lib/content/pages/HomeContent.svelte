<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<p>
	Hello, my name is Lennard Wolf and I am a <span style="color: green">software</span>
	<span style="color: red">engineer</span> and <span style="color: purple">consultant</span>
	from Berlin.
</p>

<br />

<p>You can check out my CV <a href={resolve('/resume')}><em>here</em></a> and some links below:</p>

<ul>
	<li><a href={resolve('/github')}>GitHub</a></li>
	<li><a href={resolve('/linkedin')}>LinkedIn</a></li>
	<li><a href="https://letterboxd.com/MultifokalHirn">letterboxd</a></li>
	<li><a href="https://about.me/lennardwolf">about.me</a></li>
</ul>
