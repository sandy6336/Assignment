import java.util.Scanner;

public class Question3 {
    public static boolean isPangram(String str) {
        int[] alphabet = new int[26];

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
                if (ch >= 'A' && ch <= 'Z') {
                    ch = (char) (ch + 32); // converting to lowercase
                }
                // Marking the corresponding letter as present
                alphabet[ch - 'a'] = 1;
            }
        }

        for (int i = 0; i < 26; i++) {
            if (alphabet[i] == 0) {
                return false; // if any letter is not present, return false
            }
        }
        return true; // all letters are present, return true
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the string: ");
        String input = scanner.nextLine();

        if (isPangram(input)) {
            System.out.println("The Entered String is a Pangram String");
        } else {
            System.out.println("The Entered String is not a Pangram String");
        }
        scanner.close();
    }
}
