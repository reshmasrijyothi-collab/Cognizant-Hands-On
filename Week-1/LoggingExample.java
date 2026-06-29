
import org.slf4j.*;
public class LoggingExample{
 static Logger logger=LoggerFactory.getLogger(LoggingExample.class);
 public static void main(String[] a){logger.error("Error");logger.warn("Warning");}
}
