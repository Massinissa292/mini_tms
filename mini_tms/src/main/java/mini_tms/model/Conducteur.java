package mini_tms.model;



import jakarta.persistence.*;

@Entity
public class Conducteur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getNumeroPermis() {
		return numeroPermis;
	}
	public void setNumeroPermis(String numeroPermis) {
		this.numeroPermis = numeroPermis;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	private String nom;
    private String prenom;
    private String numeroPermis;
    private String telephone;

   
}
