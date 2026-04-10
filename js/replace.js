let body = $response.body;
body = body.replace(/􄕊􉽃（􄣁􆆰􈪧􉽃）/g, '􄕊􉽃');
body = body.replace(/2020/g, '2030');
body = body.replace(/学籍状态/g, '学籍状态              在籍');
$done({body});
