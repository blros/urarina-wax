
#  This is Spanish markdown
<br>
<br>

{% if site.lang == "es" %}
  {% capture link1 %}{{ site.baseurl_root }}/{{ page.url}}{% endcapture %}
  <a href="{{ link1 }}" > Link to English </a>
{% endif %}
