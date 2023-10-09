import java.util.Random;

public class Question1 {
    public static void main(String[] args) {
        // Array creation with the values (1, 2, 3, 4, 5, 6, 7)
        int[] myArray = {1, 2, 3, 4, 5, 6, 7};

        // Shuffle the array
        shuffleArray(myArray);

        // Printing the shuffled array
        for (int value : myArray) {
            System.out.print(value + " ");
        }
    }

    public static void shuffleArray(int[] array) {
        int n = array.length;
        Random random = new Random();

        for (int i = n - 1; i > 0; i--) {
            // Generating a random index between 0 and i 
            int j = random.nextInt(i + 1);

            // Swap array[i] and array[j]
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
