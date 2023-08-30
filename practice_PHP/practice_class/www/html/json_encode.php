<?php

class Profile 
{
  private  $name;
  private  $age;
  private  $address;
  private  $email;

  public function __construct( string $name, int $age, string $address, string $email ){
    $this->name = $name;
    $this->age = $age;
    $this->address = $address;
    $this->email = $email;
  }
  
  public function createArr() {
    return [
      'name' => $this->name,
      'age' => $this->age,
      'address' => $this->address,
      'email' => $this->email
    ];
  }

}

$famiry = [];

function createData($name, $age, $address, $email){
  $newMember = new Profile($name, $age, $address, $email);
  $memberData = $newMember->createArr();
  return $memberData;
}

$famiry[] = createData('yukihiro', 42, 'hokkaido', 'abc@example.com');
$famiry[] = createData('asami', 42, 'hokkaido', '123@example.com');
$famiry[] = createData('yuuya', 20, 'hokkaido', '123@example.com');

$familyData = json_encode($famiry);

var_dump($familyData);

?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="container">
    <div class="container-inner">
      

    </div>
  </div>
  <script>
    const familyData = JSON.parse('<?php echo $familyData; ?>')
    const div = document.createElement('div')
    div.textContent = `わたしの名前は、${familyData[0].name}です。`
    const inner = document.querySelector('.container-inner')
    inner.appendChild(div)

    console.log(familyData)
    
    const asami = {
      name: "asami"
    }

    fetch('server.php',{
      method: 'post',
      headers: {'Contet-Type': 'application/json'},
      body: JSON.stringify(asami),
        }
    )
    .then(response => response.json())
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    }
    )
  </script>
</body>

</html>