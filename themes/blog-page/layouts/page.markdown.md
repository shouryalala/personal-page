---
title: {{ .Title | jsonify }}
date: {{ .Date.Format "2006-01-02" }}
description: {{ .Description | jsonify }}
url: {{ .Permalink | jsonify }}
{{- with .Params.image }}
image: {{ . | absURL | jsonify }}
{{- end }}
{{- with .Params.categories }}
categories: {{ . | jsonify }}
{{- end }}
{{- with .Params.tags }}
tags: {{ . | jsonify }}
{{- end }}
author: {{ .Site.Params.author | jsonify }}
---

# {{ .Title }}

{{ .RawContent }}
