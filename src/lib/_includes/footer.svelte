<script lang="ts">
	interface Props {
		author?: string;
		default_paths?: string[];
		description?: string;
	}
	let { author = 'Lennard Wolf', default_paths, description }: Props = $props();
</script>

<footer id="site-footer">
	<div class="container">
		<!-- <div class="h5 pt-4">{{ site.title | escape }}</div> -->

		<div class="row">
			<!-- <div class="col col-lg-3">
        <ul class="list-unstyled">
          <li class="text-secondary">
            {% if site.author %}
            {{ site.author | escape }}
            {% else %}
            {{ site.title | escape }}
            {% endif %}
          </li>
          {% if site.email %}
          <li><a href="mailto:{{ site.email }}">{{ site.email }}</a></li>
          {% endif %}
        </ul>
      </div> -->
			<!-- {% if site.footer_icons %}
      <div class="col-6 col-lg-3">
        <ul class="list-unstyled">
          {% for footer_icon in site.footer_icons %}
          <li>
            <a href="{{ footer_icon.url }}">
              {% if footer_icon.icon %}
              <p>{{footer_icon}}</p>

              {% capture icon %}{% include social-icons/{{footer_icon.icon}}.svg %}{% endcapture %}
              <span class="align-middle text-secondary pr-2">{{ icon | strip }}</span>{% endif
              %}<span>{{ footer_icon.username }}</span>
            </a>
          </li>
          {% endfor %}
        </ul>
      </div>
      {% endif %} -->

			<!-- <ul class="social-media-list"> -->

			<!-- {% if site.social_links %}
         <div class="col-3 col-lg-3"> 
       <div class="footer-col"> 
      <ul class="list-unstyled">
        {%- for entry in site.social_links -%}
        <li>
          {%- include social-item.html item = entry -%}
        </li>
        {%- endfor -%}
      </ul>
      {% endif %} -->

			{#if description}
				<div class="col-lg col-12">
					<p class="text-secondary text-justify">{description}</p>
				</div>
			{/if}
		</div>
		<p align="right" style="font-size: small; color: black">
			© {new Date().getFullYear()} -
			{author}
		</p>
	</div>
</footer>

<style lang="scss">
	.site-footer {
		position: absolute;
		font-size: small;
		font-family: 'Hack Nerd Font Mono';
		text-align: right;

		.container {
			border-top: 2px solid $layout-color-border;
			border-right: 2px dashed $layout-color-border;
			border-left: 2px dashed $layout-color-border;
			padding-top: 0.75rem;
			padding-left: 0.75rem;
			padding-right: 0.75rem;
			padding-bottom: 0.2rem;
		}
	}
</style>
