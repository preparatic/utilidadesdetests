function renderTestSelectorBloques() {
    document.writeln('<ul class="dropdown-menu">');

    document.writeln('<li><a href="test_0000.html">Test 0000</a></li>');
    document.writeln('<li><a href="test_0000.html">Test 0001</a></li>');
    document.writeln('<li><a href="test_0000.html">Test 0002</a></li>');
    document.writeln('<li><a href="test_0000.html">Test 0003</a></li>');
    document.writeln('<li><a href="test_0000.html">Test 0004</a></li>');
    document.writeln('<li><a href="test_0000.html">Test 0005</a></li>');
    document.writeln('<li><a href="test_0000.html">Test 0006</a></li>');
    document.writeln('<li><a href="test_0000.html">Test 0007</a></li>');
    
    $hreflist:{
document.writeln('<li><a href="$it.url$">$it.title$</a></li>');}$
    
    document.writeln('</ul>');
}