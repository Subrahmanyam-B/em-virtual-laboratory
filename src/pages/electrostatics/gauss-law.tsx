import { Button } from "@/components/ui/button";

const GaussLawPage = () => {
  return (
    <div className="px-48 flex flex-col border-t border-slate-300">
      <div className="text-xl font-black uppercase text-center py-10">
        Gauss Law
      </div>
      <div>
        <div>
          The electric flux through an area is defined as the electric
          field multiplied by the area of the surface projected in a plane
          perpendicular to the field.
        </div>
      </div>
      <div>Proof of Gaus Law</div>
      <div>
        <div>
          Consider a point charge <i>Q</i> located in a homogeneous isotropic
          medium of permittivity <i>ε</i>. At any point, the{" "}
          <strong>electric field intensity</strong> at a distance <i>r</i> from
          the charge is:{" "}
        </div>
        <div>The flux density is given as,</div>
        <div>the flux through area dA</div>
        <div>Where θ is the angle between D and the normal to dA.</div>
        <div>
          Now, dAcosθ is the projection of dA that is normal to the radius
          vector. Solid angle is given by,
        </div>
        <div>
          dΩ is the solid angle subtended at <i>Q</i> by the elementary surface
          area
          <i>dA</i>. So the total displacement of flux through the entire
          surface area is:{" "}
        </div>
        <div>
          The total electric flux through the entire surface is This is the
          integral form of Gauss theorem. And hence this theorem is proved.
        </div>
      </div>
      <div>
        <div>
          Gauss's law is one of the four equations of electricity and magnetism.
          The four applications of Gauss's Law are to find out the field due to
          a uniformly charged Straight wire, a uniformly charged Infinite plate
          sheet, a uniformly charged thin spherical shell, and a low uniformly
          charged sphere.
        </div>

        <div className="font-bold text-2xl">1. Point Charge</div>
        <div>
          All sections of the gaussian surface should be chosen so that they are
          either parallel or perpendicular to E.
        </div>
        <div>|E| should be constant on each surface having non-zero flux.</div>
        <div>
          At all points on the spherical surface, the vector associated with the
          infinitesimal surface element <i>dA</i> will point in the same
          direction as the electric field at that point, i.e., radially outward.
          Thus, the integrand of the surface integral for evaluating electric
          flux will reduce from <i>E &middot; dA</i> to <i>E dA</i>.{" "}
        </div>
        <div>
          Furthermore, the magnitude of the electric field will be identical at
          all points on the spherical surface. The sphere is centered about the
          charge; each point on the surface is an identical distance from the
          center (by definition of a spherical surface). Thus the electric field
          may be moved outside the integral; the surface integral reduces to the
          product of the electric field and the surface area of a sphere.
        </div>
        <div className="font-bold text-2xl">2. Infinite Line Charge</div>
        <div>
          {" "}
          To apply <strong>Gauss' Law</strong>, we choose a surface that
          encloses the charge. A{" "}
          <strong>
            cylinder of radius <i>a</i>
          </strong>{" "}
          along the{" "}
          <strong>
            <i>z</i>-axis
          </strong>
          is ideal due to its symmetry with the charge distribution. Although
          the charge extends infinitely in both the{" "}
          <strong>
            +<i>z</i>
          </strong>{" "}
          and{" "}
          <strong>
            -<i>z</i>
          </strong>
          directions, we initially consider a{" "}
          <strong>
            finite cylinder of length <i>l</i>
          </strong>
          . We solve for this finite case first, with the option to later extend
          <strong>
            <i>l → ∞</i>
          </strong>{" "}
          if needed, though it may not be necessary.
        </div>
        <div>
          D = ρ<sup>D</sup>ρ(ρ)
        </div>
      </div>
      <div className="flex justify-end mb-48">
        <Button className="px-6">Next</Button>
      </div>
    </div>
  );
};

export default GaussLawPage;
