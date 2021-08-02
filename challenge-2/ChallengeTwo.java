public class ChallengeTwo {
  private static String name = "Murilo";
  private static String nacionality = "Brazilian";
  private static String biggestDream = "My biggest dream is to work and live at the Silicon Valley";

  public static void main(String[] args) {
    printName();
    printNacionality();
    printBiggestDream();
  }

  private static void printName() {
    System.out.println("Name: " + name);
  }

  private static void printNacionality() {
      System.out.println("Nacionality: " + nacionality);
  }

  private static void printBiggestDream() {
      System.out.println("Biggest Dream: " + biggestDream);
  }
  
}