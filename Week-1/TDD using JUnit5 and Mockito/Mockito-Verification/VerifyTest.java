
import static org.mockito.Mockito.*;import org.junit.jupiter.api.Test;
interface ExternalApi2{String getData();}
class MyService2{ExternalApi2 a;MyService2(ExternalApi2 a){this.a=a;}void fetch(){a.getData();}}
public class VerifyTest{@Test void t(){ExternalApi2 m=mock(ExternalApi2.class);new MyService2(m).fetch();verify(m).getData();}}
