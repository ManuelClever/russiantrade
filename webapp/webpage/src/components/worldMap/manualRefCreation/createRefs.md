<p>
    This simple template creates ref properties for each country from iso_codes.json.
</p>
<p>
    Start the template.html website in your favorite browser. Open the developer console and copy the outerHTML of '#worldMap'. 
    Now paste it in WorldMap.tsx. It includes refs properties named after the iso codes of each country.
</p>
<p>
    There in WorldMap.tsx replace the style property in <svg></svg> with a JSX reference (width and height need to be 100%).
    Delete the other style properties and start a search and replace: 
    'class' with 'className'
    '"{' with '{'
    '}"' with '}'
</p>
<p>
    Now copy the innerHTML of '#refInit' via the dev tools in your browser and paste them in WorldMap.tsx somewhere above the return.
</p>