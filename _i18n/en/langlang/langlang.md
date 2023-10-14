
#  This is English markdown
<hr>
{{ site.lang }}
<hr>
{{ page.url}}
<hr>
{{ site.baseurl_root }}
<hr>
<hr>
<hr>

{% if site.lang == "en" %}
  {% capture link1 %}{{ site.baseurl_root }}/es{{ page.url}}{% endcapture %}
  <a href="{{ link1 }}" > Link to Spanish </a>
{% endif %}
