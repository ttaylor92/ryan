<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  //User object
  class User
  {
    public $firstName;
    public $lastName;
    public $userName;
    public $phoneNumber;
    public $email;
    public $password;
    public $repeatPassword;
    public $address1;
    public $address2;
    public $state;
    public $city;
    public $zipCode;
    public $gender;
    public $marital;
  }

  $newUser = new User();

  function req50($data)
  {
    $dataFinal = trim($data);
    if (empty($dataFinal)) {
      return "Error: Cannot Be empty";
    } else if ($data == $_POST["userName"] && strlen($dataFinal) < 6) {
      return "Error: Cannot be less than 6 characters";
    } else if ($data == $_POST["state"] && strlen($dataFinal) > 52) {
      return "Error: Cannot be more than 52 characters";
    } else if (strlen($dataFinal) > 50) {
      return "Error: Cannot be more than 50 characters";
    } else {
      return $dataFinal;
    }
  }

  function address($data)
  {
    $dataFinal = trim($data);
    if ($data == $_POST["address1"]) {
      if (empty($dataFinal)) {
        return "Error: Cannot be empty";
      } else {
        if (strlen($dataFinal) > 100) {
          return "Error: Cannot be more than 100 characters";
        } else {
          return $dataFinal;
        }
      }
    } else if ($data == $_POST["address2"]) {
      if (strlen($dataFinal) > 100) {
        return "Error: Cannot be more than 100 characters";
      } else {
        return $dataFinal;
      }
    } else {
      return $dataFinal;
    }
  }

  function pass($data)
  {
    $dataFinal = trim($data);
    if ($dataFinal == $_POST["password"]) {
      if (empty($dataFinal)) {
        return "Error: Cannot be empty";
      } else {
        if (strlen($dataFinal) > 50) {
          return "Error: Cannot be more than 50 characters";
        } else {
          // Validate password strength
          $uppercase = preg_match('@[A-Z]@', $dataFinal);
          $lowercase = preg_match('@[a-z]@', $dataFinal);
          $number    = preg_match('@[0-9]@', $dataFinal);
          $specialChars = preg_match('@[^\w]@', $dataFinal);

          if (!$uppercase || !$lowercase || !$number || !$specialChars || strlen($dataFinal) < 8) {
            return 'Error: Password should be at least 8 characters in length and should include at least one upper case letter, one number, and one special character.';
          } else {
            return $dataFinal;
          }
        }
      }
    } else {
      $data2 = trim($_POST["password"]);
      if ($dataFinal !== $data2) {
        return "Error: passwords must match";
      } else {
        return $dataFinal;
      }
    }
  }

  function email($data)
  {
    $email = trim($data);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      return "Error: Invalid email format";
    } else {
      return $email;
    }
  }

  function dob($month, $day, $year)
  {
    if (checkdate($month, $day, $year)) {
      return $month . $day . $year;
    }
  }

  function number($data)
  {
    $dataFinal = trim($data);
    if (strlen($dataFinal) > 12) {
      return "Error: Cannot be more than 12 characters";
    } else {
      if (!preg_match('/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/', $dataFinal)) {
        return 'Error: Invalid Number!';
      } else {
        return $dataFinal;
      }
    }
  }

  function zip($data)
  {
    $dataFinal = trim($data);
    if (strlen($dataFinal) > 10 || strlen($dataFinal) < 5) {
      return "Error: Must be between 5 to 10 characters";
    } else {
      if (!preg_match('/^\d{5}([\-]?\d{4})?$/', $dataFinal)) {
        return "Error: Invalid zip code";
      } else {
        return $dataFinal;
      }
    }
  }

  function input($data)
  {
    switch ($data) {
      case "userName":
        return req50($_POST["userName"]);
        break;
      case "firstName":
        return req50($_POST["firstName"]);
        break;
      case "lastName":
        return req50($_POST["lastName"]);
        break;
      case "address1":
        return address($_POST["address1"]);
        break;
      case "address2":
        return address($_POST["address2"]);
        break;
      case "city":
        return req50($_POST["city"]);
        break;
      case "gender":
        return req50($_POST["gender"]);
        break;
      case "marital":
        return req50($_POST["marital"]);
        break;
      case "password":
        return pass($_POST["password"]);
        break;
      case "repeatPassword":
        return pass($_POST["repeatPassword"]);
        break;
      case "email":
        return email($_POST["email"]);
        break;
      case "phoneNumber":
        return number($_POST["phoneNumber"]);
        break;
      case "zipCode":
        return zip($_POST["zipCode"]);
        break;
      default:
        return "Not recognized";
    }
    // $data = trim($data);
    // $data = stripslashes($data);
    // $data = htmlspecialchars($data);
    // return $data;
  }

  $newUser->firstName = input("firstName");
  $newUser->lastName = input("lastName");
  $newUser->userName = input("userName");
  $newUser->phoneNumber = input("phoneNumber");
  $newUser->email = input("email");
  $newUser->password = input("password");
  $newUser->repeatPassword = input("repeatPassword");
  $newUser->address1 = input("address1");
  $newUser->address2 = input("address2");
  $newUser->state = input("state");
  $newUser->city = input("city");
  $newUser->zipCode = input("zipCode");
  $newUser->gender = input("gender");
  $newUser->marital = input("marital");

  $myJSON = json_encode($newUser);
  echo $myJSON;
} else {
  // Not a POST request, set a 403 (forbidden) response code.
  //http_response_code(403);
  echo "Not a POST request";
}
