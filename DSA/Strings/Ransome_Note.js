let ransomNote = "aab";
let magazine = "baa";
for ( const ch of ransomNote )
{
    if ( !magazine.includes( ch ) ) return false;
    magazine = magazine.replace( ch, "" )
    console.log(magazine);
}
